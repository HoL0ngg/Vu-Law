import { Cormorant_Garamond } from "next/font/google";

export const primaryFont = Cormorant_Garamond({
  subsets: ["vietnamese"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

