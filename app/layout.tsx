import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Cinzel } from "next/font/google";
import { BrandDefs } from "./components/Brand";
import "./globals.css";

// Montserrat + Cinzel (thay cho Trajan Pro) theo bảng typography của thương hiệu.
// Cinzel chỉ có Latin nên chỉ dùng cho phần chữ không dấu: wordmark, monogram IVL.
const sans = Montserrat({
  subsets: ["vietnamese"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["vietnamese"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Integritas Vu Legal | Luật sư & Cố vấn",
  description: "Giải pháp pháp lý chiến lược cho doanh nghiệp và cá nhân.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${sans.variable} ${serif.variable} ${display.variable}`}>
        <BrandDefs />
        {children}
      </body>
    </html>
  );
}
