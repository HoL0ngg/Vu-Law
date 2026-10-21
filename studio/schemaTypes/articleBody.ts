import { defineArrayMember, defineType } from "sanity";

/**
 * The article body. It offers only what the website can render, so what an editor sees
 * in the Studio is what appears on the page: ordinary paragraphs, a section heading, an
 * italic "to be explored next" line, and the italic legal notice at the end.
 */
export const articleBody = defineType({
  name: "articleBody",
  title: "Nội dung bài viết",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Đoạn văn", value: "normal" },
        { title: "Tiêu đề mục", value: "h2" },
      ],
      lists: [],
      marks: { decorators: [], annotations: [] },
    }),
    defineArrayMember({
      name: "aside",
      title: "Gợi ý chủ đề tiếp theo (chữ nghiêng)",
      type: "object",
      fields: [{ name: "text", title: "Nội dung", type: "text", rows: 3, validation: (rule) => rule.required() }],
      preview: { select: { title: "text" }, prepare: ({ title }) => ({ title, subtitle: "Gợi ý chủ đề tiếp theo" }) },
    }),
    defineArrayMember({
      name: "note",
      title: "Ghi chú pháp lý / bản quyền (chữ nghiêng)",
      type: "object",
      fields: [{ name: "text", title: "Nội dung", type: "text", rows: 3, validation: (rule) => rule.required() }],
      preview: { select: { title: "text" }, prepare: ({ title }) => ({ title, subtitle: "Ghi chú pháp lý / bản quyền" }) },
    }),
  ],
});
