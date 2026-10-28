import type { Article } from "../content/insights";
import { coverImageUrl } from "../lib/cover-image";

type ArticleArtProps = {
  article: Article;
  /** Position in the list, which picks the geometric fallback used when there is no picture. */
  index: number;
};

/**
 * The picture on an article card: the article's own image when the team has attached one,
 * otherwise the navy geometric panel the cards have always used.
 */
export default function ArticleArt({ article, index }: ArticleArtProps) {
  if (!article.coverImage) {
    return <div className={`insight-art insight-art-${(index % 4) + 1}`} />;
  }
  return (
    <div className="insight-art insight-art--photo">
      {/* Decorative: the headline sits right under it. A plain img because the picture comes
          from Sanity's image CDN, which already serves a resized crop. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageUrl(article.coverImage, 800, 870)}
        alt=""
        loading="lazy"
        decoding="async"
        style={article.coverPosition ? { objectPosition: article.coverPosition } : undefined}
      />
    </div>
  );
}
