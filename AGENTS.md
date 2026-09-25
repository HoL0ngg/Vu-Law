# AGENTS.md — Integritas Vu Legal (IVL) website

Website for **Integritas Vu Legal**, a Vietnam-based boutique law firm (legal entity: CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL). Production domain: https://www.integritasvulegal.com/

This file is the entry point. Step-by-step procedures live in skills under `.agents/skills/`. The client's approved copy is transcribed in `.agents/skills/ivl-content-update/references/`. The client's original feedback is `docs/client-feedback/IVL_WEBSITE.docx`.

## Project status

- **The current codebase is a temporary prototype.** The client's sitemap and copy are the target, not the prototype. Prototype routes, pages, navigation and text that are not in the client's sitemap or copy are disposable (see rule 4 for how to remove them safely).
- **What to keep from the prototype:** its visual language (dark navy, gold accent, columns photography, motion, general layout feel), because the client has reviewed it and asked for no redesign, plus shared assets such as images.
- **Bilingual, English first.** The final site will be English + Vietnamese. Right now build the **English version completely** and make the code **ready for Vietnamese** without exposing it (see `ivl-i18n`).

## Sitemap (authoritative, from the client)

Seven top-level pages, in this order: **HOME - ABOUT US - EXPERTISE - PEOPLE - INSIGHTS - CAREERS - CONTACT**.

```
HOME
ABOUT US            Our Firm | Our Philosophy | Our Approach | Values
EXPERTISE
  Dispute Resolution        Commercial Litigation | Arbitration | Construction Disputes |
                            Investment / Shareholder Disputes | Asset Recovery |
                            Judgment & Award Enforcement
  Corporate & Commercial    Corporate Advisory | Corporate Governance | Contracts | M&A | Investment / FDI
  Real Estate & Construction
  Employment
  Private Clients           Civil Disputes | Property | Inheritance | Matrimonial Property
PEOPLE              Nguyễn Hà Thanh Vũ | Lawyers / Associates
INSIGHTS            Legal Updates | Legal Insights | Case Notes | Practical Guides | Publications
CAREERS
CONTACT
```

Full tree with URL slugs: `.agents/skills/ivl-sitemap-navigation/references/sitemap.md`.

## Current work

| Phase | Scope | Status |
|---|---|---|
| Site-wide | One single typeface | In scope |
| Site-wide | i18n foundation: English complete, Vietnamese scaffold, not exposed | In scope |
| Site-wide | Sitemap: 7-item header, footer links, routes for all top-level pages | In scope |
| 1 | Homepage: hero, introduction, IVL approach, expertise, featured insights, people, footer | In scope |
| 2 | About Us: Our Firm, Our Philosophy, Our Approach, Values | In scope |
| 3+ | Content of Expertise, People, Insights, Careers, Contact pages | Out of scope: routes exist as minimal placeholders, no content written |
| Later | Vietnamese content and language switcher | Out of scope until the client supplies Vietnamese copy |

## Skills

| Skill | Use when |
|---|---|
| `ivl-content-update` | Any visible text on Homepage or About Us |
| `ivl-i18n` | Adding any visible string, page or component; locale routing; anything about Vietnamese or translation |
| `ivl-typography-unify` | Fonts, `font-family`, font loading, type styles |
| `ivl-sitemap-navigation` | Header/footer nav, routes, slugs, CTA destinations, removing prototype pages |
| `ivl-legal-guardrails` | Any content or component on this law-firm site (read before writing text) |
| `ivl-qa-verify` | Before reporting a task as done |

## Rules that always apply

1. **Client copy is transcribed, never authored.** The client is a law firm; a paraphrase can change legal meaning or imply a guarantee. Do not rewrite, shorten, "improve" or fix typos. Log suspected typos in your report instead.
2. **No invented facts.** Never make up addresses, phone numbers, emails, lawyer names, credentials, case results, client names, testimonials, statistics, awards, article titles, or legal text (Terms, Privacy). Missing items stay as the client's bracketed placeholders (`[Office Address]`, `[Article title]` ...) with a `TODO(client)` code comment.
3. **One typeface.** One font family site-wide (`ivl-typography-unify`). Hierarchy comes from size, weight, italic, case and letter-spacing, never from a second family.
4. **The client's sitemap and copy win over the prototype.** Where the prototype differs, follow the client. Remove prototype navigation entries that are not in the sitemap. Delete a prototype page only if it is not in the sitemap and nothing else references it; otherwise leave it unlinked. Keep shared assets. List every removal in the report. Keep the visual language (see Project status).
5. **English first, Vietnamese ready.** No hard-coded visible strings in components: every visible string comes from the locale files (`ivl-i18n`). The English site must not show Vietnamese text except the client-supplied items listed in `ivl-i18n`.
6. **Never translate or machine-translate legal copy**, in either direction. Vietnamese text comes from the client. The prototype's Vietnamese text is not approved Vietnamese copy: do not show it on English pages and do not publish it as Vietnamese; park it for reference (`ivl-content-update`, step 7).
7. **Vietnamese must render correctly** even on English pages, because names and the entity name carry diacritics: UTF-8 everywhere, diacritics never stripped, Vietnamese font subset loaded.
8. **Names are intentional as supplied.** English copy uses "Integritas Vu Legal" (no diacritics). The entity name `CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL` and the person name `Nguyễn Hà Thanh Vũ` keep their diacritics. Do not normalise in either direction.
9. **Repo hygiene.** No new dependencies unless clearly necessary (say why). No dependency upgrades. No secrets. Do not deploy, commit or push unless asked. Keep the diff reviewable.

