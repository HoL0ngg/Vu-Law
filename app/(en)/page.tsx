import type { Metadata } from "next";
import HomePageView from "../components/HomePageView";
import { routes } from "../i18n/routes";
import { describePage, homeTitle, pageMetadata } from "../lib/page-metadata";
import { en } from "../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: homeTitle(en),
  description: describePage("home", en),
  path: routes.home,
  locale: "en",
});

export default function HomePage() {
  return <HomePageView dictionary={en} />;
}
