import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.peopleTitle, robots: { index: false, follow: true } };

export default function PeoplePage() {
  return <PlaceholderPage dictionary={en} title={en.pages.people} />;
}

