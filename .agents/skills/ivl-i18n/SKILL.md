---
name: ivl-i18n
description: Bilingual (English + Vietnamese) architecture for the Integritas Vu Legal website, English first. Use this skill whenever you add or move any visible string, create a page or component that shows text, set up locale files or routing, touch the html lang attribute, page titles/metadata, a language switcher, hreflang, or when anyone says "add Vietnamese", "translate", "bilingual", "i18n" or "vi version". Read it before building any English page, because the English build must be structured so Vietnamese can be added later without refactoring.
---

# IVL i18n: English now, Vietnamese later

## The situation

The client wants the final site in English and Vietnamese. Only English copy has been supplied and approved. So: build the English site completely, make the code ready for Vietnamese, and do not expose Vietnamese until the client supplies it.

## Why this shape

Retrofitting i18n into hard-coded strings is the expensive part of going bilingual, and it is cheap to do now. But exposing half-translated or unapproved Vietnamese legal copy is a professional risk, so the Vietnamese locale exists in code and stays switched off.

## Rules

1. **Reuse the framework's i18n idiom.** Detect what the repo already uses (or what the framework officially recommends) and use that. Add a dependency only if the framework has no built-in support, and say why in the report. If nothing exists and the site is small, a typed dictionary per locale plus a tiny `t()` helper is enough. Record the choice in `AGENTS.md` "Repository facts".

2. **No hard-coded visible strings in components.** Headings, paragraphs, CTAs, nav labels, footer text, alt text, `aria-label`s, page `<title>` and meta descriptions all come from locale files. Non-visible identifiers (class names, route ids) stay in code.

3. **Key naming mirrors the reference files**, grouped by page and section, for example `home.hero.title`, `home.introduction.cta`, `about.philosophy.integrity.descriptor`, `footer.disclaimer.body`, `nav.about`. Insight cards, expertise areas and footer link lists are arrays or objects of keys so real content can be dropped in.

4. **English is complete; Vietnamese is a scaffold.** `en` holds all Phase 1-2 strings from the reference files. `vi` has the same key structure and contains only Vietnamese text the client has actually supplied:
   - `VỀ INTEGRITAS VŨ LEGAL` (introduction CTA)
   - `CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL` (entity name)
   - `Nguyễn Hà Thanh Vũ` (person name)
   - the 8 featured expertise items from the prototype, unchanged (the client asked to keep them)
   Every other `vi` key is absent or an explicit empty value with `TODO(client): Vietnamese copy pending`. Never fill `vi` yourself.

5. **Prototype Vietnamese text is not client-approved Vietnamese copy.** It differs from the new English copy (for example the old hero "Trí tuệ dẫn lối. Công bằng làm kim chỉ nam." is not a translation of "Strategic Counsel. Resolute Advocacy."). Do not put it into `vi`, and do not show it on English pages.

6. **Never translate.** Not machine translation, not your own. If an English page needs a string the client has not supplied, use the placeholder rules in `ivl-content-update`.

7. **Routing.** Default: English at `/` (no prefix), Vietnamese reserved at `/vi/...` mirroring the same slugs (`ivl-sitemap-navigation/references/sitemap.md`). If the framework forces a prefix for every locale, use `/en` and report it. Behind one config flag (for example `VI_ENABLED = false`):
   - `/vi/*` routes do not build or return 404,
   - no language switcher is rendered,
   - no `hreflang` tags, and the Vietnamese pages are absent from `sitemap.xml`.
   Flipping the flag plus adding copy must be all it takes to launch Vietnamese.

8. **Document language.** `<html lang="en">` on English pages (`lang="vi"` on Vietnamese ones later). Mark Vietnamese fragments on an English page, such as the introduction CTA and entity name, with `lang="vi"` where the framework allows it.

9. **Fallbacks.** In production English never falls back to Vietnamese, with one exception: the 8 expertise items, whose English text is pending (`AGENTS.md` open question 3). For those, fall back to the Vietnamese text and leave a visible `TODO(client)` in code and in the report.

10. **Layout tolerance.** Vietnamese strings are often longer and use stacked diacritics. Keep containers flexible (no fixed heights on headings and CTAs) and give line-height room. The Vietnamese font subset is already required (`ivl-typography-unify`).

## Adding Vietnamese later (checklist for when the client delivers)

1. For each page, create a `references/vi-<page>.md` with the same fenced-`text` convention, from the client's Vietnamese document. Do not write it from the English.
2. Fill `vi` keys from it; `check_copy.py` can then verify Vietnamese pages.
3. Decide slug policy and brand spelling with the client (`AGENTS.md` open question 8).
4. Turn the flag on; add the language switcher, `hreflang`, and Vietnamese entries in `sitemap.xml`.
5. Run `ivl-qa-verify` for both locales.

## Report

State the i18n mechanism used, the file layout of the locale files, the routing decision, how many keys `en` and `vi` have, every `TODO(client)` in `vi`, and where any prototype Vietnamese text was parked.
