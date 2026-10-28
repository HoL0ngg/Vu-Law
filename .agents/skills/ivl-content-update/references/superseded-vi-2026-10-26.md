# Superseded Vietnamese copy (parked 2026-10-26)

On 26-10 the Client rewrote the **English** Home and About Us copy and said the Vietnamese would follow in another file. Their earlier approved Vietnamese for those blocks no longer matches the English in meaning or in shape (lists of a different length cannot be overlaid by index), so it was removed from `app/i18n/vi.ts`; those blocks show the new English on `/vi` until the new Vietnamese arrives. It is kept here, unchanged, so nothing the Client approved is lost (it is also in git history, commit `b0be694`).

Not verbatim-checked by `check_copy.py`: this file has no `text` fences on purpose.

## Home - introduction

```ts
    introduction: {
      titleLines: [
        "Pháp luật không chỉ là khuôn khổ.",
        "Đó là nền tảng cho những quyết định đúng.",
      ],
      paragraphs: [
        "Tại Integritas Vũ Legal, chúng tôi tin rằng giá trị của tư vấn pháp lý không chỉ nằm ở việc xác định pháp luật quy định như thế nào.",
        "Integritas Vũ Legal được xây dựng theo mô hình một công ty luật tập trung vào chuyên môn, nơi mỗi vấn đề được tiếp cận bằng sự độc lập trong nhận định, chiều sâu trong phân tích và tư duy hướng đến giải pháp.",
      ],
      cta: "VỀ INTEGRITAS VŨ LEGAL",
    },
```

## Home - expertise

```ts
    expertise: {
      heading: "Chuyên môn",
      categories: [
        "Giải quyết tranh chấp",
        "Doanh nghiệp & Thương mại",
        "Bất động sản & Xây dựng",
        "Khách hàng cá nhân",
      ],
      // The eight items the Client asked to keep: the prototype's `Tài chính` tab,
      // taken from the catalogue above so the published list cannot drift from the
      // preserved one.
      featuredItems: financeTab.items,
    },
```

## About Us (whole block, as it stood)

