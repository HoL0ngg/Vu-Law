import type { Metadata } from "next";
import { en } from "../i18n/en";
import { primaryFont } from "../i18n/font";
import "../globals.css";

export const metadata: Metadata = {
  title: en.meta.defaultTitle,
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={primaryFont.variable}>{children}</body>
    </html>
  );
}

