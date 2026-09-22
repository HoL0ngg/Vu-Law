import type { Metadata } from "next";
import InsightsPageView from "../../components/InsightsPageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.insightsTitle };

export default function InsightsPage() {
  return <InsightsPageView dictionary={en} />;
}
