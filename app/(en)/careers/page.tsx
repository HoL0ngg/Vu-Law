import type { Metadata } from "next";
import CareersPageView from "../../components/CareersPageView";
import { en } from "../../i18n/en";

export const metadata: Metadata = { title: en.meta.careersTitle };

export default function CareersPage() {
  return <CareersPageView dictionary={en} />;
}
