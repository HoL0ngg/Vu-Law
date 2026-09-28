# Phase 6 - Insights (Client-approved copy)

> **Client revision (Feedbacks, 2026-09):** wherever the company name appeared as
> "IVL" it now reads in full - "Integritas Vu Legal" in English, "Integritas Vũ Legal"
> in Vietnamese. Strings below carry the revised form.

Source: `Feedbacks/IVL _ WEBSITE content.docx`, section "PHASE INSIGHTS".

Rule for this file: lines inside `text` fences must appear verbatim. Arrows (`→`) are omitted
from the strings; the site draws its own.

## 1. Insights

No articles exist yet, so the Client asked that the page carry this notice:

```text
Insights Coming Soon
Our Insights section is currently being developed. We will soon share legal updates, practical perspectives, and analysis on key developments relevant to businesses and individuals.
Please check back soon for our latest insights.
```

The four category cards are **hidden while every title is still `[Article title]`**, so
the notice stands alone; showing "Coming Soon" above four empty cards read as a
contradiction. They reappear by themselves as soon as a real title is added to the locale
file - `InsightsPageView` tests the titles rather than a separate switch, so nothing has
to be re-enabled by hand.

Because of that, the four category names and "Read More" are deliberately outside the
fence above: they are not on the page today, and `check_copy` would otherwise report them
missing. The Client's wording for them is kept here and in the locale files:

- `LEGAL UPDATE`, `LEGAL INSIGHT`, `CASE NOTE`, `PRACTICAL GUIDE`, `Read More`
- Vietnamese: `CẬP NHẬT QUY ĐỊNH PHÁP LUẬT`, `GÓC NHÌN PHÁP LÝ`, `BẢN ÁN/ÁN LỆ`,
  `HƯỚNG DẪN DOANH NGHIỆP`, `Đọc thêm`

| Placeholder | Where |
|---|---|
| `[Article title]` | each of the four cards, once they are shown |
