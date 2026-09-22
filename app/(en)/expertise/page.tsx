import type { Metadata } from "next";
import ExpertisePageView from "../../components/ExpertisePageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.expertiseTitle,
  alternates: { languages: languageAlternates("expertise") },
};

export default function ExpertisePage() {
  return <ExpertisePageView dictionary={en} />;
}
