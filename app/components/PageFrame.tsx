import type { ReactNode } from "react";
import { preload } from "react-dom";
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
  // The hero picture is a CSS background, which the browser only finds after the stylesheet;
  // asking for it up front shortens the time to the largest paint.
  preload("/images/courthouse-hero.webp", { as: "image", fetchPriority: "high" });

  return (
    <>
      <ScrollFX />
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </>
  );
}

