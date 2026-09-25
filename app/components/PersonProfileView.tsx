import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import Portrait from "./Portrait";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type Member = Dictionary["peoplePage"]["members"][number];

type PersonProfileViewProps = {
  dictionary: Dictionary;
  member: Member;
  locale?: Locale;
};

/** A single lawyer's page: portrait, name, role and the Client's biography. */
export default function PersonProfileView({ dictionary, member, locale = "en" }: PersonProfileViewProps) {
  const page = dictionary.peoplePage;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <section className="profile-hero">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-shade" />
        <div className="profile-hero-copy">
          <Portrait
            className="reveal-zoom"
            src={member.photo}
            alt={member.photoAlt || page.portraitAlt}
            initials={member.initials}
            sizes="(max-width: 900px) 60vw, 230px"
            priority
          />
          <div>
            <h1 className="reveal-line">{member.name}</h1>
            <p className="lawyer-role reveal" style={stagger(2)}>{member.role}</p>
          </div>
        </div>
      </section>

      <section className="profile-body section-paper">
        {member.biography.length > 0 ? (
          <div className="profile-prose">
            {member.biography.map((paragraph, index) => (
              <p className="reveal" key={paragraph} style={stagger(index)}>{paragraph}</p>
            ))}
          </div>
        ) : (
          // TODO(client): no biography supplied for this lawyer. Nothing is written here
          // in its place (ivl-legal-guardrails rule 1: only Client-supplied facts).
          <div className="profile-prose" />
        )}
        <Link className="text-link reveal" href={routePath("people", locale)}>
          {page.backToPeople}<span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
