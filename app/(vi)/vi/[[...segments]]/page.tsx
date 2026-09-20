import { notFound } from "next/navigation";
import AboutPageView from "../../../components/AboutPageView";
import HomePageView from "../../../components/HomePageView";
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
  if (path === "expertise") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.expertise} />;
  if (path === "people") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.people} />;
  if (path === "insights") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.insights} />;
  if (path === "careers") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.careers} />;
  if (path === "contact") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.contact} />;
  if (path === "experience") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.experience} />;
  if (path === "terms-of-use") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.terms} />;
  if (path === "privacy-policy") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.privacy} />;
  if (path === "legal-disclaimer") return <PlaceholderPage dictionary={dictionary} locale="vi" title={dictionary.pages.legalDisclaimer} />;

  notFound();
}
