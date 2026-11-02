"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // An open menu closes the way people expect: Escape (focus goes back to the button) or a
  // tap anywhere outside the header.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  // data-menu-open tells ScrollFX not to slide the header away while the menu is open.
  return (
    <header className="nav" ref={headerRef} data-menu-open={menuOpen ? "" : undefined}>
      <Link className="brand-link" href={routePath("home", locale)} onClick={() => setMenuOpen(false)}>
        <Brand alt={dictionary.brand.logoAlt} preload />
      </Link>
      <nav id="primary-nav" className={menuOpen ? "open" : ""}>
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
        aria-controls="primary-nav"
        ref={menuButtonRef}
        aria-label={dictionary.navigation.label}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i />
        <i />
      </button>
    </header>
  );
}

