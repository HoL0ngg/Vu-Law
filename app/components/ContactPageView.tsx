import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";
import ContactEnquiryForm from "./ContactEnquiryForm";
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

        <ContactEnquiryForm form={form} />
      </section>
    </PageFrame>
  );
}
