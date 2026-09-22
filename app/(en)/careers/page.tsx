import type { Metadata } from "next";
import CareersPageView from "../../components/CareersPageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.careersTitle,
  alternates: { languages: languageAlternates("careers") },
};

export default function CareersPage() {
  return <CareersPageView dictionary={en} />;
}
