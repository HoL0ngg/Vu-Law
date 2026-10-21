import type { Metadata } from "next";
import { VI_ENABLED } from "../i18n/config";
import { primaryFont } from "../i18n/font";
import { SITE_URL } from "../lib/site";
import "../globals.css";

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
