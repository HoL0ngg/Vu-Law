import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/config";
import { formatArticleDate, getArticlesFor } from "../content/insights";
import { aboutAnchorPath, insightPath, personPath, routePath } from "../i18n/routes";
import ArticleArt from "./ArticleArt";
import PageFrame from "./PageFrame";
import Portrait from "./Portrait";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type HomePageViewProps = {
  dictionary: Dictionary;
  locale?: Locale;
};

export default async function HomePageView({ dictionary, locale = "en" }: HomePageViewProps) {
  const { home } = dictionary;
  const lead = dictionary.peoplePage.members[0];
  // The four latest published articles; none yet means the Client's coming-soon notice.
  const latestArticles = (await getArticlesFor(locale)).slice(0, 4);
  const hasArticles = latestArticles.length > 0;
  // "NAME (NICKNAME)": the bracketed part is drawn on its own line, as on the People page.
  const [leadName, ...leadAlias] = home.people.name.split(/\s+(?=\()/);

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
        <div className="introduction-heading">
          <p className="eyebrow reveal">{home.introduction.eyebrow}</p>
          <h2 className="display-heading reveal-line">
            {home.introduction.titleLines[0]}<br />
            <em>{home.introduction.titleLines[1]}</em>
          </h2>
        </div>
        <div className="introduction-copy reveal" style={stagger(2)}>
          {home.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link className="text-link" href={routePath("about", locale)}>
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
        <p className="expertise-intro reveal">{home.expertise.intro}</p>
        {/* Each area opens on its plus sign to show a short description. Native
            <details>: it works without JavaScript and is keyboard accessible. */}
        <div className="expertise-categories">
          {home.expertise.areas.map((area, index) => (
            <details className="expertise-category reveal" key={area.name} style={stagger(index)}>
              <summary>
                <span>{area.name}</span><i aria-hidden="true">+</i>
              </summary>
              <p>{area.summary}</p>
            </details>
          ))}
        </div>
        <div className="expertise-cta reveal">
          <Link className="text-link" href={routePath("expertise", locale)}>
            {home.expertise.cta}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="insights-section section-paper">
        <div className="section-heading-row">
          <h2 className="display-heading reveal-line">{home.insights.heading}</h2>
          <Link className="text-link reveal" href={routePath("insights", locale)}>
            {home.insights.cta}<span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="section-intro-block reveal">
          <p className="section-intro-title">{home.insights.intro.title}</p>
          {home.insights.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {/* Until the Client publishes articles the cards carry only "[Article title]",
            so the section says so in their own words instead. The heading above already
            names the section, so the "Insights Coming Soon" title is not repeated here.
            The cards return by themselves once a real title reaches the locale file. */}
        {hasArticles ? (
          <div className="insight-grid">
            {latestArticles.map((article, index) => {
              const text = article[locale]!;
              const href = insightPath(article.slug, locale);
              return (
                <article className="insight-card reveal" key={article.slug} style={stagger(index)}>
                  <Link className="insight-art-link" href={href} tabIndex={-1} aria-hidden="true">
                    <ArticleArt article={article} index={index} />
                  </Link>
                  <p>
                    {home.insights.cards[article.category].category}
                    <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time>
                  </p>
                  <h3><Link href={href}>{text.title}</Link></h3>
                  <Link href={href}>{home.insights.cards[article.category].linkLabel}<span aria-hidden="true">→</span></Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="insights-pending">
            {dictionary.insightsPage.comingSoonBody.map((paragraph, index) => (
              <p className="reveal" key={paragraph} style={stagger(index)}>{paragraph}</p>
            ))}
          </div>
        )}
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
          <div className="people-intro reveal">
            <p className="section-intro-title">{home.people.intro.title}</p>
            {home.people.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <h3 className="display-heading reveal-line">
            {leadName}
            {leadAlias.length ? <span className="people-alias">{leadAlias.join(" ")}</span> : null}
          </h3>
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
