"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary, Locale } from "../i18n/config";
import { routePath, type RouteKey } from "../i18n/routes";
import Brand from "./Brand";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems: ReadonlyArray<{ label: keyof Dictionary["navigation"]; route: RouteKey }> = [
  { label: "home", route: "home" },
  { label: "about", route: "about" },
  { label: "expertise", route: "expertise" },
  { label: "people", route: "people" },
  { label: "insights", route: "insights" },
  { label: "careers", route: "careers" },
  { label: "contact", route: "contact" },
];

type SiteHeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function SiteHeader({ dictionary, locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <Link className="brand-link" href={routePath("home", locale)} onClick={() => setMenuOpen(false)}>
        <Brand alt={dictionary.brand.logoAlt} preload />
      </Link>
      <nav className={menuOpen ? "open" : ""}>
        {navItems.map((item) => {
          const href = routePath(item.route, locale);
          const active = item.route === "home" ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              href={href}
              key={item.route}
              aria-current={active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {dictionary.navigation[item.label]}
            </Link>
          );
        })}
        <LanguageSwitcher locale={locale} onNavigate={() => setMenuOpen(false)} />
      </nav>
      <button
        className={menuOpen ? "menu is-open" : "menu"}
        type="button"
        aria-expanded={menuOpen}
        aria-label={dictionary.navigation.label}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i />
        <i />
      </button>
    </header>
  );
}

