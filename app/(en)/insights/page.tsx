import type { Metadata } from "next";
import InsightsPageView from "../../components/InsightsPageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.insightsTitle,
  alternates: { languages: languageAlternates("insights") },
};

export default function InsightsPage() {
  return <InsightsPageView dictionary={en} />;
}