```ts
  about: {
    title: "Về chúng tôi",
    opening: [
      "Integritas Vũ Legal là công ty luật tại Việt Nam, cung cấp dịch vụ tư vấn và đại diện pháp lý cho doanh nghiệp, nhà đầu tư và Khách hàng cá nhân.",
      "Chúng tôi tập trung vào giải quyết tranh chấp, doanh nghiệp và thương mại, đầu tư, M&A, bất động sản và xây dựng, cùng các vấn đề pháp lý có tính chất phức tạp hoặc ảnh hưởng đáng kể đến quyền và lợi ích của Khách hàng.",
      "Integritas Vũ Legal tiếp cận mỗi vụ việc từ mục tiêu thực tế của Khách hàng. Chúng tôi xác định vấn đề pháp lý, đánh giá rủi ro, cân nhắc các phương án và xây dựng chiến lược phù hợp với từng hoàn cảnh cụ thể.",
    ],
    firm: {
      // Supplied by the Client in the 15-10 feedback.
      heading: "Giới thiệu",
      // The closing statement of this section, as the Client wrote it on 15-10.
      consistentLabel: "Chúng tôi luôn nhất quán theo phương thức tiếp cận:",
      consistentStatement: "Thấu hiểu vấn đề. Xác định mục tiêu. Xây dựng chiến lược. Thực thi chính xác.",
      paragraphs: [
        "Integritas Vũ Legal được xây dựng theo mô hình công ty luật chuyên nghiệp, với trọng tâm là chất lượng chuyên môn, sự tham gia trực tiếp của luật sư và khả năng phản hồi linh hoạt.",
        "Chúng tôi không tiếp cận một vấn đề pháp lý một cách tách biệt. Mỗi tư vấn đều được đặt trong bối cảnh cụ thể của Khách hàng — từ mục tiêu kinh doanh, quyền lợi cần bảo vệ đến những rủi ro và hệ quả có thể phát sinh.",
        "Trong giao dịch, chúng tôi hướng đến việc nhận diện và kiểm soát rủi ro trước khi chúng trở thành tranh chấp.",
        "Trong tranh chấp, chúng tôi tập trung vào việc xác định vị thế của Khách hàng, xây dựng chiến lược và lựa chọn phương thức giải quyết phù hợp.",
      ],
    },
    philosophy: {
      // Supplied by the Client in the 15-10 feedback.
      heading: "Triết lý làm việc",
      // An en dash in place of the hyphen: see the matching comment in globals.css.
      title: "Chính trực – Chiến lược – Chính xác – Kết quả",
      items: [
        {
          term: "Chính trực",
          descriptor: "Chính trực trong nguyên tắc",
          body: "“Integritas” thể hiện nền tảng trong cách chúng tôi hành nghề: độc lập trong nhận định, trung thực trong tư vấn và nhất quán trong việc bảo vệ lợi ích hợp pháp của Khách hàng.",
        },
        {
          term: "Chiến lược",
          descriptor: "Chiến lược trong cách tiếp cận",
          body: "Pháp luật cung cấp khuôn khổ. Còn đội ngũ tại Integritas Vũ Legal xác định cách vận dụng khuôn khổ đó để phục vụ mục tiêu của Khách hàng.",
        },
        {
          term: "Chính xác",
          descriptor: "Chính xác trong thực thi",
          body: "Integritas Vũ Legal đề cao sự chính xác trong nghiên cứu, chứng cứ, lập luận, soạn thảo và triển khai công việc.",
        },
        {
          term: "Kết quả",
          descriptor: "Tập trung vào kết quả",
          body: "Chúng tôi hướng đến những kết quả có giá trị, khả thi và phù hợp với lợi ích của Khách hàng.",
        },
      ],
    },
    approach: {
      heading: "Cách chúng tôi tiếp cận vụ việc",
      title: "Từ vấn đề pháp lý đến chiến lược hành động.",
      paragraphs: [
        "Mỗi vụ việc có hoàn cảnh, rủi ro và mục tiêu riêng. Vì vậy, Integritas Vũ Legal không áp dụng một giải pháp giống nhau cho mọi Khách hàng.",
        "Cách chúng tôi làm việc được xây dựng trên bốn bước:",
      ],
      steps: [
        { name: "Hiểu vấn đề", body: "Xác định sự kiện, bối cảnh, quyền lợi và mục tiêu thực tế của Khách hàng." },
        { name: "Đánh giá vị thế", body: "Phân tích cơ sở pháp lý, chứng cứ, rủi ro và các phương án có thể lựa chọn." },
        { name: "Xây dựng chiến lược", body: "Xác định phương án phù hợp dựa trên mục tiêu, khả năng thực thi, chi phí, thời gian và các hệ quả có thể phát sinh." },
        { name: "Thực thi chính xác", body: "Triển khai chiến lược một cách có hệ thống, chủ động điều chỉnh khi hoàn cảnh thay đổi và duy trì trao đổi rõ ràng với khách hàng trong suốt quá trình." },
      ],
    },
    values: {
      heading: "Nguyên tắc chúng tôi theo đuổi",
      // TODO(client): Vietnamese intro line for the values section is not in the Client's document.
      items: [
        { name: "ĐỘC LẬP", body: "Nhận định chuyên môn của chúng tôi dựa trên pháp luật, sự kiện và lợi ích hợp pháp của khách hàng." },
        { name: "CHÍNH TRỰC", body: "Chúng tôi đề cao sự trung thực, minh bạch và nhất quán trong mọi quan hệ nghề nghiệp." },
        { name: "BẢO MẬT", body: "Thông tin của khách hàng được xử lý với sự thận trọng và tuân thủ nghiêm ngặt nghĩa vụ bảo mật nghề nghiệp." },
        { name: "CHUẨN MỰC", body: "Mỗi vấn đề được xử lý với sự cẩn trọng, chính xác và trách nhiệm nghề nghiệp." },
        { name: "CAM KẾT", body: "Chúng tôi chịu trách nhiệm đối với công việc được giao và duy trì sự đồng hành cần thiết trong suốt quá trình xử lý vụ việc." },
      ],
    },
  },
```
