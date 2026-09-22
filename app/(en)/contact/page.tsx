import type { Metadata } from "next";
import ContactPageView from "../../components/ContactPageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.contactTitle };

export default function ContactPage() {
  return <ContactPageView dictionary={en} />;
}
