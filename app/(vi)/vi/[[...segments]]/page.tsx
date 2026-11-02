import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutPageView from "../../../components/AboutPageView";
import CareersPageView from "../../../components/CareersPageView";
import ContactPageView from "../../../components/ContactPageView";
import ExpertisePageView from "../../../components/ExpertisePageView";
import HomePageView from "../../../components/HomePageView";
import InsightArticleView from "../../../components/InsightArticleView";
import InsightsPageView from "../../../components/InsightsPageView";
import PeoplePageView from "../../../components/PeoplePageView";
import PersonProfileView from "../../../components/PersonProfileView";
import PlaceholderPage from "../../../components/PlaceholderPage";
import { getArticle, hasLocale } from "../../../content/insights";
import { getVietnameseDictionary, VI_ENABLED, type Dictionary } from "../../../i18n/config";
import { routes, type RouteKey } from "../../../i18n/routes";
import { describePage, homeTitle, pageMetadata, snippet, type DescribedPage } from "../../../lib/page-metadata";
import { articleMetadata } from "../../../lib/article-metadata";

type VietnamesePageProps = {
  params: Promise<{ segments?: string[] }>;
};

/** Slug -> the route key, the `meta` entry that names the page, and whether it is a real page. */
const PAGES: Record<string, { route: RouteKey; meta: keyof Dictionary["meta"]; described?: DescribedPage; placeholder?: boolean }> = {
  "": { route: "home", meta: "homeTitle", described: "home" },
  about: { route: "about", meta: "aboutTitle", described: "about" },
  expertise: { route: "expertise", meta: "expertiseTitle", described: "expertise" },
  people: { route: "people", meta: "peopleTitle", described: "people" },
  insights: { route: "insights", meta: "insightsTitle", described: "insights" },
  careers: { route: "careers", meta: "careersTitle", described: "careers" },
  contact: { route: "contact", meta: "contactTitle", described: "contact" },
  experience: { route: "experience", meta: "experienceTitle", placeholder: true },
  "terms-of-use": { route: "terms", meta: "termsTitle", placeholder: true },
  "privacy-policy": { route: "privacy", meta: "privacyTitle", placeholder: true },
  "legal-disclaimer": { route: "legalDisclaimer", meta: "legalDisclaimerTitle", placeholder: true },
};

export async function generateMetadata({ params }: VietnamesePageProps): Promise<Metadata> {
  if (!VI_ENABLED) return {};
  const { segments = [] } = await params;
  if (segments[0] === "insights" && segments.length === 2) {
    const article = await getArticle(segments[1]);
    return article && hasLocale(article, "vi") ? articleMetadata(article, "vi") : {};
  }
  const dictionary = getVietnameseDictionary();
  if (segments[0] === "people" && segments.length === 2) {
    const member = dictionary.peoplePage.members.find((candidate) => candidate.slug === segments[1]);
    if (!member) return {};
    return pageMetadata({
      title: `${member.name} | ${dictionary.brand.name}`,
      description: snippet(member.biography[0]),
      path: `${routes.people}/${member.slug}`,
      locale: "vi",
    });
  }
  const page = PAGES[segments.join("/")];
  if (!page) return {};

  // The Client has supplied no Vietnamese titles, so most of these come through the
  // dictionary merge as the approved English; descriptions are clips of each page's own
  // copy, Vietnamese where the Client supplied it. The placeholder pages stay out of the
  // index, as they do in English.
  // TODO(client): Vietnamese page titles.
  return pageMetadata({
    title: page.route === "home" ? homeTitle(dictionary) : dictionary.meta[page.meta],
    description: page.described ? describePage(page.described, dictionary) : undefined,
    path: routes[page.route],
    locale: "vi",
    noindex: page.placeholder,
  });
}

export default async function VietnamesePage({ params }: VietnamesePageProps) {
  if (!VI_ENABLED) notFound();

  const dictionary = getVietnameseDictionary();
  const { segments = [] } = await params;
  const path = segments.join("/");

  if (path === "") return <HomePageView dictionary={dictionary} locale="vi" />;
  if (path === "about") return <AboutPageView dictionary={dictionary} locale="vi" />;
  if (path === "expertise") return <ExpertisePageView dictionary={dictionary} locale="vi" />;
  if (path === "people") return <PeoplePageView dictionary={dictionary} locale="vi" />;
  if (segments[0] === "people" && segments.length === 2) {
    const member = dictionary.peoplePage.members.find((candidate) => candidate.slug === segments[1]);
    if (member) return <PersonProfileView dictionary={dictionary} member={member} locale="vi" />;
    notFound();
  }
  if (path === "insights") return <InsightsPageView dictionary={dictionary} locale="vi" />;
  if (segments[0] === "insights" && segments.length === 2) {
    const article = await getArticle(segments[1]);
    if (article && hasLocale(article, "vi")) return <InsightArticleView dictionary={dictionary} article={article} locale="vi" />;
    notFound();
  }
  if (path === "careers") return <CareersPageView dictionary={dictionary} locale="vi" />;
  if (path === "contact") return <ContactPageView dictionary={dictionary} locale="vi" />;
  if (path === "experience") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.experience} />;
  if (path === "terms-of-use") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.terms} />;
  if (path === "privacy-policy") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.privacy} />;
  if (path === "legal-disclaimer") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.legalDisclaimer} />;

  notFound();
}
