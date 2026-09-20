import type { Dictionary, Locale } from "../i18n/config";
import PageFrame from "./PageFrame";

type PlaceholderPageProps = {
  dictionary: Dictionary;
  locale?: Locale;
  title: string;
};

export default function PlaceholderPage({ dictionary, locale = "en", title }: PlaceholderPageProps) {
  return (
    <PageFrame dictionary={dictionary} locale={locale}>
      <section className="placeholder-page">
        <h1 className="reveal-line">{title}</h1>
      </section>
    </PageFrame>
  );
}

