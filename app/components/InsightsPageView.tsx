import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { formatArticleDate, getArticlesFor } from "../content/insights";
import { insightPath } from "../i18n/routes";
import ArticleArt from "./ArticleArt";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type InsightsPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default async function InsightsPageView({ dictionary, locale = "en" }: InsightsPageViewProps) {
  const page = dictionary.insightsPage;
  const insightArticles = await getArticlesFor(locale);
  const hasArticles = insightArticles.length > 0;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={page.heading} />

      {hasArticles ? (
        <section className="insights-section section-paper">
          <div className="insight-grid insight-grid--list">
            {insightArticles.map((article, index) => {
              const text = article[locale]!;
              const href = insightPath(article.slug, locale);
              return (
                <article className="insight-card reveal" key={article.slug} style={stagger(index)}>
                  <Link className="insight-art-link" href={href} tabIndex={-1} aria-hidden="true">
                    <ArticleArt article={article} index={index} />
                  </Link>
                  <p>
                    {page.cards[article.category].category}
                    <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time>
                  </p>
                  <h2><Link href={href}>{text.title}</Link></h2>
                  <p className="insight-card-summary">{text.subtitle}</p>
                  <Link href={href}>{page.readMore}<span aria-hidden="true">→</span></Link>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        /* Until the first article is published the Client asked for this notice instead. */
        <section className="coming-soon section-paper">
          <h2 className="display-heading reveal-line">{page.comingSoonTitle}</h2>
          {page.comingSoonBody.map((paragraph, index) => (
            <p className="reveal" key={paragraph} style={stagger(index + 1)}>{paragraph}</p>
          ))}
        </section>
      )}
    </PageFrame>
  );
}
