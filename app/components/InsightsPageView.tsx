import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import { isPlaceholder } from "../lib/contact";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type InsightsPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function InsightsPageView({ dictionary, locale = "en" }: InsightsPageViewProps) {
  const page = dictionary.insightsPage;
  const hasArticles = page.cards.some((card) => !isPlaceholder(card.title));

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={page.heading} />

      {/* No articles exist yet, so the Client asked for this notice in their place. */}
      <section className="coming-soon section-paper">
        <h2 className="display-heading reveal-line">{page.comingSoonTitle}</h2>
        {page.comingSoonBody.map((paragraph, index) => (
          <p className="reveal" key={paragraph} style={stagger(index + 1)}>{paragraph}</p>
        ))}
      </section>

      {/* The cards carry only "[Article title]" until the Client supplies articles, so
          they stay hidden and the coming-soon notice stands alone. They reappear on
          their own once a real title lands in the locale file. */}
      {hasArticles ? (
      <section className="insights-section section-light">
        <div className="insight-grid">
          {page.cards.map((card, index) => (
            <article className="insight-card reveal" key={card.category} style={stagger(index)}>
              <div className={`insight-art insight-art-${index + 1}`} aria-hidden="true" />
              <p>{card.category}</p>
              {/* TODO(client): Supply the article title and URL; the link falls back to this page. */}
              <h2>{card.title}</h2>
              <Link href={routePath("insights", locale)}>
                {page.readMore}<span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      ) : null}
    </PageFrame>
  );
}
