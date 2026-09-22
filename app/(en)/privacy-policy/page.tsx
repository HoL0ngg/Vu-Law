import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.privacyTitle, robots: { index: false, follow: true },
  alternates: { languages: languageAlternates("privacy") },
};

export default function PrivacyPage() {
  return <PlaceholderPage dictionary={en} title={en.pages.privacy} />;
}

