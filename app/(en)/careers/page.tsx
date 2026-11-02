import type { Metadata } from "next";
import CareersPageView from "../../components/CareersPageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.careersTitle,
  description: describePage("careers", en),
  path: routes.careers,
  locale: "en",
});

export default function CareersPage() {
  return <CareersPageView dictionary={en} />;
}
