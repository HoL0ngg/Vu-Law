import type { Metadata } from "next";
import AboutPageView from "../../components/AboutPageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.aboutTitle };

export default function AboutPage() {
  return <AboutPageView dictionary={en} />;
}
