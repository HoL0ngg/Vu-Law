import type { Metadata } from "next";
import { en } from "../i18n/en";
import { primaryFont } from "../i18n/font";
import { SITE_URL } from "../lib/site";
import "../globals.css";

export const metadata: Metadata = {
  // Makes every relative canonical, hreflang and Open Graph URL resolve to the live domain.
  metadataBase: new URL(SITE_URL),
  title: en.meta.defaultTitle,
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={primaryFont.variable}>{children}</body>
    </html>
  );
}

