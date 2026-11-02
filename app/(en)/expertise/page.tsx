import type { Metadata } from "next";
import ExpertisePageView from "../../components/ExpertisePageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.expertiseTitle,
  description: describePage("expertise", en),
  path: routes.expertise,
  locale: "en",
});

export default function ExpertisePage() {
  return <ExpertisePageView dictionary={en} />;
}
