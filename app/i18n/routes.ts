import type { Locale } from "./config";

export const routes = {
  home: "/",
  about: "/about",
  expertise: "/expertise",
  people: "/people",
  insights: "/insights",
  careers: "/careers",
  contact: "/contact",
  experience: "/experience",
  terms: "/terms-of-use",
  privacy: "/privacy-policy",
  legalDisclaimer: "/legal-disclaimer",
} as const;

export type RouteKey = keyof typeof routes;

export function localePath(path: string, locale: Locale = "en"): string {
  if (locale === "en") return path;
  return path === "/" ? "/vi" : `/vi${path}`;
}

export function routePath(key: RouteKey, locale: Locale = "en"): string {
  return localePath(routes[key], locale);
}

export const aboutAnchors = {
  firm: `${routes.about}#our-firm`,
  philosophy: `${routes.about}#our-philosophy`,
  approach: `${routes.about}#our-approach`,
  values: `${routes.about}#our-values`,
} as const;

export type AboutAnchorKey = keyof typeof aboutAnchors;

export function aboutAnchorPath(anchor: AboutAnchorKey, locale: Locale = "en"): string {
  return localePath(aboutAnchors[anchor], locale);
}

/** Strip a `/vi` prefix, giving the canonical English path. */
export function stripLocale(pathname: string): string {
  if (pathname === "/vi") return "/";
  if (pathname.startsWith("/vi/")) return pathname.slice(3);
  return pathname;
}

/** The same page in the other locale, for the language switcher and hreflang tags. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(stripLocale(pathname), target);
}

/** hreflang map for a route, used in each page's `alternates.languages` metadata. */
export function languageAlternates(key: RouteKey) {
  return {
    en: routePath(key, "en"),
    vi: routePath(key, "vi"),
  };
}

/** A lawyer's profile page, e.g. `/people/nguyen-ha-thanh-vu`. */
export function personPath(slug: string, locale: Locale = "en"): string {
  return localePath(`${routes.people}/${slug}`, locale);
}
