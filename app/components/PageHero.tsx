import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  /** A gold title line above the first paragraph (About: "About Integritas Vu Legal"). */
  openingTitle?: string;
  paragraphs?: readonly string[];
  children?: ReactNode;
  /** A shorter band, for pages whose content should start close to the top. */
  compact?: boolean;
  /**
   * Which part of the columns photograph this page shows. The inner heroes all use the same
   * picture, so each page frames a different area of it instead of repeating one crop.
   */
  view?: "firm" | "people" | "expertise" | "contact" | "careers" | "insights";
};

/**
 * Shared page head for the inner pages: the navy + columns treatment, the heading at the
 * bottom left and, on the right, the lead paragraph and the page's links. Pages with more
 * than one opening paragraph pass the first one here and the rest to `ReadingBand`.
 */
export default function PageHero({ title, openingTitle, paragraphs = [], children, compact = false, view }: PageHeroProps) {
  /* Short page labels are Title Case; the long ones are the Client's own sentences in
     capitals. Capitals read much larger at the same px, so "About Us" looked small next
     to "BUILD YOUR PRACTICE WITH US". The two get different sizes in order to look the
     same weight. */
  const longTitle = title.length > 20;
  const hasLead = Boolean(openingTitle) || paragraphs.length > 0 || Boolean(children);

  return (
    <section className={`about-hero page-hero ${longTitle ? "page-hero--long" : "page-hero--short"}${compact ? " page-hero--compact" : ""}${hasLead ? "" : " page-hero--solo"}${view ? ` page-hero--view-${view}` : ""}`}>
      <div className="about-hero-image" aria-hidden="true" />
      <div className="about-hero-shade" />
      <div className="about-hero-copy">
        {/* No reveal classes here: the first thing on a page must not wait for a script. It
            fades in from CSS instead (see "Reading layout" at the end of globals.css). */}
        <h1>{title}</h1>
        {hasLead && (
          <div className="about-opening">
            {openingTitle ? <p className="about-opening-title">{openingTitle}</p> : null}
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
