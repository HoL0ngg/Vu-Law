import type { Metadata } from "next";
import ContactPageView from "../../components/ContactPageView";
import { routes } from "../../i18n/routes";
import { describePage, pageMetadata } from "../../lib/page-metadata";
import { en } from "../../i18n/en";

export const metadata: Metadata = pageMetadata({
  title: en.meta.contactTitle,
  description: describePage("contact", en),
  path: routes.contact,
  locale: "en",
});

export default function ContactPage() {
  return <ContactPageView dictionary={en} />;
}
