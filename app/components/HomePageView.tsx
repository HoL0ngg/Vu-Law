import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { vi } from "../i18n/vi";
import { aboutAnchorPath, personPath, routePath } from "../i18n/routes";
import PageFrame from "./PageFrame";
import Portrait from "./Portrait";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type HomePageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default function HomePageView({ dictionary, locale = "en" }: HomePageViewProps) {
  const { home } = dictionary;
  const lead = dictionary.peoplePage.members[0];
  const featuredExpertise = home.expertise.featuredItems.length
    ? home.expertise.featuredItems
    : vi.home.expertise.featuredItems;

  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <section className="hero" data-hero>
        <div className="hero-image" data-hero-image />
        <div className="hero-shade" />
        <div className="hero-columns" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{home.hero.eyebrow}</p>
          <h1>{home.hero.title}</h1>
          <div className="hero-body">
            {home.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="cta-row">
            <Link className="text-link" href={routePath("expertise", locale)}>
              {home.hero.expertiseCta}<span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link text-link-muted" href={routePath("people", locale)}>
              {home.hero.peopleCta}<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="introduction section-dark">
        <div className="orb" data-parallax aria-hidden="true" />
        <h2 className="display-heading reveal-line">
          {home.introduction.titleLines[0]}<br />
          <em>{home.introduction.titleLines[1]}</em>
        </h2>
        <div className="introduction-copy reveal" style={stagger(2)}>
          {home.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link className="text-link" href={routePath("about", locale)} lang="vi">
            {home.introduction.cta}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="approach-banner">
        <div className="approach-image" data-parallax aria-hidden="true" />
        <div className="approach-overlay" />
        <div className="approach-copy">
          <p className="eyebrow reveal">{home.approach.eyebrow}</p>
          <h2 className="reveal-line" style={stagger(1)}>{home.approach.title}</h2>
          <p className="reveal" style={stagger(2)}>{home.approach.statement}</p>
          <Link className="text-link reveal" style={stagger(3)} href={aboutAnchorPath("approach", locale)}>
            {home.approach.cta}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="expertise-section section-light">
        <div className="section-heading-row">
          <h2 className="display-heading reveal-line">{home.expertise.heading}</h2>
        </div>
        <div className="expertise-categories">
          {home.expertise.categories.map((category, index) => (
            <Link className="expertise-category reveal" href={routePath("expertise", locale)} key={category} style={stagger(index)}>
              <span>{category}</span><i aria-hidden="true">+</i>
            </Link>
          ))}
        </div>
        <div className="expertise-items" lang="vi">
          {featuredExpertise.map((item, index) => (
            <Link className="expertise-item reveal" href={routePath("expertise", locale)} key={item} style={stagger(index)}>
              <span>{item}</span><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="insights-section section-paper">
        <div className="section-heading-row">
          <h2 className="display-heading reveal-line">{home.insights.heading}</h2>
          <Link className="text-link reveal" href={routePath("insights", locale)}>
            {home.insights.cta}<span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="insight-grid">
          {home.insights.cards.map((card, index) => (
            <article className="insight-card reveal" key={card.category} style={stagger(index)}>
              <div className={`insight-art insight-art-${index + 1}`} aria-hidden="true" />
              <p>{card.category}</p>
              <h3>{card.title}</h3>
              <Link href={routePath("insights", locale)}>{card.linkLabel}<span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="people-section section-dark">
        <Portrait
          className="reveal-zoom"
          src={lead.photo}
          alt={lead.photoAlt || home.people.portraitAlt}
          initials={lead.initials}
          sizes="(max-width: 900px) 80vw, 38vw"
        />
        <div className="people-copy">
          <h2 className="section-label reveal">{home.people.heading}</h2>
          <h3 className="display-heading reveal-line" lang="vi">{home.people.name}</h3>
          <p className="reveal">{home.people.role}</p>
          <div className="cta-row reveal">
            <Link className="text-link" href={personPath(dictionary.peoplePage.members[0].slug, locale)}>{home.people.profileCta}<span aria-hidden="true">→</span></Link>
            <Link className="text-link text-link-muted" href={routePath("people", locale)}>{home.people.peopleCta}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