## Repository facts

Fill this section in on first run (Step 0) and keep it current. Edit only this section of this file.

- Framework / build tool: Next.js 16.3.2 with React 19.1 and the App Router; TypeScript; `next dev` / `next build`.
- Package manager: npm (`package-lock.json` is present).
- Dev / build / lint / typecheck / test commands: `npm run dev`; `npm run build`; `npm run lint` (this script runs `tsc --noEmit` and is the typecheck); no separate test command exists.
- Where page copy lives (components, MDX, JSON, i18n, CMS): typed dictionaries in `app/i18n/` (`en.ts`, `vi.ts`), consumed by view components through a `dictionary` prop. No MDX or CMS. Page titles live in `en.meta.*`. No visible string is hard-coded in a component.
- Routing convention: App Router with locale route groups. `app/(en)/` serves English at unprefixed paths; `app/(vi)/vi/[[...segments]]/` mirrors the same slugs under `/vi` and is gated by `VI_ENABLED`. Every view (`HomePageView`, `AboutPageView`, `ExpertisePageView`, `PeoplePageView`, `ContactPageView`, `CareersPageView`, `InsightsPageView`, `PlaceholderPage`) is locale-agnostic and receives a dictionary plus a `locale`. Hrefs are built by `routePath()` / `aboutAnchors` in `app/i18n/routes.ts`, never as scattered literals.
- Pages with Client content: `/` (Phase 1), `/about` (Phase 2), `/expertise` (Phase 3, eight practice areas as in-page anchors), `/people` (Phase 4 index: portrait, name and role only), `/people/nguyen-ha-thanh-vu` and `/people/truc-nguyen` (the biographies, opened from the index at the Client's request), `/contact` (Phase 5, including the enquiry form), `/insights` (Phase 6, category cards only), `/careers` (Phase 7). Still label-only `noindex` placeholders: `/experience`, `/terms-of-use`, `/privacy-policy`, `/legal-disclaimer`.
- Company name in copy: the Client asked (Feedbacks, 2026-09) that the abbreviation "IVL" never appear as the company name. Every occurrence now reads in full - `Integritas Vu Legal` in English, `Integritas Vũ Legal` in Vietnamese - in both locale files and in the phase-1 to phase-7 reference files. Uppercase labels carry the uppercase form. Two places were handled specially: the Vietnamese sentence that defined the abbreviation lost its `(“IVL”)` parenthetical rather than becoming `Integritas Vũ Legal (“Integritas Vũ Legal”)`, and the Homepage portrait placeholder now shows the lawyer's initials instead of the firm monogram. `en.brand.monogram` is retained but unused.
- Client inputs now supplied (2026-09): the firm's office address (English and Vietnamese), telephone `0938 170 130` and `contact@integritasvulegal.com`, shown in the footer contact column and in a firm card on `/contact`, with the telephone and email as `tel:` / `mailto:` links. Portraits for both lawyers live in `public/images/`, renamed to ASCII slugs matching their routes. Mr Vu's own `Direct:` line, professional email and LinkedIn are still placeholders - the Client's updated document keeps them unfilled - and the firm's number is deliberately not substituted for them.
- `Feedbacks/IVL _ WEBSITE content_updated.docx` is the newest Client document and has been transcribed: it supplied the Vietnamese for People, Contact, Careers and Insights. Note that its **English** sections write the firm as "Integritas Vũ Legal" with the diacritic, which contradicts the Client's own message that English uses "Integritas Vu Legal"; that message and AGENTS.md rule 8 were followed instead. The same document also contains `Integritas Vũ Legal ("Integritas Vũ Legal")`, the artefact of a global find-replace, which is a further reason to treat its English spellings as unintended.
- Prototype routes/pages found, and how each maps to the sitemap (kept / renamed / removed / unlinked): `/` kept as Home, rebuilt with the Client's copy. `/publications` removed (`app/publications/page.tsx` deleted); it was prototype-only and not in the sitemap, and `/insights` now represents that part of the sitemap. Prototype header destinations mapped: `#about` -> `/about`, `#services` -> `/expertise`, `/publications` -> `/insights`, `#contact` -> `/contact`, logo `#top` -> `/`.
- i18n mechanism in use or chosen (and why): dependency-free typed `en` / `vi` dictionaries plus locale and route helpers, because the site is small and Next.js has no built-in message-catalogue API; this avoids a new dependency and keeps all visible strings out of components. `vi` is constrained by a `Scaffold<EnglishDictionary>` type so its keys can never drift from `en`.
- Locale routing decision (default: English at `/`, Vietnamese reserved at `/vi`): English is unprefixed, Vietnamese mirrors the same slugs under `/vi`. `VI_ENABLED` is now **true**: `/vi/*` resolves, the EN/VI switcher renders in the header, and each English page declares `hreflang` alternates. `getVietnameseDictionary()` overlays `vi` onto the complete English dictionary key by key, so a page the Client has not translated shows their approved English instead of throwing - the previous `vi as unknown as Dictionary` cast compiled but would have read `peoplePage.members` off `undefined`. Arrays merge by index so a shorter Vietnamese list cannot shift its English counterparts out of alignment. Nothing is machine-translated.
- Vietnamese coverage: **complete for every page that has Client copy** - Homepage, About Us, Expertise, People (index and Dr Truc Nguyen's biography), Contact (including the whole enquiry form and its intake notice), Careers and Insights - plus navigation, page labels and the footer, all transcribed from `Feedbacks/IVL _ WEBSITE content_updated.docx`. The `Home` nav label is `Trang chủ`, approved by the site owner rather than supplied by the Client; confirm it at sign-off. Still English on `/vi`: page `<title>` metadata and the `Experience` label, neither of which the Client's Vietnamese lists cover. Mr Vũ's biography is absent in both locales because it has never been supplied.
- Source of the Client's copy: `Feedbacks/IVL _ WEBSITE content.docx` is the current and most complete Client document. It supersedes `docs/client-feedback/IVL_WEBSITE.docx`. Transcribed into `.agents/skills/ivl-content-update/references/phase-1` through `phase-7`, one file per page.
- Current font family (record BEFORE changing copy or CSS): the prototype's hero sub-line `Giải pháp pháp lý chiến lược, ...` computed to `"Cormorant Garamond", "Cormorant Garamond Fallback", Georgia, serif`, weight 300, normal style. The prototype also loaded Montserrat 300/400/500/600 and Cinzel 400/600; both are removed. The site now loads **Cormorant Garamond only**, weights 300/400/500/600 with italic, subsets `latin` + `vietnamese`, via `app/i18n/font.ts` exposed as `--font-cormorant` and consumed through the single `--font-primary` token in `app/globals.css`. Form controls carry `font-family: inherit`, which the Contact form's inputs, select and textarea depend on. Verified with `audit-fonts.js` on all seven content pages at 1280 px and 375 px: one primary family, face loaded.

## Definition of done

- The relevant `ivl-qa-verify` checks pass, or every failure is explained.
- `check_copy.py` reports no missing strings for the pages touched.
- Computed styles show a single font family site-wide.
- No dead links in header, footer or CTAs; every top-level sitemap page has a route.
- No hard-coded visible strings; English locale complete for Phases 1-2.
- The final report follows the format in `ivl-qa-verify`.

## Open questions for the client

Do not resolve these yourself. Apply the stated default and list each one in the final report.

1. **Footer "Experience".** The footer Navigation lists Experience, but the 7-item sitemap has no Experience page. Default: show the link, point it to a minimal placeholder route `/experience`.
2. **Employment.** The homepage names four service areas (Dispute Resolution; Corporate & Commercial; Real Estate & Construction; Private Clients); the sitemap and footer also include Employment. Default: homepage shows the four; sitemap and footer keep Employment.
3. **"Keep the existing 8 items."** The client wants the 8 featured expertise items from the prototype kept. They exist only in Vietnamese, and the prototype's four tabs (Tranh tụng / Luật dân sự / Doanh nghiệp / Tài chính) do not map one-to-one to the four new service areas. Default: keep the 8 items unchanged in the Vietnamese locale; the English page shows the four new service areas and, for the 8 items, falls back to the Vietnamese text with a `TODO(client)` (English text pending). Do not translate them yourself.
4. **Vietnamese CTA inside English copy.** `VỀ INTEGRITAS VŨ LEGAL →` appears in the English introduction. Default: keep it verbatim on the English page, store it as supplied, flag it (the client probably needs an English label such as an "About" CTA; do not invent one).
5. **Visible section headings.** The client names sections "our expertise", "featured insights", "our people" but gives no heading copy, and the prototype's Vietnamese headings cannot stay on an English page. Default: use the client's own section names in Title Case as headings ("Our Expertise", "Featured Insights", "Our People"); write no subtitles.
6. **Insights.** The sitemap has five items (incl. Publications); the homepage shows four cards.
7. **About label.** The sitemap tree says "ABOUT IVL"; the main list says "ABOUT US". Default: "About Us" in the header, About sub-sections as anchors (`#our-firm`, `#our-philosophy`, `#our-approach`, `#our-values`) on one page.
8. **Vietnamese version.** Who supplies the Vietnamese copy and when; whether Vietnamese slugs are wanted (default: same English slugs under `/vi`); how the brand is spelled in Vietnamese ("Integritas Vũ Legal"?); whether the domain already has traffic that needs redirects from prototype URLs (default: no redirects).
9. **Missing inputs.** Office address, telephone, email, photo of Mr. Vũ, article titles, Terms of Use and Privacy Policy text.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
