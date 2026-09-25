import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath, type RouteKey } from "../i18n/routes";
import { isPlaceholder, mailHref, telHref } from "../lib/contact";
import Brand from "./Brand";

const footerNavigationRoutes: readonly RouteKey[] = [
  "about",
  "expertise",
  "people",
  "insights",
  "experience",
  "careers",
  "contact",
];

const legalRoutes: readonly RouteKey[] = ["terms", "privacy", "legalDisclaimer"];

type SiteFooterProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function SiteFooter({ dictionary, locale }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-brand reveal">
        <Link href={routePath("home", locale)}>
          <Brand alt={dictionary.brand.logoAlt} size="lg" />
        </Link>
      </div>
      <div className="footer-columns">
        <section>
          <h2>{dictionary.footer.navigationTitle}</h2>
          <ul>
            {dictionary.footer.navigationLinks.map((label, index) => (
              <li key={label}>
                <Link href={routePath(footerNavigationRoutes[index], locale)}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{dictionary.footer.expertiseTitle}</h2>
          <ul>
            {dictionary.footer.expertiseLinks.map((label) => (
              <li key={label}>
                <Link href={routePath("expertise", locale)}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-contact">
          <h2 lang="vi">{dictionary.footer.entityName}</h2>
          <p>{dictionary.footer.officeAddress}</p>
          <p>
            {isPlaceholder(dictionary.footer.telephone)
              ? dictionary.footer.telephone
              : <a href={telHref(dictionary.footer.telephone)}>{dictionary.footer.telephone}</a>}
          </p>
          <p>
            {isPlaceholder(dictionary.footer.email)
              ? dictionary.footer.email
              : <a href={mailHref(dictionary.footer.email)}>{dictionary.footer.email}</a>}
          </p>
        </section>
        <section>
          <h2>{dictionary.footer.legalTitle}</h2>
          <ul>
            {dictionary.footer.legalLinks.map((label, index) => (
              <li key={label}>
                <Link href={routePath(legalRoutes[index], locale)}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="footer-disclaimer">
        <h2>{dictionary.footer.disclaimerTitle}</h2>
        <p>{dictionary.footer.disclaimerBody}</p>
      </div>
      <p className="footer-copyright">{dictionary.footer.copyright}</p>
    </footer>
  );
}

