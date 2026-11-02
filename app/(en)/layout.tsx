import type { Metadata, Viewport } from "next";
import { en } from "../i18n/en";
import { primaryFont } from "../i18n/font";
import { SITE_URL } from "../lib/site";
import "../globals.css";

/** The navy of the header, so the phone's browser bar matches the page. */
export const viewport: Viewport = { themeColor: "#0d1b2a" };

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

