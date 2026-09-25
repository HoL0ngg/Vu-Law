import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";
import { isPlaceholder, mailHref, telHref } from "../lib/contact";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type ContactPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function ContactPageView({ dictionary, locale = "en" }: ContactPageViewProps) {
  const page = dictionary.contactPage;
  const form = page.form;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <PageHero title={page.heading} paragraphs={page.paragraphs} />

      <section className="contact-lawyer section-paper">
        <div className="contact-card reveal">
          <h2>{page.lawyerName}</h2>
          <p className="lawyer-role">{page.lawyerRole}</p>
          <dl className="contact-details">
            <div>
              <dt>{page.directLabel}</dt>
              <dd>
                {isPlaceholder(page.direct)
                  ? page.direct
                  : <a href={telHref(page.direct)}>{page.direct}</a>}
              </dd>
            </div>
            <div>
              <dt>{page.emailLabel}</dt>
              <dd>
                {isPlaceholder(page.email)
                  ? page.email
                  : <a href={mailHref(page.email)}>{page.email}</a>}
              </dd>
            </div>
            <div><dt>{page.linkedinLabel}</dt><dd>{page.linkedin}</dd></div>
          </dl>
          <Link className="text-link" href={routePath("people", locale)}>
            {page.profileCta}<span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* The firm's own details, as supplied by the Client. The Client's Contact
            structure gives Mr Vu a separate "Direct" line and professional email, which
            they have not supplied, so those stay as placeholders above rather than being
            filled with the firm's switchboard. */}
        <div className="contact-card reveal">
          <h2 lang="vi">{dictionary.footer.entityName}</h2>
          <dl className="contact-details">
            <div><dd>{dictionary.footer.officeAddress}</dd></div>
            <div>
              <dd>
                {isPlaceholder(dictionary.footer.telephone)
                  ? dictionary.footer.telephone
                  : <a href={telHref(dictionary.footer.telephone)}>{dictionary.footer.telephone}</a>}
              </dd>
            </div>
            <div>
              <dd>
                {isPlaceholder(dictionary.footer.email)
                  ? dictionary.footer.email
                  : <a href={mailHref(dictionary.footer.email)}>{dictionary.footer.email}</a>}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="enquiry section-light">
        <div className="enquiry-head">
          <h2 className="display-heading reveal-line">{form.heading}</h2>
          <p className="section-intro reveal" style={stagger(1)}>{form.intro}</p>
        </div>

        {/*
          TODO(client): no destination was supplied for this form - no endpoint, inbox or
          service. The submit button is deliberately type="button" so nothing is transmitted
          and no field value can end up in a URL or server log (ivl-legal-guardrails rule 9).
          Wire it only once the Client confirms where enquiries should go.
        */}
        <form className="enquiry-form reveal" style={stagger(2)}>
          <fieldset>
            <legend>{form.detailsTitle}</legend>
            <label>
              <span>{form.fullName}<b aria-hidden="true">*</b></span>
              <input type="text" name="full-name" required autoComplete="name" />
            </label>
            <label>
              <span>{form.email}<b aria-hidden="true">*</b></span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              <span>{form.telephone}<b aria-hidden="true">*</b></span>
              <input type="tel" name="telephone" required autoComplete="tel" />
            </label>
            <label>
              <span>{form.company}</span>
              <input type="text" name="company" autoComplete="organization" />
            </label>
          </fieldset>

          <fieldset>
            <legend>{form.enquiryTitle}</legend>
            <label>
              <span>{form.area}<b aria-hidden="true">*</b></span>
              <select name="area" required defaultValue="">
                <option value="" disabled />
                {form.areaOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="enquiry-description">
              <span>{form.description}<b aria-hidden="true">*</b></span>
              <textarea name="description" rows={6} required />
            </label>
          </fieldset>

          <div className="enquiry-notice">
            <h3>{form.noticeTitle}</h3>
            {form.notice.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <button className="enquiry-submit" type="button">
            {form.submit}<span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </PageFrame>
  );
}
