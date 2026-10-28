import type { Locale } from "../../i18n/config";
import { prevailingInLitigation } from "./prevailing-in-litigation";
import { contractNegotiation } from "./contract-negotiation";
import { unsignedTransactions } from "./unsigned-transactions";
import { fetchSanityArticles } from "./sanity";
import type { Article, ArticleLocale } from "./types";

/**
 * Articles kept in code, used as the fallback when Sanity is not set up or cannot be
 * reached. Once an article lives in Sanity it can be deleted from here: when both hold the
 * same slug, the Sanity version wins.
 */
const localArticles: readonly Article[] = [prevailingInLitigation, unsignedTransactions, contractNegotiation];

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

/** True when the article has been written in this language. */
export function hasLocale(article: Article, locale: Locale): boolean {
  return Boolean(article[locale]);
}

/** The articles that exist in one language, newest first: what that language's lists show. */
export async function getArticlesFor(locale: Locale): Promise<readonly Article[]> {
  return (await getArticles()).filter((article) => hasLocale(article, locale));
}

/**
 * A short summary for lists and for the meta description: the standfirst when there is one,
 * otherwise the opening paragraph clipped at a word boundary. Nothing is rewritten.
 */
export function summaryOf(text: ArticleLocale, maxLength = 200): string {
  if (text.subtitle) return text.subtitle;
  const first = text.blocks.find((block) => block.type === "p")?.text ?? "";
  if (first.length <= maxLength) return first;
  const head = first.slice(0, maxLength);
  // Prefer to end on a full sentence, when one finishes in the later part of the allowance.
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "));
  if (sentenceEnd >= maxLength * 0.5) return head.slice(0, sentenceEnd + 1);
  return `${head.replace(/\s+\S*$/, "")}…`;
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

export type { Article, ArticleBlock, ArticleLocale } from "./types";
