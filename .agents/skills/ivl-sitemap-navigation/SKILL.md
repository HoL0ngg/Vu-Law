---
name: ivl-sitemap-navigation
description: Implement and maintain the Integritas Vu Legal sitemap - the 7 top-level pages (Home, About Us, Expertise, People, Insights, Careers, Contact), header navigation, footer link columns, route slugs, anchors, and where every CTA points. Use this skill whenever a task touches navigation, menus, footer links, routes, URL slugs, breadcrumbs, redirects, or a CTA destination, or when a link on the site might be dead, even if the user only says "fix the menu" or "add the pages".
---

# IVL sitemap and navigation

## The structure

Seven top-level pages: **HOME - ABOUT US - EXPERTISE - PEOPLE - INSIGHTS - CAREERS - CONTACT**. The full tree with sub-pages is in `references/sitemap.md`.

Phases 1-2 build only Home and About Us content. The other five pages exist as destinations so that navigation never leads nowhere.

## Why the rules below exist

The current codebase is a temporary prototype, so the client's sitemap is authoritative and prototype structure is disposable. But deleting things carelessly loses work, and the client's nav must not contain dead links, which look careless on a law firm's site. The rules balance those two. All routes here are the English routes; Vietnamese mirrors them later under `/vi` (see `ivl-i18n`).

## Rules

1. **Start with a gap analysis.** List the prototype's routes and nav entries, and map each to a sitemap page: kept, renamed, unlinked, or removed. Record it in `AGENTS.md` "Repository facts" and in the report.
2. **Routes follow the slugs in `references/sitemap.md`** (lowercase, ASCII, hyphenated; for example `nguyen-ha-thanh-vu`, never with diacritics). If a prototype route matches a sitemap page but has a different slug (for example a Vietnamese slug), rename it to the sitemap slug. Do not add redirects unless the user asks (AGENTS.md open question 8).
   Prototype pages that are not in the sitemap: remove them from nav, footer and any generated sitemap. Delete the page only if nothing else references it; otherwise leave it unlinked. Keep shared assets. List every removal.
3. **Header nav** has exactly the seven items, in the order above, labelled as in the sitemap list ("About Us"). Keep the prototype's header styling. Labels come from the locale file.
4. **Missing top-level page -> minimal placeholder route.** If Expertise, People, Insights, Careers or Contact has no page, create the smallest possible page in the site's existing layout: the page label as its heading and nothing else. Mark it `noindex` if the framework makes that easy. Do not write page content or "coming soon" marketing text.
5. **Deeper links (footer Key Expertise, People profile, Insights articles):** link to the deepest route that already exists; if none exists, link to the parent top-level page and log it. Do not create a page per footer link.
6. **About Us sub-sections** (Our Firm, Our Philosophy, Our Approach, Values) are anchors on `/about`: `#our-firm`, `#our-philosophy`, `#our-approach`, `#our-values`. Give the matching section elements those ids.
7. **Footer.** Columns and labels come verbatim from `ivl-content-update` (`phase-1-homepage.md`, section 7). Link mapping below.
8. **Active state and mobile menu** keep working with the new items (check both). Link hrefs are built from a route helper or config, not scattered string literals, so a locale prefix can be added later.
9. **Legal pages.** Terms of Use, Privacy Policy, Legal Disclaimer: link them, and if a page does not exist create a minimal placeholder with its title only. The client has to supply the text; do not generate it (see `ivl-legal-guardrails`).

## Footer link mapping

| Footer label | Target |
|---|---|
| About | `/about` |
| Expertise | `/expertise` |
| People | `/people` |
| Insights | `/insights` |
| Experience | placeholder route, see below |
| Careers | `/careers` |
| Contact | `/contact` |
| Dispute Resolution | `/expertise/dispute-resolution` |
| Arbitration | `/expertise/dispute-resolution/arbitration` |
| Enforcement | `/expertise/dispute-resolution/judgment-award-enforcement` |
| Corporate & Commercial | `/expertise/corporate-commercial` |
| Mergers & Acquisitions | `/expertise/corporate-commercial/m-and-a` |
| Foreign Investment | `/expertise/corporate-commercial/investment-fdi` |
| Real Estate & Construction | `/expertise/real-estate-construction` |
| Employment | `/expertise/employment` |
| Terms of Use / Privacy Policy / Legal Disclaimer | `/terms-of-use`, `/privacy-policy`, `/legal-disclaimer` |

Apply rule 5 to every row that starts with `/expertise/`.

**"Experience"** is in the client's footer but not in the sitemap (AGENTS.md open question 1). Show the link as specified and point it to a minimal placeholder route (`/experience`) unless the repo already has a matching page. Report it.

## Report

List: the prototype-to-sitemap gap analysis, routes created, routes renamed, prototype pages removed or left unlinked, routes linked to a parent because the deep page does not exist, and the Experience decision.
