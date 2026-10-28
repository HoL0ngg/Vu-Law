# Phase 1 - Homepage (client-approved copy)

> **Client revision (feedbacks update 26-10-26.docx):** Hero, Introduction (now "OUR PERSPECTIVE"), Our Expertise, the Featured Insights introduction and the People introduction were rewritten, and Mr Vu is "NGUYEN HA THANH VU (VICTOR NGUYEN)" on this page only. The Vietnamese for these will follow in a separate Client file; the superseded Vietnamese is parked in `superseded-vi-2026-10-26.md`.

> **Client revision (feedbacks chỉnh sửa web 15-10.docx):** on the **English** footer the contact column is headed `INTEGRITAS VU LEGAL LLC` instead of the Vietnamese legal entity name. The Vietnamese footer keeps `CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL`.

> **Client revision (Website - feedback update 28-9-26.docx):** the introduction CTA is English, the office address gained "(GF)" and ", Vietnam", and the eight featured expertise items now render in English.

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
Integritas Vu Legal LLC (Integritas Vu Legal) is an independent boutique law firm in Vietnam, providing strategic legal advice and representation to businesses, investors, and private Clients.
With a strong focus on dispute resolution and a comprehensive approach to corporate and commercial matters and White-Collar Crimes, we deliver tailored legal solutions that address our Clients' priorities, anticipate risks, and protect their interests.
EXPLORE OUR EXPERTISE
MEET OUR LAWYERS
```

| CTA | Destination |
|---|---|
| EXPLORE OUR EXPERTISE | `/expertise` |
| MEET OUR LAWYERS | `/people` |

## 2. Introduction ("OUR PERSPECTIVE")

Rewritten by the Client on 26-10 (`feedbacks update 26-10-26.docx`): the section is named "OUR PERSPECTIVE" (shown as the small label above the headline), the headline is the first sentence pair split over two lines, then three paragraphs and a CTA. The previous copy ("Law is more than a framework...") is gone.

```text
OUR PERSPECTIVE
Beyond Legal Advice. Towards Strategic Solutions.
Effective legal counsel requires more than an understanding of the law. It demands sound judgment, commercial awareness and the ability to navigate complex legal challenges with clarity and precision.
At Integritas Vu Legal, we look beyond immediate legal questions to understand the broader implications of every decision. Whether advising on a transaction, managing legal exposure or resolving a dispute, we develop strategies tailored to each Client's circumstances and objectives.
Our commitment is straightforward: to provide independent advice, thoughtful solutions and dedicated representation at every critical stage.
DISCUSS OUR FIRM
```

| CTA | Destination |
|---|---|
| DISCUSS OUR FIRM | `/about` |

The Client gave the label but not the destination. It keeps the destination of the CTA it replaces (`/about`). **Confirm at sign-off**, or point it at `/contact`.

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

Rewritten by the Client on 26-10: heading, an introduction, seven practice areas that each open on the plus sign to show their description, and a CTA. It replaces the four category tiles and the eight Vietnamese-only items (which closes the old question about their English text). Destination of the CTA: `/expertise`. On `/vi` this section shows the English until the Client supplies the Vietnamese.

```text
Our Expertise
We advise and represent Clients across a range of contentious and non-contentious matters, combining rigorous legal analysis with a practical understanding of business and individual needs.
Dispute Resolution & Arbitration
Strategic representation in complex civil, corporate and commercial disputes, from negotiation and litigation to arbitration and enforcement.
Corporate & Commercial
Practical legal counsel on corporate governance, commercial transactions, contractual arrangements and business-related legal risks.
White-Collar Crimes
We combine legal analysis with a practical understanding of business operations and evidentiary issues to develop a clear strategy, protect our Clients’ legitimate interests and manage risks throughout each stage of the matter.
Mergers, Acquisitions & Investment
Tailored advice on investment structures, acquisitions, transactions and regulatory matters involving domestic and foreign investors.
Real Estate & Construction
Legal support for property transactions, construction projects, contractual arrangements and related disputes.
Employment
Strategic advice on employment relationships, workplace compliance, executive matters and labour disputes.
Private Clients
Discreet and considered legal representation in significant personal, civil, property and inheritance matters.
VIEW ALL PRACTICE AREAS
```

## 5. Featured insights

Section heading: "Featured Insights" (the client's section name). Four cards, each with a category label, an article title and a Read More link, then one section CTA. Titles are placeholders until the client supplies articles. Build the cards from a data array so real articles can be dropped in.

```text
Legal Perspectives. Practical Implications.
Explore our perspectives on legal developments, emerging risks and issues affecting businesses, investors and individuals in Vietnam.
Through our legal insights, we aim to make complex legal matters more accessible while offering practical considerations to support informed decision-making.
EXPLORE INTEGRITAS VU LEGAL INSIGHTS
```

**While no articles exist**, the four cards are replaced by the Client's own
"coming soon" wording from Phase 6, which is why the card strings sit outside the fence
above - `check_copy` would otherwise report them missing. The section heading already
names the section, so the "Insights Coming Soon" title is not repeated here; only the two
body paragraphs are shown:

```text
Our Insights section is currently being developed. We will soon share legal updates, practical perspectives, and analysis on key developments relevant to businesses and individuals.
Please check back soon for our latest insights.
```

**Update 2026-10-21:** with the first article published, the homepage section shows the latest
articles (up to four) and this notice appears only while none exists. `check_copy` reports these
two lines missing for as long as an article is live; that is expected.

The cards come back on their own as soon as a real title reaches the locale file -
`HomePageView` tests the titles rather than a separate switch. Their wording is kept in
the locale files and in `phase-6-insights.md`:

- `LEGAL UPDATE`, `LEGAL INSIGHT`, `CASE NOTE`, `PRACTICAL GUIDE`, `Read More`

| Placeholder | Where |
|---|---|
| `[Article title]` | each of the four cards, once they are shown |

| CTA | Destination |
|---|---|
| Read More | the article URL; until it exists, `/insights` |
| EXPLORE Integritas Vu Legal INSIGHTS | `/insights` |

## 6. People

Section heading: "Our People" (the client's section name). Photo of Mr. Vũ, name as H3, role line, two CTAs. No biography was provided; add none.

```text
Personal Commitment. Professional Judgment.
At Integritas Vu Legal, we believe that the quality of legal representation begins with the people entrusted with each matter.
Our boutique structure enables direct lawyer involvement, close Client communication and an approach shaped by the specific circumstances of every engagement.
We value the trust placed in us and approach each matter with independence, diligence and a clear sense of professional responsibility.
NGUYEN HA THANH VU (VICTOR NGUYEN)
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
INTEGRITAS VU LEGAL LLC
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
| Office address (EN) | 37/16 (GF) Tran Dinh Xu Street, Cau Ong Lanh Ward, Ho Chi Minh City, Vietnam |
| Office address (VN) | 37/16 Trần Đình Xu, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh |
| Telephone | 0938 170 130 |
| Email | contact@integritasvulegal.com |

The telephone and email render as `tel:` and `mailto:` links.

Footer links: see `ivl-sitemap-navigation` (Key Expertise link mapping; the "Experience" link is AGENTS.md open question 1). Terms of Use, Privacy Policy and Legal Disclaimer pages need client-supplied text; do not write it.

The Disclaimer appears on every page through the shared footer component.
