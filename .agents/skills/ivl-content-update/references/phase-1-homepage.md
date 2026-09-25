# Phase 1 - Homepage (client-approved copy)

> **Client revision (Feedbacks, 2026-09):** wherever the company name appeared as
> "IVL" it now reads in full - "Integritas Vu Legal" in English, "Integritas Vũ Legal"
> in Vietnamese. Strings below carry the revised form.

Section order on the page: Hero -> Introduction -> The Integritas Vu Legal approach -> Our expertise -> Featured insights -> People -> Footer.

Rule for this file: lines inside `text` fences must appear verbatim. Arrows (`→`) are omitted from the strings; the site draws its own.

## 1. Hero (brand name + slogan)

Brand name as eyebrow, slogan as H1, the two paragraphs below it, then two CTAs. Keep the existing hero visual (navy, gold accent, columns image).

```text
Integritas Vu Legal
Strategic Counsel. Resolute Advocacy.
Integritas Vu Legal is a Vietnam-based law firm providing strategic legal counsel and representation to businesses, investors and private clients in complex transactions, disputes and critical legal matters.
We combine legal insight, strategic thinking and precise execution to help our clients understand their position, manage risk and make informed decisions.
EXPLORE OUR EXPERTISE
MEET OUR LAWYERS
```

| CTA | Destination |
|---|---|
| EXPLORE OUR EXPERTISE | `/expertise` |
| MEET OUR LAWYERS | `/people` |

## 2. Introduction

Two-line headline, two paragraphs, one CTA. The two headline lines belong to one heading.

```text
Law is more than a framework.
It is the foundation for sound decisions.
At Integritas Vu Legal, we believe the value of legal advice lies in helping clients understand the issues, identify risks, evaluate their options and determine the course of action that best serves their objectives.
Integritas Vu Legal is built as a focused law firm where each matter is approached with independent judgment, rigorous analysis and a solution-oriented mindset.
VỀ INTEGRITAS VŨ LEGAL
```

| CTA | Destination |
|---|---|
| VỀ INTEGRITAS VŨ LEGAL | `/about` |

This CTA is Vietnamese inside the English copy. Keep it verbatim as the `en` value, mark it `lang="vi"`, and flag it (AGENTS.md open question 4). Do not write an English replacement.

## 3. The IVL approach

```text
THE INTEGRITAS VU LEGAL APPROACH
Integrity — Strategy — Precision — Results
Principled in judgment. Strategic in approach. Precise in execution. Focused on results.
DISCOVER HOW INTEGRITAS VU LEGAL WORKS
```

| CTA | Destination |
|---|---|
| DISCOVER HOW Integritas Vu Legal WORKS | `/about#our-approach` |

## 4. Our expertise

The client gave the four main service areas and asked to keep the 8 featured items from the prototype. Section heading: "Our Expertise" (the client's section name, AGENTS.md open question 5).

```text
Dispute Resolution
Corporate & Commercial
Real Estate & Construction
Private Clients
```

Do not resolve this ambiguity yourself. See AGENTS.md open question 3. Conservative implementation:

- Show the four service areas above as the category labels, in that order. They replace the prototype's four tabs (Tranh tụng / Luật dân sự / Doanh nghiệp / Tài chính).
- The 8 items exist only in Vietnamese. Keep their text exactly as in the prototype: do not reword, reorder, or translate them. Store them in the `vi` locale (`ivl-i18n` rule 4). On the English page, fall back to the Vietnamese text with a `TODO(client): English text pending`.
- For cross-checking only, the client's screenshot shows this 8-item list (under the "Tài chính" tab): Tài chính doanh nghiệp; Giao dịch bảo đảm; Thẩm định pháp lý; Cấu trúc đầu tư; Quản trị rủi ro; Thu hồi công nợ; Tư vấn thuế; Ngân hàng & tín dụng. The repo is the source of truth, not this list. Other prototype tabs may hold their own items; if so, keep that data in `vi` too and report how it maps.
- Report exactly how tabs, categories and items ended up mapped.
- Write no subtitle under the heading. The prototype's Vietnamese subtitle is parked per `ivl-content-update` step 7.

## 5. Featured insights

Section heading: "Featured Insights" (the client's section name). Four cards, each with a category label, an article title and a Read More link, then one section CTA. Titles are placeholders until the client supplies articles. Build the cards from a data array so real articles can be dropped in.

```text
LEGAL UPDATE
LEGAL INSIGHT
CASE NOTE
PRACTICAL GUIDE
Read More
EXPLORE INTEGRITAS VU LEGAL INSIGHTS
```

| Placeholder | Where |
|---|---|
| `[Article title]` | each of the four cards |

| CTA | Destination |
|---|---|
| Read More | the article URL; until it exists, `/insights` |
| EXPLORE Integritas Vu Legal INSIGHTS | `/insights` |

## 6. People

Section heading: "Our People" (the client's section name). Photo of Mr. Vũ, name as H3, role line, two CTAs. No biography was provided; add none.

```text
NGUYỄN HÀ THANH VŨ
Founder | Managing Lawyer
VIEW PROFILE
MEET OUR PEOPLE
```

| CTA | Destination |
|---|---|
| VIEW PROFILE | `/people/nguyen-ha-thanh-vu` |
| MEET OUR PEOPLE | `/people` |

| Missing input | Handling |
|---|---|
| Photo of Mr. Vũ | reuse an existing repo image or neutral placeholder; report it |

## 7. Footer (columns + disclaimer + copyright)

```text
Navigation
About
Expertise
People
Insights
Experience
Careers
Contact
Key Expertise
Dispute Resolution
Arbitration
Enforcement
Corporate & Commercial
Mergers & Acquisitions
Foreign Investment
Real Estate & Construction
Employment
CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL
Legal
Terms of Use
Privacy Policy
Legal Disclaimer
Disclaimer
The content on the Integritas Vu Legal website is provided for general informational purposes only and does not constitute legal advice or solutions for any specific matter. Accessing the website or contacting Integritas Vu Legal does not automatically establish an attorney-client relationship.
© 2026 Integritas Vu Legal. All rights reserved.
```

The Contact column shows the entity name followed by three placeholders:

**Supplied by the Client, 2026-09** (no longer placeholders):

| Item | Value |
|---|---|
| Office address (EN) | 37/16 Tran Dinh Xu Street, Cau Ong Lanh Ward, Ho Chi Minh City |
| Office address (VN) | 37/16 Trần Đình Xu, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh |
| Telephone | 0938 170 130 |
| Email | contact@integritasvulegal.com |

The telephone and email render as `tel:` and `mailto:` links.

Footer links: see `ivl-sitemap-navigation` (Key Expertise link mapping; the "Experience" link is AGENTS.md open question 1). Terms of Use, Privacy Policy and Legal Disclaimer pages need client-supplied text; do not write it.

The Disclaimer appears on every page through the shared footer component.
