import type { Metadata } from "next";
import { summaryOf, type Article } from "../content/insights";
import { insightPath } from "../i18n/routes";
import type { Locale } from "../i18n/config";
import { coverImageUrl } from "./cover-image";
import { SITE_NAME, absoluteUrl } from "./site";

/**
 * Search and social metadata for one article in one language: canonical URL, hreflang pair,
 * and Open Graph / Twitter tags. The description is the meta description when one is set, else the standfirst.
 */
export function articleMetadata(article: Article, locale: Locale): Metadata {
  const text = article[locale];
  if (!text) return {};
  const path = insightPath(article.slug, locale);
  const description = text.metaDescription ?? summaryOf(text, 160);
  // 1200x630 is the shape social networks expect.
  const image = article.coverImage ? coverImageUrl(article.coverImage, 1200, 630, true) : absoluteUrl("/images/logo.png");

  return {
    title: text.seoTitle ?? `${text.title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      // Only the languages the article exists in: pointing search engines at a page that
      // 404s would be worse than naming none. English is the default when it exists.
      languages: {
        ...(article.en ? { en: absoluteUrl(insightPath(article.slug, "en")) } : {}),
        ...(article.vi ? { vi: absoluteUrl(insightPath(article.slug, "vi")) } : {}),
        "x-default": absoluteUrl(insightPath(article.slug, article.en ? "en" : "vi")),
      },
    },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: text.title,
      description,
      url: absoluteUrl(path),
      locale: locale === "vi" ? "vi_VN" : "en_GB",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      images: [{ url: image }],
    },
    twitter: {
      card: article.coverImage ? "summary_large_image" : "summary",
      title: text.title,
      description,
      images: [image],
    },
  };
}
