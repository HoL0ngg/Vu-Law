import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type ExpertisePageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function ExpertisePageView({ dictionary, locale = "en" }: ExpertisePageViewProps) {
  const page = dictionary.expertisePage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={dictionary.pages.expertise} paragraphs={[page.intro]}>
        <Link className="text-link reveal" style={stagger(3)} href={routePath("contact", locale)}>
          {page.lawyersCta}<span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      <section className="practice-index section-paper">
        <h2 className="section-label reveal">{page.areasTitle}</h2>
        <ul className="practice-index-list">
          {page.areas.map((area, index) => (
            <li className="reveal" key={area.id} style={stagger(index)}>
              <a href={`#${area.id}`}>{area.name}<i aria-hidden="true">↓</i></a>
            </li>
          ))}
        </ul>
      </section>

      {page.areas.map((area, index) => (
        <section
          className={`practice-area ${index % 2 === 0 ? "section-light" : "section-paper"}`}
          id={area.id}
          key={area.id}
        >
          <div className="practice-area-copy">
            <h2 className="display-heading reveal-line">{area.name}</h2>
            {area.paragraphs.map((paragraph, i) => (
              <p className="reveal" key={paragraph} style={stagger(i + 1)}>{paragraph}</p>
            ))}
            <Link className="text-link reveal" style={stagger(3)} href={routePath("contact", locale)}>
              {page.areaCta}<span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="practice-area-services">
            <h3 className="section-label reveal">{page.servicesTitle}</h3>
            <ul>
              {area.services.map((service, i) => (
                <li className="reveal" key={service} style={stagger(i)}>{service}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="practice-closing section-dark">
        <p className="display-heading reveal-line">{page.closing}</p>
        <div className="cta-row reveal" style={stagger(2)}>
          <Link className="text-link" href={routePath("contact", locale)}>
            {page.closingCta}<span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link text-link-muted" href={routePath("insights", locale)}>
            {page.insightsCta}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
