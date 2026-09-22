import type { Metadata } from "next";
import AboutPageView from "../../components/AboutPageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.aboutTitle,
  alternates: { languages: languageAlternates("about") },
};

export default function AboutPage() {
  return <AboutPageView dictionary={en} />;
}
