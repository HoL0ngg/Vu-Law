"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VI_ENABLED, type Locale } from "../i18n/config";
import { switchLocalePath } from "../i18n/routes";

const LOCALES: ReadonlyArray<{ code: Locale; label: string; lang: string; title: string }> = [
  { code: "en", label: "EN", lang: "en", title: "English" },
  { code: "vi", label: "VI", lang: "vi", title: "Tiếng Việt" },
];

type LanguageSwitcherProps = {
  locale: Locale;
  onNavigate?: () => void;
};

/**
 * EN / VI toggle. Renders nothing while `VI_ENABLED` is off (ivl-i18n rule 7), so the
 * flag alone controls whether the site looks bilingual.
 *
 * The labels are language names, not UI copy, so they stay out of the locale files -
 * "EN" and "VI" must read the same whichever language you are currently in.
 */
export default function LanguageSwitcher({ locale, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname();
  if (!VI_ENABLED) return null;

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LOCALES.map(({ code, label, lang, title }) => {
        const active = code === locale;
        return (
          <Link
            className={active ? "is-active" : ""}
            key={code}
            href={switchLocalePath(pathname, code)}
            hrefLang={lang}
            lang={lang}
            title={title}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
