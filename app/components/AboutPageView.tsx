import type { CSSProperties } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import PageFrame from "./PageFrame";
import PageHero from "./PageHero";
import ReadingBand from "./ReadingBand";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type AboutPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function AboutPageView({ dictionary, locale = "en" }: AboutPageViewProps) {
  const { about } = dictionary;
  const aboutIndex = [
    { anchor: "firm", id: "our-firm", label: about.firm.heading },
    { anchor: "philosophy", id: "our-philosophy", label: about.philosophy.heading },
    { anchor: "approach", id: "our-approach", label: about.approach.heading },
    { anchor: "values", id: "our-values", label: about.values.heading },
  ];

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      {/* The first opening paragraph leads; the others follow in the band below. */}
      <PageHero view="firm" title={about.title} openingTitle={about.openingTitle} paragraphs={about.opening.slice(0, 1)} />

      <ReadingBand paragraphs={about.opening.slice(1)} side="end">
        {/* Desktop only (hidden below 1081 px in CSS): the page's own four section headings,
            as links, in the half that used to be empty. */}
        <nav className="page-index" aria-label={about.title}>
          <ul className="page-index-list">
            {aboutIndex.map((item) => (
              <li key={item.anchor}>
                <a href={`#${item.id}`}>{item.label}<i aria-hidden="true">↓</i></a>
              </li>
            ))}
          </ul>
        </nav>
      </ReadingBand>

      <section className="about-section firm-section section-paper" id="our-firm">
        <div className="about-section-heading">
          <h2 className="display-heading reveal-line">{about.firm.heading}</h2>
        </div>
        <div className="about-prose">
          <p className="about-lead reveal">{about.firm.lead}</p>
          {about.firm.paragraphs.map((paragraph, index) => (
            <p className="reveal" key={paragraph} style={stagger(index)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-section philosophy-section section-dark" id="our-philosophy">
        <div className="about-section-heading">
          <p className="section-label reveal">{about.philosophy.heading}</p>
          <h2 className="display-heading reveal-line">{about.philosophy.title}</h2>
        </div>
        <div className="philosophy-grid">
          {about.philosophy.items.map((item, index) => (
            <article className="principle reveal" key={item.term} style={stagger(index)}>
              <h3>{item.term}</h3>
              <p className="principle-descriptor">{item.descriptor}</p>
              {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="about-section approach-section section-light" id="our-approach">
        <div className="about-section-heading">
          <p className="section-label reveal">{about.approach.heading}</p>
          <h2 className="display-heading reveal-line">{about.approach.title}</h2>
          {about.approach.paragraphs.map((paragraph, index) => (
            <p className="section-intro reveal" key={paragraph} style={stagger(index + 1)}>{paragraph}</p>
          ))}
        </div>
        <div className="approach-steps">
          {about.approach.steps.map((step, index) => (
            <article className="approach-step reveal" key={step.name} style={stagger(index)}>
              <p className="approach-step-label">{step.label}</p>
              <h3>{step.name}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section values-section section-paper" id="our-values">
        <div className="about-section-heading">
          <h2 className="display-heading reveal-line">{about.values.heading}</h2>
          <p className="section-intro reveal">{about.values.intro}</p>
        </div>
        <div className="values-grid">
          {about.values.items.map((item, index) => (
            <article className="value-card reveal" key={item.name} style={stagger(index)}>
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

