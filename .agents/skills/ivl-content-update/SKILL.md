---
name: ivl-content-update
description: Apply the Integritas Vu Legal (IVL) client's approved website copy (Phase 1 Homepage and Phase 2 About Us) to the codebase word for word. Use this skill whenever a task involves adding, replacing, moving or checking visible text on the IVL site - hero, introduction, "The IVL approach", expertise, featured insights, people, footer, legal disclaimer, or the About Us page (Our Firm, Our Philosophy, Our Approach, Values). Also use it when the user says "apply the client feedback", "update the homepage" or "update the about page", even if they never mention copy.
---

# IVL content update

## Why this skill exists

The copy in `references/` was written by the client, a law firm. In legal marketing a paraphrase can change meaning or imply a guarantee, so the job here is accurate transcription into the right components, not editing. Fidelity matters more than speed.

## Source of truth

- `references/phase-1-homepage.md` - Homepage
- `references/phase-2-about-us.md` - About Us

Inside those files, every line in a fenced `text` block is a string that must appear on the page exactly as written. Everything outside the fences is guidance for you. Placeholders are listed in tables outside the fences on purpose.

## Procedure

1. **Read the repo facts** in `AGENTS.md`. If they are still TBD, discover them first (framework, commands, where copy lives, slug convention).
2. **Read `ivl-i18n`.** All English copy goes into the `en` locale files, never into components. Set that up first if it does not exist yet.
3. **Locate the prototype's current copy.** The repo is a temporary prototype, so its text is not authoritative. Search for a few existing strings (for example "Trí tuệ dẫn lối", "Chuyên môn cốt lõi", "Giải pháp pháp lý") to learn how text maps to components. Write a section map in your notes: client section -> file/component -> what changes.
4. **Build to the client's structure.** Reuse the prototype's markup, classes, animation hooks and visual language where they fit, but the client's section order and content win. Add an element when the client's structure needs something the layout lacks (for example a second hero CTA); remove prototype elements the client's structure does not include.
5. **Wire CTAs** to the destinations in the reference file. Use `ivl-sitemap-navigation` for slugs.
6. **Handle placeholders** (see below).
7. **Park prototype text the client did not address.** English pages must not show the prototype's Vietnamese text (headings, subtitles, taglines). Move it into `docs/prototype-vi-copy.md` (one section per page, with its original location) so nothing is lost, and list it in the report. Exception: the 8 expertise items follow `ivl-i18n` rule 4 and 9. Never translate parked text.
8. **Run `ivl-qa-verify`**, including `scripts/check_copy.py`, then write the report.

## Fidelity rules

- Same words, same order, same punctuation. Keep British spelling ("centre", "Analyse").
- Do not fix typos or style. Add them to the report. Known nits: the last line of "Our approach remains consistent" has no full stop; the client mixes " - " and " — " between term and descriptor; "Integritas Vu Legal" vs "Integritas Vũ Legal".
- Escape quotes and apostrophes the way the framework needs (`&apos;` in JSX, or a string literal) so the rendered text is unchanged.
- **Case.** CTAs and eyebrow labels are given in UPPERCASE. Match however the site already does it (literal text or CSS `text-transform`); the rendered result must read as the client wrote it. Body copy keeps sentence case.
- **Arrows.** `→` in the client doc marks the site's existing arrow style. Keep the existing arrow treatment; do not add an arrow to the string if the site draws it with an icon or pseudo-element.
- **Diacritics.** Never strip or add them (see AGENTS.md rule 6).
- Do not write new subtitles, taglines, meta descriptions, alt text that describes people, or microcopy. Section headings follow AGENTS.md open question 5: use the client's own section names in Title Case ("Our Expertise", "Featured Insights", "Our People") and nothing more. A page `<title>` may follow the pattern `<Page name> | Integritas Vu Legal`; put it in the locale file and mention it in the report.

## Placeholders

Client placeholders (`[Article title]`, `[Office Address]`, `[Telephone]`, `[Email]`) are not content yet. Keep the bracketed text as the `en` value, keep the data structure ready to receive real values (for example an array of insight cards, a contact config object), add a `TODO(client): ...` comment, and list every one in the report.

The photo of Mr. Vũ: reuse an image already in the repo if there is one, otherwise a neutral existing placeholder. Never fetch a stock photo of a person.

The footer year `[2026]` is a year placeholder. Render `© 2026 ...` (or the site's existing dynamic-year pattern).

## When the layout does not fit the copy

If a client structure cannot fit the prototype's layout without a redesign (for example four expertise categories in a three-column grid), choose the smallest change that works and describe it. Keep the visual language; do not invent a new one.

## Verification

`scripts/check_copy.py` reads the fenced `text` blocks from the reference files and checks they appear in rendered HTML:

```bash
python3 .agents/skills/ivl-content-update/scripts/check_copy.py \
  --source http://localhost:3000/ \
  --reference .agents/skills/ivl-content-update/references/phase-1-homepage.md
```

`--source` accepts a URL or a saved `.html` file. If the site renders on the client only, the raw HTML will be nearly empty; save the rendered DOM from a headless browser and pass that file instead.
