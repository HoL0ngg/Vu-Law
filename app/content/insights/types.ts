import type { Locale } from "../../i18n/config";

/**
 * One block of an article body. Kept to the few shapes the Client's articles actually
 * use, so the renderer stays simple and the content stays plain data.
 */
export type ArticleBlock =
  /** A numbered or titled section heading. */
  | { type: "h2"; text: string }
  /** An ordinary paragraph. */
  | { type: "p"; text: string }
  /** The italic "next angle" teaser that closes a section. */
  | { type: "aside"; text: string }
  /** The italic legal notice and copyright paragraphs at the end. */
  | { type: "note"; text: string };

export type ArticleLocale = {
  /** Verbatim as the Client wrote it, including their capitals. */
  title: string;
  /** The Client's one-line standfirst; also used as the meta description. */
  subtitle: string;
  /** Optional shorter <title> for search results; shown as written. Falls back to the headline. */
  seoTitle?: string;
  /** Optional 120-160 character meta description. Falls back to the standfirst. */
  metaDescription?: string;
  blocks: readonly ArticleBlock[];
};

export type Article = {
  /** ASCII, lowercase, hyphenated; shared by both languages (`/insights/<slug>`, `/vi/insights/<slug>`). */
  slug: string;
  /** ISO date (YYYY-MM-DD) the article went live. */
  publishedAt: string;
  /** Last substantive edit; omit until the first revision. */
  updatedAt?: string;
  /** Index into `insightsPage.cards`: 0 Legal Update, 1 Legal Insight, 2 Case Note, 3 Practical Guide. */
  category: 0 | 1 | 2 | 3;
  /** Optional image URL for social sharing; the firm logo is used when absent. */
  coverImage?: string;
  /**
   * Either language may be missing. The Client sometimes supplies one language first, and
   * machine-translating legal copy is forbidden, so an article simply appears only on the
   * pages of the language it has (see `hasLocale`).
   */
  en?: ArticleLocale;
  vi?: ArticleLocale;
};

export type LocaleKey = Locale;
