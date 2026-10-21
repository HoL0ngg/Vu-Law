import type { Locale } from "../../i18n/config";
import { prevailingInLitigation } from "./prevailing-in-litigation";
import type { Article } from "./types";

/**
 * Every published article. To publish another: add a file next to this one that exports an
 * `Article` (copy `prevailing-in-litigation.ts`), import it here and add it to the list.
 * Order does not matter - they are sorted newest first below.
 */
const articles: readonly Article[] = [prevailingInLitigation];

export const insightArticles: readonly Article[] = [...articles].sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1,
);

export function getArticle(slug: string): Article | undefined {
  return insightArticles.find((article) => article.slug === slug);
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
