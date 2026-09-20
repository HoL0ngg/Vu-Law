---
name: ivl-typography-unify
description: Unify the Integritas Vu Legal website to a single typeface, using the font of the hero sub-line "Giải pháp pháp lý chiến lược..." as the client requested. Use this skill for any task touching fonts or type - font-family, Google Fonts links, next/font, @font-face, Tailwind fontFamily, CSS variables for type, heading/label/button styles - and whenever the user says "one font", "consistent font", "font is inconsistent", or "unify typography", even if they do not name the site.
---

# IVL typography: one font family

## What the client asked

"Use only one font. Use the font of the line 'Giải pháp pháp lý...'." That line is the small paragraph under the hero headline on the current homepage.

From the client's screenshots, that line and the big headlines look like an elegant serif (probably Cormorant Garamond), while the small uppercase labels and CTAs ("KHÁM PHÁ", "VỀ CHÚNG TÔI", "HỒ SƠ NĂNG LỰC") look like a geometric sans (probably Montserrat). The sans is what has to go. This is a visual guess from a screenshot: confirm it in the CSS.

## Bilingual note

The site will be English and Vietnamese. The chosen family must therefore support the **Vietnamese subset** in every weight and italic the site uses, even while the English site is built first: names such as "Nguyễn Hà Thanh Vũ" already need it. If the family lacks Vietnamese glyphs for a needed weight or italic, report it instead of silently mixing in another family.

## Why the order matters

Phase 1 replaces the hero copy, so the "Giải pháp pháp lý" line will disappear. Identify the font first, write it into `AGENTS.md` under "Repository facts", and only then change copy. If you are already past that point, recover it from git: `git log -S"Giải pháp pháp lý" --oneline` then `git show <commit>:<path>`.

## Procedure

1. **Find the target font.**
   - `rg -n "Giải pháp pháp lý"` -> the element -> its class -> the CSS rule, CSS variable, Tailwind utility or `next/font` variable that sets its `font-family`.
   - Confirm in a browser, not only in source: `getComputedStyle(el).fontFamily` for that element.
   - Record the exact family name and the weights/styles the site uses.

2. **Inventory every font declaration.**
   ```bash
   rg -n "font-family|fontFamily|font:|@font-face|next/font|fonts\.googleapis|fonts\.gstatic|preconnect" --glob '!node_modules' --glob '!dist' --glob '!.next'
   rg -n "Montserrat|Cormorant|Playfair|Inter|Roboto|sans-serif|serif" --glob '!node_modules'
   ```
   Check also: global CSS, CSS modules, Tailwind config (`theme.extend.fontFamily`), theme tokens, styled-components, inline `style`, SVG `<text>`, `<button>`/`<input>`/`<textarea>`/`<select>` (browsers do not inherit font-family for form controls), pseudo-elements, embedded widgets, `<head>` link tags, `public/` font files.

3. **Create one token** (for example `--font-primary`) that holds the target family plus a fallback stack of the same genre. Point everything at it. For form controls add `font-family: inherit`.

4. **Load only that family.** Keep only the weights and italic styles that are actually used. Include the **Vietnamese subset**: with a Google Fonts CSS link the response should contain a `/* vietnamese */` block (check it); with `next/font/google` set `subsets: ['latin', 'vietnamese']`; when self-hosting, ship the Vietnamese font file. A missing subset makes diacritics fall back to another font and silently breaks the "one font" rule.

5. **Remove leftovers.** Delete the old family's `<link>`, `preconnect` that only served it, `@font-face`, font files, and unused variables. Do not leave dead font loading in place.

6. **Rebuild hierarchy without a second family.** Distinguish headline / label / CTA with size, weight, italic, letter-spacing and case, as the site already does. The gold italic accent in headlines only works if the loaded family ships that italic; check it.

7. **Small text.** A display serif looks thin at 11-12px uppercase. If labels become hard to read, raise weight (500-600) or size a step, or add letter-spacing. Do not reintroduce a second family. If it still reads poorly, keep the change minimal and tell the user in the report.

8. **Verify.** Run `scripts/audit-fonts.js` in the browser console (or via Playwright `page.evaluate`) on the Homepage and About page, at desktop and mobile widths. It prints each primary font family with element counts and samples. Expected: one family only. Also confirm the font actually loaded (the script lists loaded faces), so you are not looking at fallback text.

## Report

State the family chosen, how it was identified, weights kept, subsets loaded, files edited, files deleted, and the audit result.
