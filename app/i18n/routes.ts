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
