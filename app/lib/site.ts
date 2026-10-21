/** Canonical origin, used for absolute URLs in canonical links, hreflang, Open Graph and the sitemap. */
export const SITE_URL = "https://www.integritasvulegal.com";

export const SITE_NAME = "Integritas Vu Legal";

/** `/insights/x` -> `https://www.integritasvulegal.com/insights/x` */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
