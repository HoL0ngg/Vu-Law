import { en, type EnglishDictionary } from "./en";
import { vi } from "./vi";

export const VI_ENABLED = false;

export type Locale = "en" | "vi";
export type Dictionary = EnglishDictionary;

export function getEnglishDictionary(): Dictionary {
  return en;
}

export function getVietnameseScaffold() {
  return vi;
}

export function getVietnameseDictionary(): Dictionary {
  return vi as unknown as Dictionary;
}

export function isLocaleEnabled(locale: Locale): boolean {
  return locale === "en" || VI_ENABLED;
}
