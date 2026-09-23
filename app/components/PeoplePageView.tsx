import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { personPath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type PeoplePageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

/**
 * The index shows each lawyer's portrait, name and role only. The Client asked that the
 * biography live behind a click, so the whole card - photo, name and role together - is
 * one link to `/people/<slug>`.
 */
export default function PeoplePageView({ dictionary, locale = "en" }: PeoplePageViewProps) {
  const page = dictionary.peoplePage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={dictionary.pages.people} paragraphs={page.paragraphs} />

      <section className="people-list section-paper">
        <div className="people-grid">
          {page.members.map((member, index) => (
            <Link
              className="lawyer-card reveal"
              href={personPath(member.slug, locale)}
              key={member.slug}
              style={stagger(index)}
            >
              <span className="portrait-placeholder" role="img" aria-label={page.portraitAlt}>
                <span aria-hidden="true">{member.initials}</span>
              </span>
              <span className="lawyer-card-copy">
                <span className="lawyer-name">{member.name}</span>
                <span className="lawyer-role">{member.role}</span>
                <span className="lawyer-more">{page.viewProfile}<i aria-hidden="true">→</i></span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
