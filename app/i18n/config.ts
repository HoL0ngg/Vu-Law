import { en, type EnglishDictionary } from "./en";
import { vi } from "./vi";

/**
 * Vietnamese is live. The Client supplied Vietnamese for the Homepage, About Us and
 * Expertise; People, Contact, Careers and Insights have none yet, so those pages fall
 * back to the Client's approved English rather than being machine-translated
 * (AGENTS.md rule 6, ivl-i18n rule 6). Nothing here translates anything.
 */
export const VI_ENABLED = true;

export type Locale = "en" | "vi";
export type Dictionary = EnglishDictionary;

type Plain = Record<string, unknown>;

function isPlainObject(value: unknown): value is Plain {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlay a partial locale onto the complete English dictionary.
 *
 * `vi` is a `Scaffold<EnglishDictionary>`: every key is optional. Casting it straight to
 * `Dictionary` used to compile but lied at runtime - `/vi/people` would have read
 * `peoplePage.members` off `undefined` and thrown. Walking English as the shape means a
 * missing Vietnamese key yields the English string instead of a crash or a blank.
 *
 * Arrays are merged by index so a short Vietnamese list cannot shift its English
 * counterparts out of alignment - the footer's navigation labels are paired with routes
 * by position, and the Client's Vietnamese list is one entry shorter than the English.
 */
function mergeDeep<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;

  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base;
    if (base.length === 0) return override as unknown as T;
    return base.map((item, index) => mergeDeep(item, override[index])) as unknown as T;
  }

  if (isPlainObject(base)) {
    if (!isPlainObject(override)) return base;
    const merged: Plain = {};
    for (const key of Object.keys(base)) {
      merged[key] = mergeDeep(base[key], override[key]);
    }
    return merged as T;
  }

  // An empty string is treated as "not supplied" so a placeholder cannot blank a label.
  if (typeof override === "string" && override.trim() === "") return base;
  return override as T;
}

const vietnamese: Dictionary = mergeDeep(en, vi);

export function getEnglishDictionary(): Dictionary {
  return en;
}

export function getVietnameseScaffold() {
  return vi;
}

export function getVietnameseDictionary(): Dictionary {
  return vietnamese;
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "vi" ? vietnamese : en;
}

export function isLocaleEnabled(locale: Locale): boolean {
  return locale === "en" || VI_ENABLED;
}
