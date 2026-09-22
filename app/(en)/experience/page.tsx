import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.experienceTitle, robots: { index: false, follow: true },
  alternates: { languages: languageAlternates("experience") },
};

export default function ExperiencePage() {
  return <PlaceholderPage dictionary={en} title={en.pages.experience} />;
}

