import { defineField, defineType } from "sanity";

/**
 * Keep the category values in step with `CATEGORY_KEYS` in the website's
 * `app/content/insights/sanity.ts`. Their order matches the four category cards on /insights.
 */
const categories = [
  { title: "Cập nhật quy định pháp luật (Legal Update)", value: "legal-update" },
  { title: "Nhận định pháp lý (Legal Insight)", value: "legal-insight" },
  { title: "Bản án / Án lệ (Case Note)", value: "case-note" },
  { title: "Hướng dẫn doanh nghiệp (Practical Guide)", value: "practical-guide" },
];

/** Lowercase ASCII with hyphens, Vietnamese diacritics removed: the same shape as every URL on the site. */
function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export const article = defineType({
  name: "article",
  title: "Bài viết Insights",
  type: "document",
  groups: [
    { name: "general", title: "Thông tin chung", default: true },
    { name: "en", title: "English" },
    { name: "vi", title: "Tiếng Việt" },
  ],
  fields: [
    defineField({
      name: "readyForReview",
      title: "Đã soạn xong, chờ quản trị viên duyệt",
      type: "boolean",
      group: "general",
      description: "Tích vào khi bài đã sẵn sàng. Bài chỉ lên web sau khi quản trị viên bấm Publish.",
      initialValue: false,
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn (slug)",
      type: "slug",
      group: "general",
      description:
        "Bài sẽ nằm tại /insights/<slug> (và /vi/insights/<slug>). Bấm Generate để tạo từ tiêu đề tiếng Anh. Không đổi sau khi đã đăng, vì link cũ sẽ hỏng.",
      options: { source: (doc) => (doc as { en?: { title?: string } }).en?.title ?? "", slugify, maxLength: 80 },
      validation: (rule) =>
        rule.required().custom((value) =>
          !value?.current || /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value.current)
            ? true
            : "Chỉ dùng chữ thường không dấu, số và dấu gạch ngang.",
        ),
    }),
    defineField({
      name: "category",
      title: "Chuyên mục",
      type: "string",
      group: "general",
      options: { list: categories, layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Ngày đăng",
      type: "date",
      group: "general",
      description: "Ngày hiển thị trên bài và dùng cho Google. Bài mới nhất nằm đầu danh sách.",
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Ngày cập nhật gần nhất (không bắt buộc)",
      type: "date",
      group: "general",
      description: "Chỉ điền khi sửa nội dung đáng kể sau khi đã đăng.",
    }),
    defineField({
      name: "coverImage",
      title: "Ảnh đại diện của bài (không bắt buộc)",
      type: "image",
      group: "general",
      description:
        "Hiện trên thẻ bài viết (trang chủ, trang Insights), đầu bài viết và khi chia sẻ lên mạng xã hội. Nên dùng ảnh ngang, tối thiểu 1200 x 630. Để trống thì thẻ bài dùng hình nền hình học mặc định và khi chia sẻ dùng logo công ty.",
      options: { hotspot: true },
    }),
    defineField({
      name: "en",
      title: "Bản tiếng Anh",
      type: "articleLocale",
      group: "en",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "vi",
      title: "Bản tiếng Việt",
      type: "articleLocale",
      group: "vi",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    { title: "Ngày đăng, mới nhất trước", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "vi.title", englishTitle: "en.title", date: "publishedAt", ready: "readyForReview" },
    prepare: ({ title, englishTitle, date, ready }) => ({
      title: title || englishTitle || "(chưa có tiêu đề)",
      subtitle: [date, ready ? "Chờ duyệt" : "Đang soạn"].filter(Boolean).join(" | "),
    }),
  },
});
