---
name: ivl-legal-guardrails
description: Content and compliance guardrails for the Integritas Vu Legal law-firm website. Read this before writing, editing or adding any text, page, form, tracking script, image or component on the IVL site - especially the disclaimer, contact details, lawyer profiles, insights/articles, testimonials, case results, privacy or terms pages, contact forms, analytics, and anything that could read as legal advice or a promise of outcome. Use it even for small copy tweaks, because a law firm's website is regulated professional communication.
---

# IVL legal-site guardrails

## Why this exists

A law firm's website is professional communication. Lawyer advertising is regulated in Vietnam, clients expect confidentiality, and the firm's credibility depends on precision. This skill encodes conservative defaults so that a code change never creates a professional-conduct or privacy problem. It does not claim to state Vietnamese regulations. The client should review anything beyond its supplied copy before it goes live, and you should say so in your report when a change touches these areas.

## Content rules

1. **Only client-supplied facts.** Do not invent or "fill in": lawyer names, bios, bar numbers, qualifications, years of experience, client names, case results, testimonials, awards, rankings, statistics, office locations, phone numbers, emails, article titles. Unknown items stay as the client's bracketed placeholders with `TODO(client)`.
2. **No promises of outcome.** No "guaranteed", "we always win", "100%", "no risk". The client's own line "Focused on results" and "outcomes that are meaningful, achievable" are theirs to use verbatim; do not extend them.
3. **No unsupported superlatives or comparisons** ("best", "leading", "top-tier", "#1", "unlike other firms") unless the client supplied and approved them.
4. **The site informs; it does not advise.** Do not add "how to" legal guidance, checklists or Q&A that could be taken as advice on a specific matter. The Insights section is for the client's own articles.
5. **The disclaimer is verbatim and universal.** The footer Disclaimer (see `ivl-content-update`, Phase 1 section 7) appears on every page through one shared component. Never shorten or alter it.
6. **Legal pages need client text.** Terms of Use, Privacy Policy and Legal Disclaimer pages: do not generate boilerplate. Create a titled placeholder only, and report that the client must supply the text.
7. **Forms must not imply a lawyer-client relationship.** For the future Contact form, any reassurance or consent microcopy must come from the client. Do not write "your message is confidential" or similar promises unless the client approves the wording.

## Privacy and technical rules

8. **No new third-party scripts** (analytics, tag managers, chat widgets, session replay, ad pixels, embedded fonts from new hosts without need) without the client's approval. Visitors may be contacting a lawyer about sensitive matters.
9. **Never log or send form contents** to analytics or third parties. Do not add form fields beyond what the client asked for.
10. **No personal data in code, commits or fixtures.** Use the client's placeholders, not made-up realistic people.
11. **Images of people.** Never use stock photos to represent lawyers or clients, and never invent alt text that names a person who has not been named by the client. Use neutral alt text ("Portrait placeholder") for placeholders.

## Language and tone

- Formal, measured, no exclamation marks, no emoji, no slang, no marketing hype.
- British spelling, as in the client's copy.
- English pages carry `lang="en"`. Vietnamese fragments (for example the CTA `VỀ INTEGRITAS VŨ LEGAL`) are marked `lang="vi"` where the framework allows it. See `ivl-i18n`.
- Vietnamese copy comes only from the client. Do not translate legal text yourself in either direction, and do not publish prototype Vietnamese text as if it were approved.
- Names: "Integritas Vu Legal" in English copy; `CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL` for the legal entity; `Nguyễn Hà Thanh Vũ` for the founder. Never alter these forms.

## Escalation

If a requested change conflicts with a rule above, do not silently comply or silently refuse. Implement the safe part, leave the rest as a `TODO(client)`, and describe the conflict in the report so the user can take it to the client.
