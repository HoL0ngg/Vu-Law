import type { Metadata } from "next";
import HomePageView from "../components/HomePageView";
import { languageAlternates } from "../i18n/routes";
import { en } from "../i18n/en";

export const metadata: Metadata = {
  title: en.meta.homeTitle,
  alternates: { languages: languageAlternates("home") },
};

export default function HomePage() {
  return <HomePageView dictionary={en} />;
}
