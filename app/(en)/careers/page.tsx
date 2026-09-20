import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.careersTitle, robots: { index: false, follow: true } };

export default function CareersPage() {
  return <PlaceholderPage dictionary={en} title={en.pages.careers} />;
}

