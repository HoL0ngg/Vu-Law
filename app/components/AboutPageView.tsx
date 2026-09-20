import type { CSSProperties } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import PageFrame from "./PageFrame";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type AboutPageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function AboutPageView({ dictionary, locale = "en" }: AboutPageViewProps) {
  const { about } = dictionary;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <section className="about-hero">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-shade" />
        <div className="about-hero-copy">
          <h1 className="reveal-line">{about.title}</h1>
          <div className="about-opening reveal" style={stagger(2)}>
            {about.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="about-section firm-section section-paper" id="our-firm">
        <div className="about-section-heading">
          <h2 className="display-heading reveal-line">{about.firm.heading}</h2>
        </div>
        <div className="about-prose">
          {about.firm.paragraphs.map((paragraph, index) => (
            <p className="reveal" key={paragraph} style={stagger(index)}>{paragraph}</p>
          ))}
          <div className="consistent-statement reveal" style={stagger(4)}>
            <p>{about.firm.consistentLabel}</p>
            <strong>{about.firm.consistentStatement}</strong>
          </div>
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
              <p>{item.body}</p>
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
              <i aria-hidden="true" />
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

