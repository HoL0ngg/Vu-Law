import type { Article, ArticleBlock, ArticleLocale } from "./types";

/**
 * Articles written in Sanity Studio (the `studio/` folder), read over Sanity's public HTTP
 * API with a plain `fetch`: no client library, so the website gains no dependency.
 *
 * Only published documents are returned. A draft saved by the marketing team stays
 * invisible here until the administrator publishes it in the Studio.
 */

const API_VERSION = "2025-02-19";
/** Seconds a fetched list stays fresh. A published article reaches the site within this time. */
const REVALIDATE_SECONDS = 60;

/** Order matches `insightsPage.cards` (and `Article.category`). Keep in step with `studio/schemaTypes/article.ts`. */
const CATEGORY_KEYS = ["legal-update", "legal-insight", "case-note", "practical-guide"] as const;

const localeProjection = `{
    title, subtitle, seoTitle, metaDescription,
    body[]{ _type, style, text, children[]{ text } }
  }`;

const QUERY = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  publishedAt,
  updatedAt,
  category,
  "coverImage": coverImage.asset->url,
  en ${localeProjection},
  vi ${localeProjection}
}`;

type RawBlock = {
  _type?: string;
  style?: string;
  text?: string;
  children?: { text?: string }[];
};

type RawLocale = {
  title?: string;
  subtitle?: string;
  seoTitle?: string;
  metaDescription?: string;
  body?: RawBlock[];
};

type RawArticle = {
  slug?: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  coverImage?: string;
  en?: RawLocale;
  vi?: RawLocale;
};

/** True once the project id is set; without it the site simply uses the articles kept in code. */
export function sanityConfigured(): boolean {
  return Boolean(process.env.SANITY_PROJECT_ID);
}

function endpoint(): string {
  const project = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || "production";
  // SANITY_API_ORIGIN exists so the mapping can be tested against a local stand-in.
  const origin = process.env.SANITY_API_ORIGIN || `https://${project}.apicdn.sanity.io`;
  const params = new URLSearchParams({ query: QUERY, perspective: "published" });
  return `${origin}/v${API_VERSION}/data/query/${dataset}?${params}`;
}

/** Portable Text block -> the few shapes the article renderer knows. Empty blocks are dropped. */
function toBlocks(body: RawBlock[] | undefined): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  for (const raw of body ?? []) {
    if (raw._type === "aside" || raw._type === "note") {
      const text = raw.text?.trim();
      if (text) blocks.push({ type: raw._type, text });
    } else if (raw._type === "block") {
      const text = (raw.children ?? []).map((child) => child.text ?? "").join("").trim();
      if (text) blocks.push({ type: raw.style === "h2" ? "h2" : "p", text });
    }
  }
  return blocks;
}

function toLocale(raw: RawLocale | undefined): ArticleLocale | undefined {
  const title = raw?.title?.trim();
  const subtitle = raw?.subtitle?.trim();
  const blocks = toBlocks(raw?.body);
  if (!title || !subtitle || blocks.length === 0) return undefined;
  return {
    title,
    subtitle,
    blocks,
    seoTitle: raw?.seoTitle?.trim() || undefined,
    metaDescription: raw?.metaDescription?.trim() || undefined,
  };
}

/** A half-filled document is skipped with a warning, so it can never break the whole site. */
export function toArticle(raw: RawArticle): Article | undefined {
  const category = CATEGORY_KEYS.indexOf(raw.category as (typeof CATEGORY_KEYS)[number]);
  const en = toLocale(raw.en);
  const vi = toLocale(raw.vi);
  if (!raw.slug || !raw.publishedAt || category < 0 || !en || !vi) {
    console.warn(`[insights] Skipped Sanity article "${raw.slug ?? "(no slug)"}": it needs a slug, date, category and, in both languages, a title, standfirst and body.`);
    return undefined;
  }
  return {
    slug: raw.slug,
    publishedAt: raw.publishedAt,
    updatedAt: raw.updatedAt || undefined,
    category: category as Article["category"],
    coverImage: raw.coverImage || undefined,
    en,
    vi,
  };
}

/** Published articles from Sanity, or `undefined` when Sanity is not set up or cannot be reached. */
export async function fetchSanityArticles(): Promise<Article[] | undefined> {
  if (!sanityConfigured()) return undefined;
  try {
    const response = await fetch(endpoint(), {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["articles"] },
    });
    if (!response.ok) {
      console.error(`[insights] Sanity answered ${response.status}; using the articles kept in code.`);
      return undefined;
    }
    const { result } = (await response.json()) as { result?: RawArticle[] };
    return (result ?? []).map(toArticle).filter((article): article is Article => Boolean(article));
  } catch (error) {
    console.error("[insights] Could not reach Sanity; using the articles kept in code.", error);
    return undefined;
  }
}
