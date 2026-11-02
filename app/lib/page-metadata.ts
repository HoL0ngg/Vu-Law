import type { Metadata } from "next";
import type { Dictionary, Locale } from "../i18n/config";
import { localePath } from "../i18n/routes";
import { SITE_NAME, absoluteUrl } from "./site";

/**
 * Search and sharing metadata shared by every ordinary page: a self-referencing canonical
 * URL, the EN/VI hreflang pair with `x-default`, Open Graph and Twitter tags.
 *
 * Descriptions are never written here. They are a clip of copy the Client already approved
 * (see `describePage`), so nothing new is said on the firm's behalf.
 */
type PageMetadataInput = {
  title: string;
  description?: string;
  /** The English path of the page, e.g. `/about` or `/people/truc-nguyen`. */
  path: string;
  locale: Locale;
  /** Placeholder pages that carry no content yet stay out of the index. */
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, locale, noindex }: PageMetadataInput): Metadata {
  const url = absoluteUrl(localePath(path, locale));
  const english = absoluteUrl(localePath(path, "en"));

  return {
    title,
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: url,
      languages: { en: english, vi: absoluteUrl(localePath(path, "vi")), "x-default": english },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: locale === "vi" ? "vi_VN" : "en_GB",
      images: [{ url: absoluteUrl("/images/logo.png"), width: 480, height: 410, alt: SITE_NAME }],
    },
    twitter: { card: "summary", title, description },
  };
}

/**
 * A snippet of approved copy: the whole text when it is short, otherwise the longest run of
 * complete sentences that fits, otherwise a clip at a word with an ellipsis.
 */
export function snippet(text: string, max = 200): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const head = clean.slice(0, max);
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "));
  if (sentenceEnd >= max * 0.5) return head.slice(0, sentenceEnd + 1);
  return `${head.replace(/\s+\S*$/, "")}…`;
}

/** Route keys of the pages that get a description. */
export type DescribedPage = "home" | "about" | "expertise" | "people" | "insights" | "careers" | "contact";

/** The description of a page: its own opening copy from the locale dictionary. */
export function describePage(page: DescribedPage, dictionary: Dictionary): string {
  switch (page) {
    case "home":
      return snippet(dictionary.home.hero.paragraphs[0]);
    case "about":
      return snippet(dictionary.about.opening[0]);
    case "expertise":
      return snippet(dictionary.expertisePage.intro);
    case "people":
      return snippet(dictionary.peoplePage.paragraphs[0]);
    case "insights":
      // The Insights page has no introduction of its own; this is the Client's line under
      // "Featured Insights" on the Homepage.
      return snippet(dictionary.home.insights.intro.paragraphs[0]);
    case "careers":
      // The Client's sentence ends in a colon and is followed by the address, so both are kept.
      return snippet(`${dictionary.careersPage.joinBody} ${dictionary.careersPage.careerEmail}`);
    case "contact":
      return snippet(dictionary.contactPage.paragraphs[0]);
  }
}

/**
 * The Homepage title: the firm name and the Client's own slogan, instead of the word "Home".
 * The name is the hero's own eyebrow, so Vietnamese gets the spelling with the diacritic.
 */
export function homeTitle(dictionary: Dictionary): string {
  return `${dictionary.home.hero.eyebrow} | ${dictionary.home.hero.title}`;
}
