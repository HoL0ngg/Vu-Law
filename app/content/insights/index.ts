import type { Locale } from "../../i18n/config";
import { prevailingInLitigation } from "./prevailing-in-litigation";
import { fetchSanityArticles } from "./sanity";
import type { Article } from "./types";

/**
 * Articles kept in code, used as the fallback when Sanity is not set up or cannot be
 * reached. Once an article lives in Sanity it can be deleted from here: when both hold the
 * same slug, the Sanity version wins.
 */
const localArticles: readonly Article[] = [prevailingInLitigation];

/** Every published article, newest first. Sanity articles replace local ones with the same slug. */
export async function getArticles(): Promise<readonly Article[]> {
  const fromSanity = (await fetchSanityArticles()) ?? [];
  const slugs = new Set(fromSanity.map((article) => article.slug));
  const all = [...fromSanity, ...localArticles.filter((article) => !slugs.has(article.slug))];
  return all.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : a.slug < b.slug ? -1 : 1));
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return (await getArticles()).find((article) => article.slug === slug);
}

/** The headline and standfirst of an article in one language. */
export function articleText(article: Article, locale: Locale) {
  return article[locale];
}

/** Calendar date rendered in the reader's language. UTC avoids a one-day shift in some zones. */
export function formatArticleDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export type { Article, ArticleBlock } from "./types";
