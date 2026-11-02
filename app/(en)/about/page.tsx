import type { Metadata } from "next";
import AboutPageView from "../../components/AboutPageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.aboutTitle,
  description: describePage("about", en),
  path: routes.about,
  locale: "en",
});

export default function AboutPage() {
  return <AboutPageView dictionary={en} />;
}
