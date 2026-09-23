import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PersonProfileView from "../../../components/PersonProfileView";
import { en } from "../../../i18n/en";
import { personPath } from "../../../i18n/routes";

type PersonPageProps = { params: Promise<{ person: string }> };

export function generateStaticParams() {
  return en.peoplePage.members.map((member) => ({ person: member.slug }));
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
  const { person } = await params;
  const member = en.peoplePage.members.find((candidate) => candidate.slug === person);
  if (!member) return {};
  return {
    title: `${member.name} | ${en.brand.name}`,
    alternates: {
      languages: { en: personPath(member.slug, "en"), vi: personPath(member.slug, "vi") },
    },
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { person } = await params;
  const member = en.peoplePage.members.find((candidate) => candidate.slug === person);
  if (!member) notFound();
  return <PersonProfileView dictionary={en} member={member} />;
}
