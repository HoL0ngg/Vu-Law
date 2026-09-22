import type { Metadata } from "next";
import ContactPageView from "../../components/ContactPageView";
import { languageAlternates } from "../../i18n/routes";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.contactTitle,
  alternates: { languages: languageAlternates("contact") },
};

export default function ContactPage() {
  return <ContactPageView dictionary={en} />;
}
