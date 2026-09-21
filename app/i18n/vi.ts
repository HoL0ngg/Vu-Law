import type { EnglishDictionary } from "./en";

/**
 * The prototype's expertise tabs, verbatim. The client asked to keep "the existing
 * 8 items"; their screenshot shows the `Tài chính` tab, so those eight are the ones
 * `vi.home.expertise.featuredItems` publishes. The prototype held four tabs of eight,
 * so the other 24 are preserved here rather than lost when the tabs were removed
 * (phase-1-homepage.md, section 4).
 *
 * Nothing renders from this const today. It is reference data only: not client-approved
 * Vietnamese copy, and not a translation of the English page.
 *
 * TODO(client): confirm how these four prototype categories map to the four approved
 * service areas (Dispute Resolution / Corporate & Commercial / Real Estate &
 * Construction / Private Clients) and supply English text. See AGENTS.md question 3.
 */
export const prototypeExpertiseCatalogue = [
  {
    tab: "Tranh tụng",
    title: "Tranh tụng & Giải quyết tranh chấp",
    items: [
      "Tranh chấp thương mại",
      "Trọng tài thương mại",
      "Thu hồi tài sản",
      "Tranh chấp đầu tư & FDI",
      "Tranh chấp xây dựng",
      "Thi hành bản án",
      "Tranh chấp lao động",
      "Sở hữu trí tuệ",
    ],
  },
  {
    tab: "Luật dân sự",
    title: "Luật dân sự",
    items: [
      "Hợp đồng dân sự",
      "Tranh chấp tài sản",
      "Thừa kế & di chúc",
      "Hôn nhân & gia đình",
      "Bất động sản",
      "Bồi thường thiệt hại",
      "Đại diện ngoài tố tụng",
      "Hòa giải tranh chấp",
    ],
  },
  {
    tab: "Doanh nghiệp",
    title: "Dịch vụ doanh nghiệp",
    items: [
      "Thành lập doanh nghiệp",
      "Quản trị nội bộ",
      "Mua bán & sáp nhập",
      "Đầu tư nước ngoài",
      "Hợp đồng thương mại",
      "Lao động & nhân sự",
      "Tuân thủ pháp luật",
      "Tái cấu trúc doanh nghiệp",
    ],
  },
  {
    tab: "Tài chính",
    title: "Tài chính & Đầu tư",
    items: [
      "Tài chính doanh nghiệp",
      "Giao dịch bảo đảm",
      "Thẩm định pháp lý",
      "Cấu trúc đầu tư",
      "Quản trị rủi ro",
      "Thu hồi công nợ",
      "Tư vấn thuế",
      "Ngân hàng & tín dụng",
    ],
  },
] as const;

/** The tab the client's screenshot shows; its eight items are the ones published. */
const financeTab = prototypeExpertiseCatalogue[3];

type Scaffold<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Scaffold<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]?: Scaffold<T[Key]> }
      : T;

export const vi = {
  locale: "vi",
  // TODO(client): Vietnamese metadata, brand, navigation and page labels are pending.
  home: {
    // TODO(client): Vietnamese Homepage copy is pending.
    introduction: {
      cta: "VỀ INTEGRITAS VŨ LEGAL",
    },
    expertise: {
      // The eight items the client asked to keep: the prototype's `Tài chính` tab,
      // taken from the catalogue above so the published list cannot drift from the
      // preserved one. TODO(client): English text pending (AGENTS.md question 3).
      featuredItems: financeTab.items,
    },
    people: {
      name: "Nguyễn Hà Thanh Vũ",
    },
  },
  // TODO(client): Vietnamese About Us copy is pending.
  footer: {
    entityName: "CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL",
  },
} as const satisfies Scaffold<EnglishDictionary>;
