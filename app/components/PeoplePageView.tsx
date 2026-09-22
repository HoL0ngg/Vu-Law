import type { CSSProperties } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type PeoplePageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function PeoplePageView({ dictionary, locale = "en" }: PeoplePageViewProps) {
  const page = dictionary.peoplePage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={dictionary.pages.people} paragraphs={page.paragraphs} />

      <section className="people-list section-paper">
        {page.members.map((member, index) => (
          <article className="lawyer-card" key={member.name}>
            <div
              className="portrait-placeholder reveal-zoom"
              role="img"
              aria-label={page.portraitAlt}
              style={stagger(index)}
            >
              <span aria-hidden="true">{member.initials}</span>
            </div>
            <div className="lawyer-copy">
              <h2 className="display-heading reveal-line">{member.name}</h2>
              <p className="lawyer-role reveal" style={stagger(1)}>{member.role}</p>
              {member.biography.map((paragraph, i) => (
                <p className="reveal" key={paragraph} style={stagger(i + 2)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageFrame>
  );
}
