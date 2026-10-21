import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { formatArticleDate, type Article } from "../content/insights";
import { insightPath, routePath } from "../i18n/routes";
import { SITE_NAME, absoluteUrl } from "../lib/site";
import PageFrame from "./PageFrame";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type InsightArticleViewProps = {
  dictionary: Dictionary;
  article: Article;
  locale?: Locale;
};

/** schema.org Article data, so search engines can read the page as an article. */
function articleJsonLd(article: Article, locale: Locale) {
  const text = article[locale];
  const url = absoluteUrl(insightPath(article.slug, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: text.title,
    description: text.metaDescription ?? text.subtitle,
    ...(article.coverImage ? { image: article.coverImage } : {}),
    inLanguage: locale === "vi" ? "vi-VN" : "en",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    // No individual author is named in the Client's material, so the firm is the author.
    author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo.png") },
    },
  };
}

export default function InsightArticleView({ dictionary, article, locale = "en" }: InsightArticleViewProps) {
  const text = article[locale];
  const category = dictionary.insightsPage.cards[article.category].category;
  const jsonLd = JSON.stringify(articleJsonLd(article, locale)).replace(/</g, "\\u003c");

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <article className="article-page">
        <header className="article-hero">
          <div className="about-hero-image" aria-hidden="true" />
          <div className="about-hero-shade" />
          <div className="article-hero-copy">
            <Link className="article-back reveal" href={routePath("insights", locale)}>
              <span aria-hidden="true">←</span>{dictionary.navigation.insights}
            </Link>
            <p className="article-meta reveal" style={stagger(1)}>
              <span>{category}</span>
              <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time>
            </p>
            <h1 className="reveal-line" style={stagger(1)}>{text.title}</h1>
            <p className="article-standfirst reveal" style={stagger(3)}>{text.subtitle}</p>
          </div>
        </header>

        <div className="article-body section-paper">
          <div className="article-prose">
            {text.blocks.map((block, index) => {
              const key = `${block.type}-${index}`;
              if (block.type === "h2") return <h2 key={key}>{block.text}</h2>;
              if (block.type === "aside") return <p className="article-aside" key={key}>{block.text}</p>;
              if (block.type === "note") return <p className="article-note" key={key}>{block.text}</p>;
              return <p key={key}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
