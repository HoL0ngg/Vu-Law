import type { CSSProperties, ReactNode } from "react";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type PageHeroProps = {
  title: string;
  paragraphs?: readonly string[];
  children?: ReactNode;
};

/** Shared page head for the inner pages, reusing the About hero's navy + columns treatment. */
export default function PageHero({ title, paragraphs = [], children }: PageHeroProps) {
  /* Short page labels are Title Case; the long ones are the Client's own sentences in
     capitals. Capitals read much larger at the same px, so "About Us" looked small next
     to "BUILD YOUR PRACTICE WITH US". The two get different sizes in order to look the
     same weight. */
  const longTitle = title.length > 20;

  return (
    <section className={`about-hero page-hero ${longTitle ? "page-hero--long" : "page-hero--short"}`}>
      <div className="about-hero-image" aria-hidden="true" />
      <div className="about-hero-shade" />
      <div className="about-hero-copy">
        <h1 className="reveal-line">{title}</h1>
        {paragraphs.length > 0 && (
          <div className="about-opening reveal" style={stagger(2)}>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
