import { Cormorant_Garamond } from "next/font/google";

// "latin" carries almost every glyph on the English site; "vietnamese" only adds
// the diacritic range. Requesting both preloads both files — with "vietnamese"
// alone the Latin face is fetched late and body copy flashes in a fallback face.
export const primaryFont = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

