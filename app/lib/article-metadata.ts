import type { Metadata } from "next";
import type { Article } from "../content/insights";
import { insightPath } from "../i18n/routes";
import type { Locale } from "../i18n/config";
import { SITE_NAME, absoluteUrl } from "./site";

/**
 * Search and social metadata for one article in one language: canonical URL, hreflang pair,
 * and Open Graph / Twitter tags. The description is the Client's own standfirst.
 */
export function articleMetadata(article: Article, locale: Locale): Metadata {
  const text = article[locale];
  const path = insightPath(article.slug, locale);

  return {
    title: `${text.title} | ${SITE_NAME}`,
    description: text.subtitle,
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
      description: text.subtitle,
      url: absoluteUrl(path),
      locale: locale === "vi" ? "vi_VN" : "en_GB",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      images: [{ url: absoluteUrl("/images/logo.png") }],
    },
    twitter: {
      card: "summary",
      title: text.title,
      description: text.subtitle,
    },
  };
}
