import type { EnglishDictionary } from "./en";

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
      // TODO(client): Confirm which prototype category these eight items belong to and supply their English text.
      featuredItems: [
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
    people: {
      name: "Nguyễn Hà Thanh Vũ",
    },
  },
  // TODO(client): Vietnamese About Us copy is pending.
  footer: {
    entityName: "CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL",
  },
} as const satisfies Scaffold<EnglishDictionary>;
