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
  // TODO(client): Vietnamese metadata, brand and page-title copy is still pending.
  navigation: {
    label: "Điều hướng",
    // Approved by the site owner, not taken from the Client's document - their Vietnamese
    // navigation list has no entry for Home. Worth confirming with the Client at sign-off.
    home: "Trang chủ",
    about: "Về chúng tôi",
    expertise: "Chuyên môn",
    people: "Đội ngũ",
    insights: "Góc nhìn",
    careers: "Cơ hội nghề nghiệp",
    contact: "Liên hệ",
  },
  home: {
    hero: {
      eyebrow: "Integritas Vũ Legal",
      title: "Tư vấn có chiến lược. Kiên quyết bảo vệ quyền lợi Khách hàng",
      paragraphs: [
        "Integritas Vũ Legal là công ty luật tại Việt Nam cung cấp tư vấn chiến lược và đại diện pháp lý cho doanh nghiệp, nhà đầu tư và Khách hàng cá nhân trong các giao dịch, tranh chấp và những vấn đề pháp lý quan trọng.",
        "Chúng tôi kết hợp tư duy pháp lý, góc nhìn chiến lược và khả năng thực thi để giúp Khách hàng hiểu rõ vị thế của mình, kiểm soát rủi ro và đưa ra những quyết định có cơ sở.",
      ],
      expertiseCta: "KHÁM PHÁ CHUYÊN MÔN",
      peopleCta: "ĐỘI NGŨ LUẬT SƯ",
    },
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
    approach: {
      eyebrow: "Cách tiếp cận của Integritas Vũ Legal",
      title: "Chính trực — Chiến lược — Chính xác — Kết quả",
      statement: "Chính trực trong nguyên tắc. Nhìn xa hơn câu hỏi pháp lý trước mắt. Chính xác trong thực thi. Hướng đến kết quả cao.",
      cta: "KHÁM PHÁ CÁCH INTEGRITAS VŨ LEGAL LÀM VIỆC",
    },
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
    insights: {
      heading: "Góc nhìn pháp lý",
      cards: [
        // TODO(client): Supply the article title and URL.
        { category: "CẬP NHẬT QUY ĐỊNH PHÁP LUẬT", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "GÓC NHÌN PHÁP LÝ", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "BẢN ÁN/ÁN LỆ", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "HƯỚNG DẪN DOANH NGHIỆP", title: "[Article title]", linkLabel: "Đọc thêm" },
      ],
      cta: "KHÁM PHÁ GÓC NHÌN CỦA INTEGRITAS VŨ LEGAL",
    },
    people: {
      heading: "Đội ngũ của chúng tôi",
      name: "NGUYỄN HÀ THANH VŨ",
      role: "Người sáng lập | Luật sư điều hành",
      profileCta: "XEM HỒ SƠ",
      peopleCta: "GẶP GỠ ĐỘI NGŨ INTEGRITAS VŨ LEGAL",
      // TODO(client): Supply the photograph of Mr. Vũ.
      portraitAlt: "Ảnh chân dung",
    },
  },
  about: {
    title: "Về chúng tôi",
    opening: [
      "Integritas Vũ Legal là công ty luật tại Việt Nam, cung cấp dịch vụ tư vấn và đại diện pháp lý cho doanh nghiệp, nhà đầu tư và Khách hàng cá nhân.",
      "Chúng tôi tập trung vào giải quyết tranh chấp, doanh nghiệp và thương mại, đầu tư, M&A, bất động sản và xây dựng, cùng các vấn đề pháp lý có tính chất phức tạp hoặc ảnh hưởng đáng kể đến quyền và lợi ích của Khách hàng.",
      "Integritas Vũ Legal tiếp cận mỗi vụ việc từ mục tiêu thực tế của Khách hàng. Chúng tôi xác định vấn đề pháp lý, đánh giá rủi ro, cân nhắc các phương án và xây dựng chiến lược phù hợp với từng hoàn cảnh cụ thể.",
    ],
    firm: {
      // TODO(client): Vietnamese heading for "Our firm" is not in the Client's document.
      paragraphs: [
        "Integritas Vũ Legal được xây dựng theo mô hình công ty luật boutique, với trọng tâm là chất lượng chuyên môn, sự tham gia trực tiếp của luật sư và khả năng phản hồi linh hoạt.",
        "Chúng tôi không tiếp cận một vấn đề pháp lý một cách tách biệt. Mỗi tư vấn đều được đặt trong bối cảnh cụ thể của Khách hàng — từ mục tiêu kinh doanh, quyền lợi cần bảo vệ đến những rủi ro và hệ quả có thể phát sinh.",
        "Trong giao dịch, chúng tôi hướng đến việc nhận diện và kiểm soát rủi ro trước khi chúng trở thành tranh chấp.",
        "Trong tranh chấp, chúng tôi tập trung vào việc xác định vị thế của Khách hàng, xây dựng chiến lược và lựa chọn phương thức giải quyết phù hợp.",
      ],
    },
    philosophy: {
      // TODO(client): Vietnamese heading for "Our Philosophy" is not in the Client's document.
      title: "Chính trực - Chiến lược - Chính xác - Kết quả",
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
  expertisePage: {
    intro: "Integritas Vũ Legal tư vấn và đại diện cho doanh nghiệp, nhà đầu tư và Khách hàng cá nhân trong các giao dịch, tranh chấp và những vấn đề pháp lý quan trọng. Mỗi vụ việc được tiếp cận trên cơ sở mục tiêu của Khách hàng, các rủi ro liên quan và tính khả thi của từng phương án.",
    areasTitle: "Lĩnh vực hành nghề chính của chúng tôi:",
    lawyersCta: "TRAO ĐỔI VỚI LUẬT SƯ INTEGRITAS VŨ LEGAL",
    servicesTitle: "PHẠM VI DỊCH VỤ",
    areaCta: "TRAO ĐỔI VỀ VẤN ĐỀ CỦA BẠN",
    areas: [
      {
        id: "dispute-resolution",
        name: "Giải quyết tranh chấp",
        paragraphs: [
          "Integritas Vũ Legal tư vấn và đại diện cho khách hàng trong các tranh chấp dân sự, kinh doanh và thương mại tại Tòa án, cũng như trong quá trình thương lượng và giải quyết tranh chấp ngoài tố tụng.",
          "Chúng tôi tập trung vào việc xác định vị thế pháp lý, kiểm soát rủi ro và xây dựng chiến lược phù hợp với mục tiêu thực tế của khách hàng.",
        ],
        services: [
          "Tranh chấp hợp đồng và thương mại",
          "Tranh chấp doanh nghiệp và cổ đông/thành viên",
          "Tranh chấp đầu tư và giao dịch",
          "Tranh chấp bất động sản và xây dựng",
          "Tranh chấp dân sự và tài sản",
          "Biện pháp khẩn cấp tạm thời",
          "Thương lượng và hòa giải",
          "Đại diện tại Tòa án",
          "Thi hành bản án và thu hồi tài sản",
        ],
      },
      {
        id: "arbitration",
        name: "Trọng tài",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho khách hàng trong các vụ việc trọng tài thương mại trong nước và quốc tế, từ giai đoạn trước tranh chấp đến công nhận và thi hành phán quyết.",
        ],
        services: [
          "Tư vấn điều khoản trọng tài",
          "Đánh giá tranh chấp trước tố tụng",
          "Tranh chấp hợp đồng và doanh nghiệp",
          "Tranh chấp xây dựng và đầu tư",
          "Biện pháp khẩn cấp tạm thời",
        ],
      },
      {
        id: "enforcement-asset-recovery",
        name: "Thi hành & Thu hồi tài sản",
        paragraphs: [
          "Việc có được bản án hoặc phán quyết thuận lợi không phải lúc nào cũng là điểm kết thúc của tranh chấp. Integritas Vũ Legal hỗ trợ khách hàng xây dựng và triển khai chiến lược thi hành, từ đánh giá khả năng thu hồi đến thực hiện các thủ tục pháp lý cần thiết.",
        ],
        services: [
          "Thi hành bản án, quyết định của Tòa án",
          "Đánh giá khả năng thi hành và thu hồi",
          "Xác định tài sản phục vụ thi hành",
          "Thi hành đối với cổ phần, phần vốn góp và tài sản doanh nghiệp",
          "Xử lý trở ngại trong quá trình thi hành",
          "Thu hồi nợ và tài sản",
        ],
      },
      {
        id: "corporate-commercial",
        name: "Doanh nghiệp & Thương mại",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho doanh nghiệp, chủ sở hữu và nhà đầu tư trong suốt quá trình hoạt động, từ thành lập và quản trị đến giao dịch thương mại, tái cấu trúc và xử lý các vấn đề phát sinh giữa các bên liên quan.",
          "Mục tiêu của chúng tôi là giúp khách hàng nhận diện rủi ro sớm và xây dựng cấu trúc pháp lý phù hợp trước khi vấn đề trở thành tranh chấp.",
        ],
        services: [
          "Thành lập và tổ chức doanh nghiệp",
          "Quản trị doanh nghiệp",
          "Quyền và nghĩa vụ của thành viên/cổ đông",
          "Hợp đồng thương mại",
          "Thỏa thuận cổ đông/thành viên",
          "Giao dịch với bên liên quan",
          "Thay đổi và tái cấu trúc doanh nghiệp",
          "Tư vấn pháp lý thường xuyên",
          "Quản trị rủi ro pháp lý",
        ],
      },
      {
        id: "m-and-a-investment",
        name: "M&A & Đầu tư",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho doanh nghiệp, nhà đầu tư và chủ sở hữu trong các giao dịch mua bán, sáp nhập và đầu tư tại Việt Nam, từ giai đoạn chuẩn bị và thẩm định đến đàm phán, ký kết và hoàn tất giao dịch.",
        ],
        services: [
          "Cấu trúc giao dịch",
          "Thẩm định pháp lý",
          "Mua bán cổ phần/phần vốn góp",
          "Chuyển nhượng tài sản và dự án",
          "Soạn thảo và đàm phán tài liệu giao dịch",
          "Thỏa thuận cổ đông",
          "Điều kiện tiên quyết và hoàn tất giao dịch",
          "Chấp thuận và thủ tục đầu tư",
          "Đầu tư nước ngoài tại Việt Nam",
          "Các vấn đề pháp lý sau giao dịch",
        ],
      },
      {
        id: "real-estate-construction",
        name: "Bất động sản & Xây dựng",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho chủ sở hữu, nhà đầu tư, doanh nghiệp và các bên liên quan trong giao dịch, phát triển dự án và giải quyết tranh chấp bất động sản, xây dựng.",
        ],
        services: [
          "Thẩm định pháp lý bất động sản và dự án",
          "Giao dịch bất động sản",
          "Chuyển nhượng dự án",
          "Hợp đồng xây dựng",
          "Hợp đồng mua bán, thuê và đặt cọc",
          "Các vấn đề về quyền sử dụng đất và tài sản",
          "Tranh chấp bất động sản",
          "Tranh chấp xây dựng",
          "Khiếu nại về thanh toán, chậm tiến độ và thay đổi công việc",
        ],
      },
      {
        id: "employment",
        name: "Lao động",
        paragraphs: [
          "Các quyết định về nhân sự có thể tạo ra hệ quả pháp lý đáng kể nếu không được chuẩn bị và thực hiện đúng quy trình.",
          "Integritas Vũ Legal tư vấn cho doanh nghiệp về các vấn đề phát sinh trong quan hệ lao động, từ thiết lập hợp đồng và chính sách nội bộ đến xử lý kỷ luật, chấm dứt quan hệ lao động và tranh chấp.",
        ],
        services: [
          "Hợp đồng lao động",
          "Nội quy và chính sách lao động",
          "Tiền lương, quyền lợi và nghĩa vụ lao động",
          "Kỷ luật lao động",
          "Chấm dứt hợp đồng lao động",
          "Tái cơ cấu và cắt giảm lao động",
          "Người lao động quản lý và nhân sự cấp cao",
          "Bảo mật và nghĩa vụ sau khi nghỉ việc",
          "Tranh chấp lao động",
          "Đại diện trong tố tụng lao động",
        ],
      },
      {
        id: "private-clients",
        name: "Khách hàng cá nhân",
        paragraphs: [
          "Integritas Vũ Legal tư vấn và đại diện cho khách hàng cá nhân trong các vấn đề dân sự và tài sản có tính chất phức tạp, với cách tiếp cận thận trọng, bảo mật và hướng đến giải pháp.",
        ],
        services: [
          "Tranh chấp tài sản",
          "Quyền sở hữu và quyền sử dụng tài sản",
          "Thừa kế và di sản",
          "Phân chia tài sản",
          "Tài sản trong quan hệ hôn nhân",
          "Nghĩa vụ và khoản nợ liên quan đến tài sản",
          "Tranh chấp hợp đồng dân sự",
          "Thương lượng và hòa giải",
          "Đại diện tại Tòa án",
        ],
      },
    ],
    closing: "Mỗi vụ việc đều có những yếu tố pháp lý, thương mại và thực tiễn riêng. Integritas Vũ Legal hỗ trợ khách hàng xác định vấn đề cốt lõi, đánh giá các lựa chọn và xây dựng phương án phù hợp với mục tiêu cần đạt được.",
    closingCta: "TRAO ĐỔI VỚI LUẬT SƯ",
    insightsCta: "GÓC NHÌN PHÁP LÝ",
  },
  // "Góc nhìn" and "Đọc thêm" are the Client's own words, reused from their navigation
  // and their Homepage insight cards. The article titles stay as placeholders.
  insightsPage: {
    heading: "Góc nhìn",
    readMore: "Đọc thêm",
  },
  // Page labels, taken word for word from the Client's own Vietnamese navigation and
  // footer lists in the source document. Nothing here is translated by us.
  pages: {
    expertise: "Chuyên môn",
    people: "Đội ngũ",
    insights: "Góc nhìn",
    careers: "Cơ hội nghề nghiệp",
    contact: "Liên hệ",
    // TODO(client): the Client's Vietnamese footer has no "Experience" entry
    // (AGENTS.md question 1), so this label falls back to English.
    terms: "Điều khoản sử dụng",
    privacy: "Chính sách bảo mật",
    legalDisclaimer: "Miễn trừ trách nhiệm",
  },
  // TODO(client): Vietnamese copy for People, Contact, Careers and Insights pages is pending.
  footer: {
    navigationTitle: "Điều hướng",
    // TODO(client): deliberately omitted. The Client's Vietnamese footer lists six entries
    // (Về chúng tôi, Chuyên môn, Đội ngũ, Góc nhìn, Cơ hội nghề nghiệp, Liên hệ) while the
    // English list has seven - it has no entry for "Experience" (AGENTS.md question 1).
    // SiteFooter pairs a label with a route by index, so a six-item list would attach
    // "Liên hệ" to /careers. Supplying the missing label, or dropping Experience from both,
    // is a Client decision; until then this key stays absent rather than mislabelling links.
    expertiseTitle: "Lĩnh vực chuyên môn",
    expertiseLinks: [
      "Giải quyết tranh chấp",
      "Trọng tài",
      "Thi hành án",
      "Doanh nghiệp & Thương mại",
      "Mua bán & Sáp nhập (M&A)",
      "Đầu tư nước ngoài",
      "Bất động sản & Xây dựng",
      "Lao động",
    ],
    entityName: "CÔNG TY LUẬT TNHH INTEGRITAS VŨ LEGAL",
    officeAddress: "37/16 Trần Đình Xu, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh",
    telephone: "0938 170 130",
    email: "contact@integritasvulegal.com",
    legalTitle: "Thông tin pháp lý",
    legalLinks: ["Điều khoản sử dụng", "Chính sách bảo mật", "Miễn trừ trách nhiệm"],
    disclaimerTitle: "Miễn trừ trách nhiệm",
    disclaimerBody: "Nội dung trên trang web của Integritas Vu Legal chỉ nhằm mục đích cung cấp thông tin chung và không cấu thành tư vấn pháp lý hay giải pháp cho bất kỳ vấn đề cụ thể nào. Việc truy cập trang web hoặc liên hệ với Integritas Vũ Legal không mặc nhiên xác lập mối quan hệ luật sư - Khách hàng.",
    copyright: "© 2026 Integritas Vu Legal. All rights reserved.",
  },
} as const satisfies Scaffold<EnglishDictionary>;
