import type { ReactNode } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import ScrollFX from "./ScrollFX";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type PageFrameProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale?: Locale;
};

export default function PageFrame({ children, dictionary, locale = "en" }: PageFrameProps) {
  return (
    <>
      <ScrollFX />
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}

