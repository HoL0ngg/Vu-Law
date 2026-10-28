import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { formatArticleDate, summaryOf, type Article, type ArticleBlock, type ArticleLocale } from "../content/insights";
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
function articleJsonLd(article: Article, text: ArticleLocale, locale: Locale) {
  const url = absoluteUrl(insightPath(article.slug, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: text.title,
    description: text.metaDescription ?? summaryOf(text, 160),
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

/** Words the Client wrapped in double asterisks (Markdown bold) are shown in bold. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

type Section = { heading?: string; blocks: Exclude<ArticleBlock, { type: "h2" }>[] };

/** Splits the body at each heading, so each heading and its text can be laid out as a unit. */
function toSections(blocks: readonly ArticleBlock[]): Section[] {
  const sections: Section[] = [{ blocks: [] }];
  for (const block of blocks) {
    if (block.type === "h2") sections.push({ heading: block.text, blocks: [] });
    else sections[sections.length - 1].blocks.push(block);
  }
  // An article that opens with a heading has no lead section.
  return sections.filter((section) => section.heading !== undefined || section.blocks.length > 0);
}

export default function InsightArticleView({ dictionary, article, locale = "en" }: InsightArticleViewProps) {
  const text = article[locale];
  // The route only renders an article in a language it has; this keeps the type honest.
  if (!text) return null;
  const category = dictionary.insightsPage.cards[article.category].category;
  const sections = toSections(text.blocks);
  const jsonLd = JSON.stringify(articleJsonLd(article, text, locale)).replace(/</g, "\\u003c");

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
            {text.subtitle ? <p className="article-standfirst reveal" style={stagger(3)}>{text.subtitle}</p> : null}
          </div>
        </header>

        <div className="article-body section-paper">
          {sections.map((section, sectionIndex) => (
            <section className={section.heading ? "article-section" : "article-lead"} key={`${sectionIndex}-${section.heading ?? "lead"}`}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              <div className="article-section-text">
                {section.blocks.map((block, index) => {
                  const key = `${block.type}-${index}`;
                  if (block.type === "aside") return <p className="article-aside" key={key}>{inline(block.text)}</p>;
                  if (block.type === "note") return <p className="article-note" key={key}>{inline(block.text)}</p>;
                  return <p key={key}>{inline(block.text)}</p>;
                })}
              </div>
            </section>
          ))}
        </div>
      </article>
    </PageFrame>
  );
}
