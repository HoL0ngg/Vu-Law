import type { Metadata, Viewport } from "next";
import { VI_ENABLED } from "../i18n/config";
import { primaryFont } from "../i18n/font";
import { SITE_URL } from "../lib/site";
import "../globals.css";

/** The navy of the header, so the phone's browser bar matches the page. */
export const viewport: Viewport = { themeColor: "#0d1b2a" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: VI_ENABLED ? undefined : { index: false, follow: false },
};

export default function VietnameseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={primaryFont.variable}>{children}</body>
    </html>
  );
}
