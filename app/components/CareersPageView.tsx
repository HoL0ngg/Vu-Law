import type { CSSProperties } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";
import { isPlaceholder, mailHref } from "../lib/contact";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type CareersPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function CareersPageView({ dictionary, locale = "en" }: CareersPageViewProps) {
  const page = dictionary.careersPage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={page.heading} />

      <section className="careers section-paper">
        <div className="careers-block">
          <h2 className="section-label reveal">{page.opportunitiesTitle}</h2>
          <ul className="careers-list">
            {page.opportunities.map((role, index) => (
              <li className="reveal" key={role} style={stagger(index)}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="careers-block">
          <h2 className="section-label reveal">{page.joinTitle}</h2>
          <p className="reveal" style={stagger(1)}>{page.joinBody}</p>
          <p className="careers-email reveal" style={stagger(2)}>
            {isPlaceholder(page.careerEmail)
              ? page.careerEmail
              : <a href={mailHref(page.careerEmail)}>{page.careerEmail}</a>}
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
