import type { Metadata } from "next";
import PeoplePageView from "../../components/PeoplePageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.peopleTitle,
  alternates: { languages: languageAlternates("people") },
};

export default function PeoplePage() {
  return <PeoplePageView dictionary={en} />;
}
