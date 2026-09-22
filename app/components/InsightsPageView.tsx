import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type InsightsPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function InsightsPageView({ dictionary, locale = "en" }: InsightsPageViewProps) {
  const page = dictionary.insightsPage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={page.heading} />

      <section className="insights-section section-paper">
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
    </PageFrame>
  );
}
