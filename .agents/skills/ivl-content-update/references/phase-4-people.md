# Phase 4 - People (Client-approved copy)

> **Client revision (Feedbacks, 2026-09):** wherever the company name appeared as
> "IVL" it now reads in full - "Integritas Vu Legal" in English, "Integritas Vũ Legal"
> in Vietnamese. Strings below carry the revised form.

Source: `Feedbacks/IVL _ WEBSITE content.docx`, section "PHASE 4: PEOPLE".

**Client revision (Feedbacks, 2026-09):** `/people` shows only each lawyer's portrait,
name and role. The biography opens on its own page when the visitor clicks the card:
`/people/nguyen-ha-thanh-vu` and `/people/truc-nguyen`. The second slug is not in the
Client's sitemap (Dr Truc Nguyen is new); it follows the same lowercase, ASCII,
hyphenated convention.

Because of that split, `check_copy.py` should be run against `/people` for sections 1-2
and against each profile page for the biography in section 3.

Rule for this file: lines inside `text` fences must appear verbatim. Arrows (`→`) are omitted
from the strings; the site draws its own.

Capitalisation note: as in Phase 3, the word "Client" is capitalised at the user's direction.
The Client's document writes "client's" and "clients" in lower case in the intro.

## 1. Page intro

```text
At Integritas Vu Legal, we believe the quality of legal advice depends not only on knowledge of the law, but also on the judgment, strategic thinking and professional responsibility of the lawyers providing it.
Each matter is approached with an understanding of the Client's objectives, independence of judgment and careful consideration at every stage.
Our lawyer work directly with Clients, communicate clearly and remain accountable throughout the course of each matter.
```

"Our lawyer work directly with Clients" is the Client's wording (singular "lawyer" with plural
verb). Kept verbatim; reported as a suspected typo.

The Client's document ends this intro with `CTA: MEET OUR PEOPLE →`. On `/people` that CTA
would link to the page the visitor is already on, which `ivl-sitemap-navigation` treats as a
dead end, so it is **not** rendered here and is deliberately outside the fence above. The same
string is already rendered on the Homepage People section and is verified by
`phase-1-homepage.md`. Open question for the Client: was this intro block meant for the
Homepage, or should the People page carry a different CTA?

## 2. Nguyễn Hà Thanh Vũ

```text
NGUYEN HA THANH VU
Founder | Managing Lawyer
```

The Client's document writes this name **without diacritics** in Phase 4 and Contact, but
**with** diacritics on the Homepage (`NGUYỄN HÀ THANH VŨ`). AGENTS.md rule 8 says names are
intentional as supplied and must not be normalised in either direction, so each page keeps the
form its own section uses. Flagged for the Client.

| Missing input | Handling |
|---|---|
| Biography | The Client's note reads: "Phần mô tả anh Vũ chưa gửi cho c nên tạm thời trống phần mô tả của a Vũ nha e" - the biography has not been supplied. Render no biography. `TODO(client)` |
| Photograph | Supplied 2026-09: `public/images/nguyen-ha-thanh-vu.png`. |

His card links to `/people/nguyen-ha-thanh-vu`, which carries the name and role but no
biography, since none was supplied.

## 3. Dr. Truc Nguyen

Name and role appear on `/people`; the biography is on `/people/truc-nguyen`.

```text
DR. TRUC NGUYEN
Co Founder | Ethics, Organisation, Management & Leadership Advisor
Dr Truc Nguyen is an ethics, organisation, management and leadership advisor with extensive academic and professional experience across Vietnam and the UK. She has held academic positions at universities in both countries. She holds a PhD in Management from the University of Kent, an MBA from RMIT University Vietnam, and a Bachelor's degree in Business Management from Finland.
Her expertise covers business ethics, organisational management, leadership, institutional logics and cross-cultural management. Through her research, she has worked extensively with managerial leaders in multinational corporations (MNCs), gaining deep insights into how business leaders think, make decisions and navigate ethical, organisational and legal considerations in Vietnam.
For Clients, Truc has advised organisations on complex organisational and business matters, including internal employment and workplace issues, workforce restructuring and layoff decisions, overtime practices, employee treatment, organisational compliance and environmental sustainability. Through this work, she has helped organisations address the ethical dimensions of business decisions, balancing business objectives, legal requirements, employee wellbeing, fairness, stakeholder interests and organisational responsibility, while taking into account the cultural and organisational context of Vietnam.
Her approach is grounded in Tâm—conscience, moral awareness and responsibility—while respecting legal requirements and international standards. Within the firm, Truc plays a key role in building an ethical organisational culture and climate, supporting responsible management and people-focused practices. These principles also shape the firm's approach to Clients: understanding each Client's circumstances, respecting their individual needs and values, and providing professional advice grounded in integrity, empathy and respect.
```

Notes on this biography, all kept verbatim:

- "Co Founder" has no hyphen in the Client's text.
- "Dr Truc Nguyen" in the body has no full stop after "Dr", while the heading has "DR.".
- `Tâm` carries its diacritic and is joined by em dashes without spaces, as supplied.
- Photograph supplied 2026-09: `public/images/truc-nguyen.png`.
