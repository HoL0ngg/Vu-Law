import type { Dictionary, Locale } from "../i18n/config";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

/**
 * schema.org data for search engines. Every value comes from facts the Client already
 * supplied and the site shows (name, address, telephone, email); nothing is added that the
 * pages do not say. `sameAs` (social profiles) is left out because the Client has supplied none.
 */

/** `0938 170 130` -> `+84938170130`: the international form schema.org and Google ask for. */
function internationalPhone(local: string): string {
  const digits = local.replace(/\D/g, "");
  return digits.startsWith("0") ? `+84${digits.slice(1)}` : digits;
}

export function organizationJsonLd(dictionary: Dictionary, locale: Locale) {
  const { footer, brand } = dictionary;
  const inLanguage = locale === "vi" ? "vi-VN" : "en";

  return [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      name: brand.name,
      legalName: footer.entityName,
      url: SITE_URL,
      logo: absoluteUrl("/images/logo.png"),
      image: absoluteUrl("/images/logo.png"),
      email: footer.email,
      telephone: internationalPhone(footer.telephone),
      address: {
        "@type": "PostalAddress",
        // The whole address line as the Client wrote it; it is not split into fields.
        streetAddress: footer.officeAddress,
        addressCountry: "VN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];
}

type Crumb = { name: string; path: string };

/** A breadcrumb trail, so results can show `Home > Insights > Article` instead of a bare URL. */
export function breadcrumbJsonLd(trail: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
