import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { routes } from "../../i18n/routes";
import { pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.experienceTitle,
  path: routes.experience,
  locale: "en",
  noindex: true,
});

export default function ExperiencePage() {
  return <PlaceholderPage dictionary={en} title={en.pages.experience} />;
}

