import { absoluteUrl } from "./site";

/**
 * An article's picture at a given size. Sanity serves resized crops from its image CDN, so
 * the browser (or a social network) downloads the size it needs instead of the original;
 * a picture kept in `public/` is used as it is. `absolute` is for Open Graph tags, which
 * need a full address.
 */
export function coverImageUrl(source: string, width: number, height: number, absolute = false): string {
  if (source.includes("cdn.sanity.io")) {
    return `${source}?w=${width}&h=${height}&fit=crop&auto=format`;
  }
  return absolute ? absoluteUrl(source) : source;
}
