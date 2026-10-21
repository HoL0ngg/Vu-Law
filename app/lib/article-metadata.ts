import type { Metadata } from "next";
import type { Article } from "../content/insights";
import { insightPath } from "../i18n/routes";
import type { Locale } from "../i18n/config";
import { SITE_NAME, absoluteUrl } from "./site";

/**
 * Search and social metadata for one article in one language: canonical URL, hreflang pair,
 * and Open Graph / Twitter tags. The description is the meta description when one is set, else the standfirst.
 */
export function articleMetadata(article: Article, locale: Locale): Metadata {
  const text = article[locale];
  const path = insightPath(article.slug, locale);
  const description = text.metaDescription ?? text.subtitle;
  // Sanity serves resized crops; 1200x630 is the shape social networks expect.
  const image = article.coverImage ? `${article.coverImage}?w=1200&h=630&fit=crop&auto=format` : absoluteUrl("/images/logo.png");

  return {
    title: text.seoTitle ?? `${text.title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        en: absoluteUrl(insightPath(article.slug, "en")),
        vi: absoluteUrl(insightPath(article.slug, "vi")),
        "x-default": absoluteUrl(insightPath(article.slug, "en")),
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
