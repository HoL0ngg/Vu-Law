import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.termsTitle, robots: { index: false, follow: true } };

export default function TermsPage() {
  return <PlaceholderPage dictionary={en} title={en.pages.terms} />;
}

