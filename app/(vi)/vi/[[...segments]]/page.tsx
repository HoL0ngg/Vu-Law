import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutPageView from "../../../components/AboutPageView";
import CareersPageView from "../../../components/CareersPageView";
import ContactPageView from "../../../components/ContactPageView";
import ExpertisePageView from "../../../components/ExpertisePageView";
import HomePageView from "../../../components/HomePageView";
import InsightsPageView from "../../../components/InsightsPageView";
import PeoplePageView from "../../../components/PeoplePageView";
import PersonProfileView from "../../../components/PersonProfileView";
import PlaceholderPage from "../../../components/PlaceholderPage";
import { getVietnameseDictionary, VI_ENABLED, type Dictionary } from "../../../i18n/config";
import { languageAlternates, type RouteKey } from "../../../i18n/routes";

type VietnamesePageProps = {
  params: Promise<{ segments?: string[] }>;
};

/** Slug -> the route key and the `meta` entry that names the page. */
const PAGES: Record<string, { route: RouteKey; meta: keyof Dictionary["meta"] }> = {
  "": { route: "home", meta: "homeTitle" },
  about: { route: "about", meta: "aboutTitle" },
  expertise: { route: "expertise", meta: "expertiseTitle" },
  people: { route: "people", meta: "peopleTitle" },
  insights: { route: "insights", meta: "insightsTitle" },
  careers: { route: "careers", meta: "careersTitle" },
  contact: { route: "contact", meta: "contactTitle" },
  experience: { route: "experience", meta: "experienceTitle" },
  "terms-of-use": { route: "terms", meta: "termsTitle" },
  "privacy-policy": { route: "privacy", meta: "privacyTitle" },
  "legal-disclaimer": { route: "legalDisclaimer", meta: "legalDisclaimerTitle" },
};

export async function generateMetadata({ params }: VietnamesePageProps): Promise<Metadata> {
  if (!VI_ENABLED) return {};
  const { segments = [] } = await params;
  const page = PAGES[segments.join("/")];
  if (!page) return {};

  // The Client has supplied no Vietnamese metadata, so these titles come through the
  // dictionary merge as the approved English. A `/vi` page previously rendered with no
  // <title> at all, which is worse than an English one.
  // TODO(client): Vietnamese page titles and meta descriptions.
  return {
    title: getVietnameseDictionary().meta[page.meta],
    alternates: { languages: languageAlternates(page.route) },
  };
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
  if (path === "careers") return <CareersPageView dictionary={dictionary} locale="vi" />;
  if (path === "contact") return <ContactPageView dictionary={dictionary} locale="vi" />;
  if (path === "experience") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.experience} />;
  if (path === "terms-of-use") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.terms} />;
  if (path === "privacy-policy") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.privacy} />;
  if (path === "legal-disclaimer") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.legalDisclaimer} />;

  notFound();
}
