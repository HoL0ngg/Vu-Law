import type { Metadata } from "next";
import PeoplePageView from "../../components/PeoplePageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.peopleTitle };

export default function PeoplePage() {
  return <PeoplePageView dictionary={en} />;
}
