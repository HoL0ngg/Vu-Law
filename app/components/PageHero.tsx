import type { CSSProperties, ReactNode } from "react";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type PageHeroProps = {
  title: string;
  paragraphs?: readonly string[];
  children?: ReactNode;
};

/** Shared page head for the inner pages, reusing the About hero's navy + columns treatment. */
export default function PageHero({ title, paragraphs = [], children }: PageHeroProps) {
  return (
    <section className="about-hero page-hero">
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
