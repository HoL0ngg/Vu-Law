---
name: ivl-qa-verify
description: Verification checklist and final-report format for any change to the Integritas Vu Legal website. Use this skill before you tell the user a task is done - after editing copy, fonts, navigation, or components - to run build/lint, check that client copy appears verbatim, confirm a single font family, look for dead links, check responsive layout and Vietnamese diacritics, and write the report of deviations, placeholders and open questions. Also use it when asked to "check", "review", "QA" or "verify" the site.
---

# IVL QA and final report

## Why

The client reviews this site line by line. Most defects here are silent: a paraphrased sentence, a second font sneaking in on buttons, a footer link that 404s, an apostrophe rendered as `&apos;`. Cheap checks catch them before the user does.

## Checks (run what applies to the change)

1. **Project health.** Use the commands recorded in `AGENTS.md` "Repository facts". Run install only if needed, then lint, typecheck, tests and production build, whichever exist. Do not invent scripts. If something fails for reasons unrelated to your change, say so with the error.

2. **Copy fidelity.** Serve the site (dev or preview server), then:
   ```bash
   python3 .agents/skills/ivl-content-update/scripts/check_copy.py --source http://localhost:<port>/ \
     --reference .agents/skills/ivl-content-update/references/phase-1-homepage.md
   python3 .agents/skills/ivl-content-update/scripts/check_copy.py --source http://localhost:<port>/about \
     --reference .agents/skills/ivl-content-update/references/phase-2-about-us.md
   ```
   Every missing string is a defect unless the report explains it. If the site renders only on the client, save the rendered DOM with a headless browser and pass the `.html` file.

3. **Single font.** Run `.agents/skills/ivl-typography-unify/scripts/audit-fonts.js` in the browser on Home and About Us, desktop and mobile widths. Expect one family, and the face listed as loaded.

4. **Links.** Click or crawl every header, footer and CTA link on Home and About Us. No 404s, no `#` placeholders, anchors on `/about` scroll to the right section.

5. **Responsive.** Check about 375, 768 and 1280 px wide. Look for: long uppercase CTAs wrapping badly, the four-item footer stacking, hero text overflowing, horizontal scroll.

6. **i18n.** No hard-coded visible strings left in components (search JSX/templates for literal text and for Vietnamese characters). `en` locale has every key used by Home and About Us. `vi` contains only client-supplied text. With the Vietnamese flag off: no `/vi` routes, no switcher, no `hreflang`. The only Vietnamese visible on English pages is the intentional list in `ivl-i18n` rule 4, marked `lang="vi"`. `<html lang="en">` is set.

7. **Vietnamese rendering.** Diacritics render in the site's font (no boxes, no fallback-font glyphs) in `NGUYỄN HÀ THANH VŨ`, `CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL`, `VỀ INTEGRITAS VŨ LEGAL`. Page charset is UTF-8. No `&apos;` or `&amp;` visible as text.

8. **Guardrails.** Nothing invented (see `ivl-legal-guardrails`); placeholders still bracketed with `TODO(client)`; disclaimer present on every page; no new third-party scripts.

9. **Diff hygiene.** `git diff --stat` shows only intended files. No stray debug code, no unrelated formatting churn, no lockfile changes unless a dependency was deliberately added.

## Final report format

Keep it factual and short. Use these headings:

- **Done** - what changed, by area (typography, navigation, homepage, about), with the main files.
- **Checks** - each check above with pass/fail and the command or method.
- **Deviations** - anything that differs from the client's text or structure and why.
- **Suspected typos in client copy** - quoted, not fixed.
- **Placeholders remaining** - each `[...]` and `TODO(client)` with its location.
- **Routes** - the prototype-to-sitemap gap analysis; created, renamed, or linked to a parent page.
- **i18n** - mechanism used, locale file layout, routing decision, `TODO(client)` items in `vi`.
- **Prototype removals and parked text** - routes/pages removed or left unlinked, and prototype text moved to `docs/prototype-vi-copy.md`.
- **Open questions** - the ones in `AGENTS.md`, each with the default you applied, plus any new ones.
- **Not done / needs the client** - missing inputs (address, phone, email, photo, article titles, Terms/Privacy text).
