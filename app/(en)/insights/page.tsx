import type { Metadata } from "next";
import InsightsPageView from "../../components/InsightsPageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.insightsTitle,
  description: describePage("insights", en),
  path: routes.insights,
  locale: "en",
});

export default function InsightsPage() {
  return <InsightsPageView dictionary={en} />;
}
