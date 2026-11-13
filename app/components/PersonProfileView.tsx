import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import { isPlaceholder, mailHref, telHref } from "../lib/contact";
import PageFrame from "./PageFrame";
import Portrait from "./Portrait";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type Member = Dictionary["peoplePage"]["members"][number];

type PersonProfileViewProps = {
  dictionary: Dictionary;
  member: Member;
  locale?: Locale;
};

/**
 * A single lawyer's page: a framed portrait with the name and role, the Client's biography
 * as a list of points (one paragraph per point, text untouched) and a sticky contact card.
 * Every word comes from copy the Client already supplied; the layout adds none.
 */
export default function PersonProfileView({ dictionary, member, locale = "en" }: PersonProfileViewProps) {
  const page = dictionary.peoplePage;
  const { footer } = dictionary;
  const email = member.email || footer.email;

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
            sizes="(max-width: 900px) 60vw, 310px"
            priority
          />
          <div>
            <p className="lawyer-role reveal" style={stagger(1)}>{member.role}</p>
            <h1 className="reveal-line" style={stagger(2)}>
              {member.profileName || member.name}
              {member.nameAlt ? <><br />{member.nameAlt}</> : null}
            </h1>
          </div>
        </div>
      </section>

      <section className="profile-body section-paper">
        <div className="profile-layout">
          {member.biography.length > 0 ? (
            <ul className="profile-points">
              {member.biography.map((paragraph, index) => (
                <li className={index === 0 ? "reveal profile-point--lead" : "reveal"} key={paragraph} style={stagger(index)}>
                  {paragraph}
                </li>
              ))}
            </ul>
          ) : (
            // TODO(client): no biography supplied for this lawyer. Nothing is written here
            // in its place (ivl-legal-guardrails rule 1: only Client-supplied facts).
            <div />
          )}

          <aside className="profile-card reveal" style={stagger(2)} aria-labelledby="profile-card-title">
            <h2 className="section-label" id="profile-card-title">{dictionary.contactPage.form.detailsTitle}</h2>
            <p>
              {isPlaceholder(footer.telephone) ? footer.telephone : <a href={telHref(footer.telephone)}>{footer.telephone}</a>}
            </p>
            <p>
              {/* The lawyer's own address when the Client gave one, else the firm's inbox. */}
              {isPlaceholder(email) ? email : <a href={mailHref(email)}>{email}</a>}
            </p>
            <Link className="text-link profile-card-cta" href={routePath("contact", locale)}>
              {dictionary.expertisePage.lawyersCta}<span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link text-link-muted" href={routePath("people", locale)}>
              {page.backToPeople}<span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>
    </PageFrame>
  );
}
