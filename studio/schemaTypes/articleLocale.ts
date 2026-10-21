import { defineField, defineType } from "sanity";

/** One language's version of an article. Used twice on `article`: once for English, once for Vietnamese. */
export const articleLocale = defineType({
  name: "articleLocale",
  title: "Phiên bản theo ngôn ngữ",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề bài viết",
      type: "string",
      description: "Hiển thị nguyên văn, kể cả chữ in hoa.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Câu dẫn (phụ đề)",
      type: "text",
      rows: 2,
      description: "Một hai câu in nghiêng dưới tiêu đề. Cũng là đoạn tóm tắt trong danh sách bài.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Nội dung",
      type: "articleBody",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "seoTitle",
      title: "Tiêu đề hiển thị trên Google (không bắt buộc)",
      type: "string",
      description:
        "Tiêu đề ngắn hơn cho tab trình duyệt và kết quả Google, nên dưới 60 ký tự. Hiển thị đúng như bạn nhập. Để trống thì dùng tiêu đề bài viết kèm tên công ty.",
      validation: (rule) => rule.max(70).warning("Trên 70 ký tự thì Google thường cắt bớt."),
    }),
    defineField({
      name: "metaDescription",
      title: "Mô tả hiển thị trên Google (không bắt buộc)",
      type: "text",
      rows: 3,
      description: "Khoảng 120 đến 160 ký tự. Để trống thì dùng câu dẫn.",
      validation: (rule) =>
        rule
          .custom((value) =>
            !value || (value.length >= 120 && value.length <= 160)
              ? true
              : `Nên dài 120 đến 160 ký tự (hiện tại ${value.length}).`,
          )
          .warning(),
    }),
  ],
});
