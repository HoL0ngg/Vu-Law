import type { Metadata } from "next";
import PeoplePageView from "../../components/PeoplePageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.peopleTitle,
  description: describePage("people", en),
  path: routes.people,
  locale: "en",
});

export default function PeoplePage() {
  return <PeoplePageView dictionary={en} />;
}
