import { notFound } from "next/navigation";
import AboutPageView from "../../../components/AboutPageView";
import CareersPageView from "../../../components/CareersPageView";
import ContactPageView from "../../../components/ContactPageView";
import ExpertisePageView from "../../../components/ExpertisePageView";
import HomePageView from "../../../components/HomePageView";
import InsightsPageView from "../../../components/InsightsPageView";
import PeoplePageView from "../../../components/PeoplePageView";
import PlaceholderPage from "../../../components/PlaceholderPage";
import { getVietnameseDictionary, VI_ENABLED } from "../../../i18n/config";

type VietnamesePageProps = {
  params: Promise<{ segments?: string[] }>;
};

export default async function VietnamesePage({ params }: VietnamesePageProps) {
  if (!VI_ENABLED) notFound();

  const dictionary = getVietnameseDictionary();
  const { segments = [] } = await params;
  const path = segments.join("/");

  if (path === "") return <HomePageView dictionary={dictionary} locale="vi" />;
  if (path === "about") return <AboutPageView dictionary={dictionary} locale="vi" />;
  if (path === "expertise") return <ExpertisePageView dictionary={dictionary} locale="vi" />;
  if (path === "people") return <PeoplePageView dictionary={dictionary} locale="vi" />;
  if (path === "insights") return <InsightsPageView dictionary={dictionary} locale="vi" />;
  if (path === "careers") return <CareersPageView dictionary={dictionary} locale="vi" />;
  if (path === "contact") return <ContactPageView dictionary={dictionary} locale="vi" />;
  if (path === "experience") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.experience} />;
  if (path === "terms-of-use") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.terms} />;
  if (path === "privacy-policy") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.privacy} />;
  if (path === "legal-disclaimer") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.legalDisclaimer} />;

  notFound();
}
