import type { Metadata } from "next";
import ExpertisePageView from "../../components/ExpertisePageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.expertiseTitle };

export default function ExpertisePage() {
  return <ExpertisePageView dictionary={en} />;
}
