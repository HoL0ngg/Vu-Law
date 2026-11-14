import type { CSSProperties, ReactNode } from "react";

type ReadingBandProps = {
  /** The Client's paragraphs, rendered unchanged, one `<p>` each. */
  paragraphs: readonly string[];
  /** Optional margin rail (an index, the portraits). Rendered after the text in the DOM. */
  children?: ReactNode;
  /**
   * "start": the text column sits on the left edge, like the Homepage hero above it.
   * "end": a two-column band (from 1081 px) with the text in the right column, under the
   * lead of an inner-page hero, and the rail on the left.
   */
  side?: "start" | "end";
  tone?: "light" | "paper";
  /** The two-column layout needs this much width for the rail; People needs more than About. */
  wide?: boolean;
  /** Fade in on scroll. Off for text that belongs to the first screen. */
  reveal?: boolean;
  className?: string;
};

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

/**
 * The continuation of a page's opening copy. A hero shows the heading, the first paragraph
 * and the links; every further paragraph the Client wrote follows here, directly below on a
 * light band, at reading size in one measured column. Nothing is hidden or shortened.
 */
export default function ReadingBand({
  paragraphs,
  children,
  side = "start",
  tone = "light",
  wide = false,
  reveal = false,
  className = "",
}: ReadingBandProps) {
  const classes = [
    "reading-band",
    tone === "light" ? "section-light" : "section-paper",
    `reading-band--${side}`,
    wide ? "reading-band--wide" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className={reveal ? "reading-column reveal" : "reading-column"}>
        {paragraphs.map((paragraph, index) => (
          <p key={paragraph} style={stagger(index)}>{paragraph}</p>
        ))}
      </div>
      {children ? <div className="reading-band-aside">{children}</div> : null}
    </section>
  );
}
