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
    home: "Trang Chủ",
    about: "Về Chúng Tôi",
    expertise: "Chuyên Môn",
    people: "Đội Ngũ",
    insights: "Nhận định",
    careers: "Cơ Hội Nghề Nghiệp",
    contact: "Liên Hệ",
  },
  // Homepage: every section in the Client's Vietnamese from the 12-11 content file
  // (`exports/IVL-website-VN_12.11.2026.docx`), replacing the English shown until then.
  home: {
    hero: {
      eyebrow: "Integritas Vũ Legal",
      title: "Tư Vấn Chiến Lược. Giải Pháp Vững Chắc",
      paragraphs: [
        "Công Ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal (Integritas Vũ Legal) là công ty luật tại Việt Nam, với thế mạnh chuyên môn trong lĩnh vực tranh tụng, giải quyết tranh chấp và tư vấn pháp lý chiến lược cho doanh nghiệp, nhà đầu tư.",
        "Với kinh nghiệm tranh tụng thực tiễn và sự am hiểu về hoạt động kinh doanh, Integritas Vũ Legal cung cấp dịch vụ pháp lý chuyên sâu trong các lĩnh vực tố tụng, trọng tài, doanh nghiệp, thương mại, Mua bán và Sáp nhập (M&A), cùng các vụ án hình sự. Integritas Vũ Legal chú trọng xây dựng các chiến lược và giải pháp pháp lý phù hợp với đặc thù từng vụ việc, hướng đến hiệu quả thực tiễn và bảo vệ quyền, lợi ích hợp pháp của Khách hàng.",
      ],
      expertiseCta: "CHUYÊN MÔN",
      peopleCta: "ĐỘI NGŨ LUẬT SƯ",
    },
    introduction: {
      eyebrow: "TRIẾT LÝ HÀNH NGHỀ",
      // "Tư Duy Chiến Lược. Nền Tảng Kinh Nghiệm Vững Chắc." on two lines, like the English.
      titleLines: [
        "Tư Duy Chiến Lược.",
        "Nền Tảng Kinh Nghiệm Vững Chắc.",
      ],
      paragraphs: [
        "Dịch vụ pháp lý không chỉ nằm ở sự am hiểu pháp luật, mà còn ở tư duy chiến lược, khả năng đánh giá và nhận định thấu đáo, sự nhạy bén trong kinh doanh và năng lực xử lý những vấn đề pháp lý phức tạp một cách chính xác, hiệu quả.",
        // The Client's sentence ends without a full stop; kept as supplied.
        "Tại Integritas Vũ Legal, chúng tôi không chỉ xem xét những vấn đề theo khía cạnh pháp lý mà còn đánh giá toàn diện các tác động và hệ quả có thể phát sinh từ mỗi quyết định. Integritas Vũ Legal chú trọng xây dựng chiến lược và giải pháp phù hợp với hoàn cảnh, nhu cầu và mục tiêu của từng Khách hàng trong tư vấn giao dịch, quản trị rủi ro pháp lý hay giải quyết tranh chấp",
        "Chúng tôi cam kết mang đến những ý kiến tư vấn độc lập, giải pháp pháp lý được xây dựng trên cơ sở đánh giá thấu đáo và sự đồng hành tận tâm trong từng giai đoạn quan trọng, nhằm bảo vệ quyền, lợi ích hợp pháp và hỗ trợ Khách hàng đạt được các mục tiêu đề ra.",
      ],
      cta: "TÌM HIỂU VỀ INTEGRITAS VŨ LEGAL",
    },
    approach: {
      eyebrow: "CÁCH TIẾP CẬN CỦA INTEGRITAS VŨ LEGAL",
      title: "Chính Trực — Chiến Lược — Chính Xác — Kết Quả",
      statement: "Chính trực trong hành nghề. Tư duy chiến lược trong từng quyết định. Cẩn trọng, chính xác trong từng hành động. Hướng đến những kết quả thiết thực và giá trị bền vững cho Khách hàng.",
      cta: "TÌM HIỂU VỀ INTEGRITAS VŨ LEGAL",
    },
    expertise: {
      heading: "Chuyên Môn",
      intro: "Integritas Vũ Legal cung cấp dịch vụ tư vấn và đại diện pháp lý cho Khách hàng trong giải quyết tranh chấp cũng như các vấn đề doanh nghiệp, thương mại và đầu tư, trên nền tảng kết hợp năng lực chuyên môn sâu rộng, kinh nghiệm thực tiễn và sự thấu hiểu nhu cầu, mục tiêu của từng Khách hàng.",
      areas: [
        {
          name: "Giải Quyết Tranh Chấp & Trọng Tài",
          paragraphs: ["Tư vấn chiến lược và đại diện Khách hàng giải quyết các tranh chấp dân sự, doanh nghiệp và thương mại phức tạp, xuyên suốt các giai đoạn thương lượng, tố tụng tại Tòa án, trọng tài và thi hành án."],
        },
        {
          name: "Doanh Nghiệp & Hoạt Động Kinh Doanh",
          paragraphs: ["Đồng hành cùng Khách hàng trong các vấn đề pháp lý về quản trị, giao kết và thực hiện hợp đồng, giao dịch thương mại và hoạt động kinh doanh, với trọng tâm là nhận diện, kiểm soát rủi ro và xây dựng giải pháp phù hợp với mục tiêu kinh doanh của Khách hàng."],
        },
        {
          name: "Tội Phạm Kinh Tế",
          paragraphs: ["Tư vấn, tham gia bào chữa và bảo vệ quyền, lợi ích hợp pháp của Khách hàng trong các vụ án hình sự về kinh tế, tham nhũng và chức vụ. Trên cơ sở đánh giá toàn diện hồ sơ, chứng cứ và bản chất pháp lý của vụ việc, Integritas Vũ Legal xây dựng chiến lược bảo vệ quyền lợi phù hợp, đồng hành cùng Khách hàng trong từng giai đoạn của vụ việc."],
        },
        {
          name: "Mua Bán, Sáp Nhập & Đầu Tư",
          paragraphs: ["Với đội ngũ luật sư am hiểu pháp luật đầu tư, doanh nghiệp và thực tiễn giao dịch tại Việt Nam, Integritas Vũ Legal cung cấp dịch vụ tư vấn pháp lý cho nhà đầu tư trong nước và nước ngoài, từ hoạch định cấu trúc đầu tư, thẩm định pháp lý, đàm phán và thực hiện giao dịch M&A đến các thủ tục pháp lý và yêu cầu tuân thủ liên quan, bảo đảm giải pháp tư vấn phù hợp với mục tiêu và định hướng kinh doanh của Khách hàng."],
        },
        {
          name: "Bất Động Sản & Xây Dựng",
          paragraphs: ["Tư vấn và hỗ trợ pháp lý đối với các giao dịch bất động sản, dự án xây dựng, hợp đồng và các tranh chấp phát sinh, chú trọng bảo vệ quyền lợi và kiểm soát rủi ro pháp lý cho Khách hàng."],
        },
        {
          name: "Lao Động",
          paragraphs: ["Tư vấn chiến lược về quan hệ lao động, tuân thủ pháp luật lao động, các vấn đề liên quan đến nhân sự quản lý, điều hành và giải quyết tranh chấp liên quan đến lao động."],
        },
        {
          name: "Khách Hàng Cá Nhân",
          paragraphs: ["Cung cấp dịch vụ tư vấn và đại diện pháp lý trong các vấn đề dân sự, tài sản, thừa kế và những vụ việc cá nhân phức tạp, với cam kết đề cao tính bảo mật, tôn trọng quyền riêng tư và đồng hành cùng Khách hàng trong từng giai đoạn giải quyết vụ việc, trên cơ sở thấu hiểu hoàn cảnh và bảo vệ quyền, lợi ích hợp pháp của mỗi Khách hàng."],
        },
      ],
      // The Client wrote "VIEW ALL PRACTICE AREAS/XEM THÊM CÁC CHUYÊN MÔN CỦA INTEGRITAS VŨ
      // LEGAL", i.e. the English label with its Vietnamese; the Vietnamese part is used here.
      cta: "XEM THÊM CÁC CHUYÊN MÔN CỦA INTEGRITAS VŨ LEGAL",
    },
    insights: {
      // The Homepage section is "Bình Luận Pháp Lý" in the 12-11 file; the menu and the
      // Insights page keep "Nhận định".
      heading: "Bình Luận Pháp Lý",
      intro: {
        title: "Góc Nhìn Pháp Lý. Giá Trị Thực Tiễn",
        paragraphs: [
          "Khám phá những bình luận và phân tích chuyên sâu của Integritas Vũ Legal về các thay đổi pháp luật, rủi ro pháp lý mới phát sinh và những vấn đề có tác động trực tiếp đến hoạt động của doanh nghiệp, nhà đầu tư và cá nhân tại Việt Nam.",
          "Thông qua các bài viết chuyên môn, chúng tôi hướng đến việc truyền tải thông tin đến Khách hàng nhằm hiểu rõ hơn và tiếp cận những vấn đề pháp lý phức tạp, đồng thời cung cấp các phân tích và nhận định thực tiễn, hỗ trợ Khách hàng có thêm cơ sở để đưa ra những quyết định phù hợp và sáng suốt.",
        ],
      },
      cards: [
        // TODO(client): Supply the article title and URL.
        { category: "CẬP NHẬT QUY ĐỊNH PHÁP LUẬT", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "NHẬN ĐỊNH PHÁP LÝ", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "BẢN ÁN/ÁN LỆ", title: "[Article title]", linkLabel: "Đọc thêm" },
        // TODO(client): Supply the article title and URL.
        { category: "HƯỚNG DẪN DOANH NGHIỆP", title: "[Article title]", linkLabel: "Đọc thêm" },
      ],
      cta: "KHÁM PHÁ NHẬN ĐỊNH & BÌNH LUẬN PHÁP LÝ CỦA INTEGRITAS VŨ LEGAL",
    },
    people: {
      heading: "Đội ngũ của chúng tôi",
      intro: {
        // No title line in the 12-11 file, as in English.
        title: "",
        paragraphs: [
          "Với hơn 10 năm kinh nghiệm trong lĩnh vực pháp lý và doanh nghiệp, đội ngũ Integritas Vũ Legal kết hợp năng lực tranh tụng thực tiễn với sự am hiểu về hoạt động kinh doanh, mang đến những giải pháp pháp lý phù hợp với nhu cầu và mục tiêu của Khách hàng.",
          "Mô hình hoạt động chuyên biệt cho phép các luật sư Integritas Vũ Legal trực tiếp tham gia, theo sát từng vụ việc và duy trì sự trao đổi chặt chẽ với Khách hàng trong suốt quá trình cung cấp dịch vụ pháp lý.",
          "Chúng tôi chú trọng tính độc lập trong tư vấn, sự thận trọng trong đánh giá và tinh thần trách nhiệm nghề nghiệp, và trân trọng sự tin tưởng của Khách hàng dành cho Integritas Vũ Legal.",
        ],
      },
      name: "NGUYỄN HÀ THANH VŨ",
      role: "Luật sư Điều hành",
      profileCta: "XEM HỒ SƠ",
      peopleCta: "ĐỘI NGŨ INTEGRITAS VŨ LEGAL",
      // TODO(client): Supply the photograph of Mr. Vũ.
      portraitAlt: "Ảnh chân dung",
    },
  },
  // About Us in the Client's Vietnamese from the 12-11 content file. It replaces the new
  // English shown here since 26-10 (references/superseded-vi-2026-10-26.md holds the older
  // Vietnamese).
  about: {
    title: "Về chúng tôi",
    // The 12-11 file deletes the English "About Integritas Vu Legal" line and gives no
    // Vietnamese for it, so no title is drawn above the opening.
    openingTitle: "",
    opening: [
      "Integritas Vũ Legal là công ty luật có trụ sở tại Thành phố Hồ Chí Minh, Việt Nam, cung cấp dịch vụ pháp lý cho doanh nghiệp, nhà đầu tư trong nước và quốc tế, cũng như Khách hàng cá nhân.",
      "Với tranh tụng và Tư vấn pháp lý là hai lĩnh vực hành nghề trọng tâm, Integritas Vũ Legal cung cấp dịch vụ pháp lý trong nhiều lĩnh vực, từ tư vấn, phòng ngừa và quản trị rủi ro đến giải quyết tranh chấp, đại diện và bảo vệ quyền, lợi ích hợp pháp của Khách hàng.",
      "Chúng tôi tin rằng giá trị của một luật sư không chỉ nằm ở kiến thức pháp luật và kinh nghiệm thực tiễn, mà còn ở tư duy độc lập, tầm nhìn chiến lược và khả năng thấu hiểu hoàn cảnh, mục tiêu cũng như lợi ích lâu dài của Khách hàng.",
      "Trên nền tảng đó, Integritas Vũ Legal tiếp cận theo góc nhìn chuyên sâu, thực tiễn và phù hợp với đặc thù từng vụ việc, kết hợp năng lực chuyên môn với tư duy chiến lược nhằm đưa ra những giải pháp pháp lý có cơ sở vững chắc, khả thi và hướng đến việc bảo vệ lợi ích lâu dài của Khách hàng.",
    ],
    firm: {
      // Supplied by the Client in the 15-10 feedback.
      heading: "Giới thiệu",
      lead: "Độc Lập Trong Tư Duy. Chính Trực Trong Hành Nghề.",
      paragraphs: [
        "Integritas Vũ Legal được thành lập trên một quan điểm hành nghề rằng việc cung cấp dịch vụ pháp lý hiệu quả đòi hỏi tư duy độc lập, sự tận tâm với nghề nghiệp và tinh thần chính trực xuyên suốt quá trình hành nghề.",
        "Chúng tôi hiểu rằng mỗi Khách hàng và mỗi vụ việc đều có những câu chuyện, hoàn cảnh, thách thức và ưu tiên riêng. Một ý kiến tư vấn pháp lý có giá trị không chỉ dừng lại ở việc xác định các quy định pháp luật áp dụng, mà còn đòi hỏi sự thấu hiểu toàn diện về bản chất sự việc, những rủi ro tiềm ẩn và hệ quả thực tiễn của từng phương án giải quyết.",
        "Vì vậy, Integritas Vũ Legal không tiếp cận các vấn đề pháp lý theo một khuôn mẫu có sẵn, mà xây dựng phương án phù hợp với đặc thù của từng vụ việc.",
        "Trong hoạt động tư vấn, chúng tôi nhận diện và dự liệu rủi ro pháp lý, củng cố các cơ chế bảo vệ quyền lợi theo quy định pháp luật và hợp đồng, đồng thời hỗ trợ Khách hàng đưa ra quyết định trên cơ sở đánh giá đầy đủ, rõ ràng và có căn cứ.",
        "Trong hoạt động giải quyết tranh chấp và tranh tụng, Integritas Vũ Legal tập trung đánh giá toàn diện các tình tiết, chứng cứ và cơ sở pháp lý nhằm xây dựng chiến lược phù hợp với tính chất, mức độ phức tạp của từng vụ việc, hướng đến việc bảo vệ quyền và lợi ích hợp pháp của Khách hàng.",
        "Với mô hình hành nghề chú trọng chất lượng, và tính chuyên nghiệp, Integritas Vũ Legal đề cao sự tham gia trực tiếp của luật sư, trách nhiệm nghề nghiệp và việc duy trì trao đổi chặt chẽ, kịp thời với Khách hàng trong suốt quá trình cung cấp dịch vụ.",
        "Chúng tôi hướng đến vai trò là người cố vấn pháp lý đáng tin cậy trước những quyết định quan trọng và là người bảo vệ tận tâm khi quyền và lợi ích hợp pháp của Khách hàng cần được bảo vệ.",
      ],
    },
    philosophy: {
      heading: "Triết Lý Hành Nghề",
      // An en dash in place of the hyphen: see the matching comment in globals.css.
      title: "Chính trực – Chiến lược – Chính xác – Kết quả",
      items: [
        {
          term: "CHÍNH TRỰC",
          descriptor: "Nhận định độc lập. Tư vấn trên nguyên tắc.",
          paragraphs: [
            "Chính trực là nền tảng trong hoạt động hành nghề của Integritas Vũ Legal. Chúng tôi đưa ra những đánh giá pháp lý thẳng thắn, thực hiện quyền nhận định chuyên môn một cách độc lập và đề cao các nguyên tắc trung thực, bảo mật và trách nhiệm nghề nghiệp.",
            "Chúng tôi tin rằng lợi ích của Khách hàng được bảo vệ tốt nhất khi các ý kiến tư vấn dựa trên sự khách quan, minh bạch và cơ sở pháp luật vững chắc, kể cả khi điều đó đòi hỏi phải nhìn nhận những vấn đề khó khăn hoặc những kỳ vọng chưa phù hợp với thực tế pháp lý.",
          ],
        },
        {
          term: "CHIẾN LƯỢC",
          descriptor: "Tư Duy Chiến Lược. Quyết Định Vững Chắc.",
          paragraphs: [
            "Các vấn đề pháp lý hiếm khi tồn tại độc lập mà thường gắn liền với những mối quan hệ kinh doanh, hệ quả tài chính, rủi ro uy tín và nhiều lợi ích cần được cân nhắc.",
            "Integritas Vũ Legal tiếp cận từng vụ việc với tư duy chiến lược, không chỉ xem xét các quy định pháp luật áp dụng mà còn đánh giá rủi ro, hệ quả thực tiễn và những tác động có thể phát sinh từ từng phương án đối với lợi ích tổng thể của Khách hàng.",
          ],
        },
        {
          term: "CHÍNH XÁC",
          descriptor: "Phân Tích Chặt Chẽ. Thực Hiện Cẩn Trọng.",
          paragraphs: [
            "Sự chính xác là yêu cầu cốt lõi trong hoạt động hành nghề luật sư.",
            "Chúng tôi tiếp cận mỗi vụ việc với sự phân tích chuyên sâu, chú trọng từng chi tiết và đánh giá thấu đáo các tình tiết, chứng cứ cũng như quy định pháp luật có liên quan.",
            // The Client typed "Iintegritas Vũ legal"; the firm's name is corrected here.
            "Từ giai đoạn đánh giá ban đầu đến quá trình triển khai chiến lược pháp lý, Integritas Vũ Legal chú trọng bảo đảm mỗi ý kiến tư vấn và hành động đều được cân nhắc kỹ lưỡng, có cơ sở pháp lý vững chắc và được thực hiện với tinh thần trách nhiệm cao.",
          ],
        },
        {
          term: "HIỆU QUẢ",
          descriptor: "Định Hướng Rõ Ràng. Hiệu Quả Thiết Thực.",
          paragraphs: [
            "Chúng tôi tin rằng giá trị của dịch vụ pháp lý không chỉ nằm ở chất lượng phân tích chuyên môn mà còn ở khả năng đáp ứng những mục tiêu và nhu cầu thực tiễn của Khách hàng.",
            "Dù trong hoạt động tư vấn giao dịch, quản trị rủi ro pháp lý hay đại diện giải quyết tranh chấp, Integritas Vũ Legal luôn hướng đến việc xây dựng các giải pháp có cơ sở pháp luật vững chắc, khả thi trong thực tiễn và phù hợp với lợi ích của Khách hàng.",
            "Đối với Integritas Vũ Legal, định hướng hiệu quả đồng nghĩa với việc theo đuổi từng vụ việc bằng mục tiêu rõ ràng, đánh giá thực tế về các khả năng và giới hạn pháp lý, cùng cam kết mang lại những giá trị thiết thực cho Khách hàng.",
          ],
        },
      ],
    },
    approach: {
      heading: "Cách Chúng Tôi Tiếp Cận Vụ Việc",
      title: "Mỗi vụ việc. Một chiến lược riêng.",
      paragraphs: [
        "Không có một giải pháp chung nào phù hợp với mọi vấn đề pháp lý phức tạp. Mỗi vụ việc đều đòi hỏi sự đánh giá thấu đáo về các tình tiết thực tế, quy định pháp luật áp dụng cũng như những quyền và lợi ích có liên quan.",
        "Phương pháp tiếp cận mỗi vụ việc của Integritas Vũ Legal được định hướng qua bốn bước trọng tâm.",
      ],
      steps: [
        {
          label: "01 — THẤU HIỂU",
          name: "Hiểu Bản Chất, Sự Thật Của Vụ Việc Và Nhu Cầu Của Khách Hàng.",
          body: "Chúng tôi bắt đầu bằng việc xem xét các tình tiết, hoàn cảnh và quan hệ pháp lý có liên quan nhằm xác định những vấn đề pháp lý trọng tâm, đồng thời tìm hiểu đầy đủ những quan tâm, ưu tiên và mục tiêu của Khách hàng.",
        },
        {
          label: "02 — ĐÁNH GIÁ",
          name: "Đánh Giá Cơ Sở Pháp Lý Và Các Rủi Ro Liên Quan.",
          body: "Chúng tôi phân tích các quy định pháp luật áp dụng, chứng cứ hiện có, trách nhiệm pháp lý có thể phát sinh và các biện pháp giải quyết, đồng thời xem xét những tác động về pháp lý, thương mại và thực tiễn của từng phương án.",
        },
        {
          label: "03 — XÂY DỰNG CHIẾN LƯỢC",
          name: "Xây Dựng Chiến Lược Pháp Lý Phù Hợp Với Từng Vụ Việc.",
          body: "Trên cơ sở kết quả đánh giá, Integritas Vũ Legal xây dựng chiến lược pháp lý phù hợp với mục tiêu của Khách hàng, đồng thời cân nhắc tính khả thi về pháp lý, các rủi ro tiềm ẩn, thời gian, chi phí và khả năng thực thi của phương án được đề xuất.",
        },
        {
          label: "04 — TRIỂN KHAI",
          name: "Triển Khai Chiến Lược Một Cách Chặt Chẽ Và Thận Trọng.",
          body: "Chúng tôi triển khai chiến lược đã thống nhất với tinh thần trách nhiệm và sự cẩn trọng trong từng công việc; duy trì trao đổi rõ ràng, kịp thời với Khách hàng và chủ động đánh giá, điều chỉnh phương án khi diễn biến vụ việc có thay đổi.",
        },
      ],
    },
    values: {
      heading: "NGUYÊN TẮC HÀNH NGHỀ",
      intro: "Tại Integritas Vũ Legal, các nguyên tắc hành nghề là nền tảng định hướng hoạt động tư vấn, đại diện pháp lý và mối quan hệ với Khách hàng. Những nguyên tắc này thể hiện cam kết của chúng tôi trong việc duy trì chuẩn mực nghề nghiệp và đưa ra các nhận định chuyên môn thận trọng đối với từng vụ việc.",
      items: [
        { name: "ĐỘC LẬP", body: "Chúng tôi duy trì tính độc lập trong nhận định chuyên môn, trên cơ sở quy định pháp luật, các tình tiết của vụ việc và trách nhiệm bảo vệ quyền, lợi ích hợp pháp của Khách hàng." },
        { name: "BẢO MẬT", body: "Chúng tôi đề cao sự cẩn trọng và trách nhiệm trong việc tiếp nhận, quản lý và sử dụng thông tin của Khách hàng, đồng thời tuân thủ các nghĩa vụ bảo mật theo quy định pháp luật và chuẩn mực nghề nghiệp." },
        { name: "TRÁCH NHIỆM", body: "Chúng tôi thực hiện từng công việc với sự tận tâm, cẩn trọng và tinh thần trách nhiệm cao đối với các nhiệm vụ được Khách hàng tin tưởng giao phó." },
        { name: "CHẤT LƯỢNG CHUYÊN MÔN", body: "Chúng tôi chú trọng duy trì tiêu chuẩn chuyên môn cao thông qua việc phân tích pháp lý chặt chẽ, chuẩn bị kỹ lưỡng, trao đổi rõ ràng và triển khai công việc một cách nghiêm túc, có hệ thống." },
        { name: "CAM KẾT", body: "Chúng tôi hướng đến việc xây dựng mối quan hệ hợp tác bền vững trên nền tảng của sự tin cậy, trao đổi kịp thời và thấu hiểu những nhu cầu, ưu tiên của Khách hàng." },
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
        name: "Giải Quyết Tranh Chấp",
        paragraphs: [
          "Integritas Vũ Legal tư vấn và đại diện cho Khách hàng trong các tranh chấp dân sự, kinh doanh và thương mại tại Tòa án, cũng như trong quá trình thương lượng và giải quyết tranh chấp ngoài tố tụng.",
          "Chúng tôi tập trung vào việc xác định vị thế pháp lý, kiểm soát rủi ro và xây dựng chiến lược phù hợp với mục tiêu thực tế của Khách hàng.",
        ],
        services: [
          "Tranh Chấp Hợp Đồng Và Thương Mại",
          "Tranh Chấp Doanh Nghiệp Và Cổ Đông/Thành Viên",
          "Tranh Chấp Đầu Tư Và Giao Dịch",
          "Tranh Chấp Bất Động Sản Và Xây Dựng",
          "Tranh Chấp Dân Sự Và Tài Sản",
          "Biện Pháp Khẩn Cấp Tạm Thời",
          "Thương Lượng Và Hòa Giải",
          "Đại Diện Tại Tòa Án",
          "Thi Hành Bản Án Và Thu Hồi Tài Sản",
        ],
      },
      {
        // The criminal practice, renamed "Tội Phạm Kinh Tế" and given its Vietnamese
        // paragraphs in the Client's 12-11 file.
        id: "white-collar-crimes",
        name: "Tội Phạm Kinh Tế",
        paragraphs: [
          "Các vụ việc liên quan đến Tội Phạm Kinh Tế và tội phạm trong hoạt động doanh nghiệp có thể đặt doanh nghiệp và cá nhân trước những rủi ro đáng kể về pháp lý, tài chính và uy tín. Integritas Vũ Legal cung cấp dịch vụ tư vấn và đại diện pháp lý trong các vụ việc nhạy cảm, phức tạp liên quan đến hành vi bị nghi ngờ có dấu hiệu vi phạm pháp luật hình sự trong lĩnh vực kinh tế và hoạt động doanh nghiệp, từ giai đoạn đánh giá rủi ro ban đầu, điều tra nội bộ đến quá trình giải quyết vụ việc tại các cơ quan có thẩm quyền.",
          "Chúng tôi kết hợp năng lực phân tích pháp lý chuyên sâu với sự am hiểu thực tiễn hoạt động doanh nghiệp và các vấn đề về chứng cứ nhằm xây dựng chiến lược pháp lý phù hợp, bảo vệ quyền và lợi ích hợp pháp của Khách hàng, đồng thời nhận diện và kiểm soát rủi ro trong từng giai đoạn giải quyết vụ việc.",
        ],
        services: [
          "Tư Vấn & Rà Soát Nội Bộ",
          "Tham Gia Tại Các Tố Tụng",
          "Bào Chữa Cho Bị Can, Bị Cáo",
          "Bảo Vệ Quyền Và Lợi Ích Hợp Pháp Cho Các Đương Sự Khác Trong Vụ Án",
          "Dịch Vụ Pháp Lý Khác",
        ],
      },
      {
        id: "arbitration",
        name: "Trọng tài",
        // The list at the top reads "Trọng Tài"; the heading kept its lower case in the
        // 12-11 file.
        navName: "Trọng Tài",
        paragraphs: [
          "Integritas Vũ Legal tư vấn và đại diện cho Khách hàng trong các vụ việc trọng tài thương mại trong nước và quốc tế, từ giai đoạn trước tranh chấp đến công nhận và thi hành phán quyết.",
        ],
        services: [
          "Tư Vấn Điều Khoản Trọng Tài",
          "Đánh Giá Tranh Chấp Trước Tố Tụng",
          "Tranh Chấp Hợp Đồng Và Doanh Nghiệp",
          "Tranh Chấp Xây Dựng Và Đầu Tư",
          "Biện Pháp Khẩn Cấp Tạm Thời",
        ],
      },
      {
        id: "enforcement-asset-recovery",
        name: "Thi Hành Án & Thu Hồi Tài Sản",
        paragraphs: [
          "Việc có được bản án hoặc phán quyết thuận lợi không phải lúc nào cũng là điểm kết thúc của tranh chấp. Integritas Vũ Legal hỗ trợ Khách hàng xây dựng và triển khai chiến lược thi hành, từ đánh giá khả năng thu hồi đến thực hiện các thủ tục pháp lý cần thiết.",
        ],
        services: [
          "Thi Hành Bản Án, Quyết Định Của Tòa Án",
          "Đánh Giá Khả Năng Thi Hành Và Thu Hồi",
          "Xác Định Tài Sản Phục Vụ Thi Hành",
          "Thi Hành Đối Với Cổ Phần, Phần Vốn Góp Và Tài Sản Doanh Nghiệp",
          "Xử Lý Trở Ngại Trong Quá Trình Thi Hành",
          "Thu Hồi Nợ Và Tài Sản",
        ],
      },
      {
        id: "corporate-commercial",
        name: "Doanh Nghiệp & Thương Mại",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho doanh nghiệp, chủ sở hữu và nhà đầu tư trong suốt quá trình hoạt động, từ thành lập và quản trị đến giao dịch thương mại, tái cấu trúc và xử lý các vấn đề phát sinh giữa các bên liên quan.",
          "Mục tiêu của chúng tôi là giúp Khách hàng nhận diện rủi ro sớm và xây dựng cấu trúc pháp lý phù hợp trước khi vấn đề trở thành tranh chấp.",
        ],
        services: [
          "Thành Lập Và Tổ Chức Doanh Nghiệp",
          "Quản Trị Doanh Nghiệp",
          "Quyền Và Nghĩa Vụ Của Thành Viên/Cổ Đông",
          "Hợp Đồng Thương Mại",
          "Thỏa Thuận Cổ Đông/Thành Viên",
          "Giao Dịch Với Bên Liên Quan",
          "Thay Đổi Và Tái Cấu Trúc Doanh Nghiệp",
          "Tư Vấn Pháp Lý Thường Xuyên",
          "Quản Trị Rủi Ro Pháp Lý",
        ],
      },
      {
        id: "m-and-a-investment",
        name: "Mua - Bán, Sáp Nhập (M&A) & Đầu tư",
        // The list at the top keeps the short form.
        navName: "M&A & Đầu Tư",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho doanh nghiệp, nhà đầu tư và chủ sở hữu trong các giao dịch mua bán, sáp nhập và đầu tư tại Việt Nam, từ giai đoạn chuẩn bị và thẩm định đến đàm phán, ký kết và hoàn tất giao dịch.",
        ],
        services: [
          "Cấu Trúc Giao Dịch",
          "Thẩm Định Pháp Lý",
          "Mua Bán Cổ Phần/Phần Vốn Góp",
          "Chuyển Nhượng Tài Sản Và Dự Án",
          "Soạn Thảo Và Đàm Phán Tài Liệu Giao Dịch",
          "Thỏa Thuận Cổ Đông",
          "Điều Kiện Tiên Quyết Và Hoàn Tất Giao Dịch",
          "Chấp Thuận Và Thủ Tục Đầu Tư",
          "Đầu Tư Nước Ngoài Tại Việt Nam",
          "Các Vấn Đề Pháp Lý Sau Giao Dịch",
        ],
      },
      {
        id: "real-estate-construction",
        name: "Bất Động Sản & Xây Dựng",
        paragraphs: [
          "Integritas Vũ Legal tư vấn cho chủ sở hữu, nhà đầu tư, doanh nghiệp và các bên liên quan trong giao dịch, phát triển dự án và giải quyết tranh chấp bất động sản, xây dựng.",
        ],
        services: [
          "Thẩm Định Pháp Lý Bất Động Sản Và Dự Án",
          "Giao Dịch Bất Động Sản",
          "Chuyển Nhượng Dự Án",
          "Hợp Đồng Xây Dựng",
          "Hợp Đồng Mua Bán, Thuê Và Đặt Cọc",
          "Các Vấn Đề Về Quyền Sử Dụng Đất Và Tài Sản",
          "Tranh Chấp Bất Động Sản",
          "Tranh Chấp Xây Dựng",
          "Khiếu Nại Về Thanh Toán, Chậm Tiến Độ Và Thay Đổi Công Việc",
        ],
      },
      {
        id: "employment",
        name: "Lao Động",
        paragraphs: [
          "Quan hệ lao động đặt ra nhiều nghĩa vụ pháp lý và rủi ro đối với cả người sử dụng lao động và người lao động.",
          "Integritas Vũ Legal cung cấp dịch vụ tư vấn và đại diện pháp lý cho người sử dụng lao động và người lao động trong các vấn đề liên quan đến hợp đồng lao động, nội quy và chính sách lao động, xử lý kỷ luật, chấm dứt quan hệ lao động, quyền lợi của người lao động và các tranh chấp lao động.",
          "Chúng tôi hỗ trợ Khách hàng nhận diện, quản trị rủi ro pháp lý trong quan hệ lao động, giải quyết tranh chấp thông qua thương lượng hoặc các thủ tục pháp lý có liên quan, đồng thời bảo vệ quyền và lợi ích hợp pháp của Khách hàng.",
        ],
        services: [
          "Hợp Đồng Lao Động",
          "Nội Quy Và Chính Sách Lao Động",
          "Tiền Lương, Quyền Lợi Và Nghĩa Vụ Lao Động",
          "Kỷ Luật Lao Động",
          "Chấm Dứt Hợp Đồng Lao Động",
          "Tái Cơ Cấu Và Cắt Giảm Lao Động",
          "Người Lao Động Quản Lý Và Nhân Sự Cấp Cao",
          "Bảo Mật Và Nghĩa Vụ Sau Khi Nghỉ Việc",
          "Tranh Chấp Lao Động",
          "Đại Diện Trong Tố Tụng Lao Động",
        ],
      },
      {
        id: "private-clients",
        name: "Khách Hàng Cá Nhân",
        paragraphs: [
          "Integritas Vũ Legal tư vấn và đại diện cho Khách hàng cá nhân trong các vấn đề dân sự và tài sản có tính chất phức tạp, với cách tiếp cận thận trọng, bảo mật và hướng đến giải pháp.",
        ],
        services: [
          "Tranh Chấp Tài Sản",
          "Quyền Sở Hữu Và Quyền Sử Dụng Tài Sản",
          "Thừa Kế Và Di Sản",
          "Phân Chia Tài Sản",
          "Tài Sản Trong Quan Hệ Hôn Nhân",
          "Nghĩa Vụ Và Khoản Nợ Liên Quan Đến Tài Sản",
          "Tranh Chấp Hợp Đồng Dân Sự",
          "Thương Lượng Và Hòa Giải",
          "Đại Diện Tại Tòa Án",
          "Thỏa Thuận Tiền Hôn Nhân",
          "Di Chúc",
        ],
      },
    ],
    closing: "Mỗi vụ việc đều có những yếu tố pháp lý, thương mại và thực tiễn riêng. Integritas Vũ Legal hỗ trợ Khách hàng xác định vấn đề cốt lõi, đánh giá các lựa chọn và xây dựng phương án phù hợp với mục tiêu cần đạt được.",
    closingCta: "TRAO ĐỔI VỚI LUẬT SƯ",
    insightsCta: "NHẬN ĐỊNH PHÁP LÝ",
  },
  // Confirmed by the Client's updated document (PHASE INSIGHTS - GÓC NHÌN).
  // The article titles stay as placeholders.
  insightsPage: {
    heading: "Nhận định",
    readMore: "Đọc thêm",
    // The Client's Vietnamese "coming soon" notice (15-10 feedback). Their title joins the
    // section name and the status with an en dash, as written.
    comingSoonTitle: "Nhận định Pháp lý – Sắp ra mắt",
    comingSoonBody: [
      "Chuyên mục của chúng tôi hiện đang trong quá trình hoàn thiện. Chúng tôi sẽ sớm cập nhật các bản tin pháp luật mới nhất, góc nhìn thực tiễn và những phân tích chuyên sâu về các vấn đề trọng yếu dành cho doanh nghiệp cũng như cá nhân.",
      "Quý Khách hàng vui lòng quay lại sau để đón đọc những bài viết mới nhất từ chúng tôi.",
    ],
    cards: [
      // TODO(client): Supply the article title and URL.
      { category: "CẬP NHẬT QUY ĐỊNH PHÁP LUẬT", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "NHẬN ĐỊNH PHÁP LÝ", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "BẢN ÁN/ÁN LỆ", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "HƯỚNG DẪN DOANH NGHIỆP", title: "[Article title]" },
    ],
  },
  // Page labels, taken word for word from the Client's own Vietnamese navigation and
  // footer lists in the source document. Nothing here is translated by us.
  pages: {
    expertise: "Chuyên môn",
    people: "Đội Ngũ",
    insights: "Nhận định",
    careers: "Cơ hội nghề nghiệp",
    contact: "Liên hệ",
    // The Client has no Vietnamese for "Experience" (AGENTS.md question 1); this is the site
    // owner's wording, as in the footer. TODO(client): confirm.
    experience: "Kinh nghiệm",
    terms: "Điều khoản sử dụng",
    privacy: "Chính sách bảo mật",
    legalDisclaimer: "Miễn trừ trách nhiệm",
  },
  peoplePage: {
    paragraphs: [
      "Đội ngũ Integritas Vũ Legal với hơn 10 năm kinh nghiệm trong lĩnh vực pháp lý, kết hợp với kinh nghiệm thực tiễn và sự am hiểu sâu sắc về hoạt động kinh doanh, quản trị và vận hành doanh nghiệp.",
      "Chúng tôi tin rằng, tư vấn pháp lý hiệu quả không chỉ đòi hỏi kiến thức chuyên môn mà còn cần khả năng nhận định độc lập, tư duy chiến lược và sự thấu hiểu những yếu tố thương mại, thách thức trong hoạt động kinh doanh cũng như các lợi ích có ảnh hưởng đến quyết định của Khách hàng.",
      // The Client wrote "IVL" in these two sentences; the firm's name is written out, as
      // they asked in 2026-09 ("IVL" is never used as the company name).
      "Trên nền tảng kết hợp giữa chuyên môn pháp lý và kinh nghiệm thực tiễn, Integritas Vũ Legal tiếp cận từng vụ việc bằng tư duy độc lập, sự phân tích thận trọng và nhận thức rõ ràng về mục tiêu của Khách hàng.",
      "Các luật sư của Integritas Vũ Legal trực tiếp làm việc với Khách hàng, duy trì trao đổi rõ ràng, kịp thời và đề cao trách nhiệm cá nhân trong suốt quá trình giải quyết từng vụ việc.",
    ],
    portraitAlt: "Ảnh chân dung",
    viewProfile: "XEM HỒ SƠ",
    backToPeople: "GẶP GỠ ĐỘI NGŨ INTEGRITAS VŨ LEGAL",
    members: [
      {
        photoAlt: "Nguyễn Hà Thanh Vũ",
        name: "NGUYỄN HÀ THANH VŨ",
        role: "Luật sư Điều hành | Integritas Vũ Legal",
        shortRole: "Luật sư điều hành",
        biography: [
          "Luật sư Nguyễn Hà Thanh Vũ là Luật sư Sáng lập và Điều hành tại Integritas Vũ Legal, với hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực pháp lý, đặc biệt trong các lĩnh vực giải quyết tranh chấp, tranh tụng, trọng tài, pháp luật doanh nghiệp, thương mại và đầu tư nước ngoài.",
          "Luật sư Vũ có bằng Thạc sĩ Luật Dân sự của Đại học Paris 1 Panthéon-Sorbonne, một trong những trường đại học danh tiếng của Pháp, được quốc tế biết đến với truyền thống học thuật lâu đời và chất lượng đào tạo trong lĩnh vực pháp luật.",
          "Trong quá trình hành nghề, Luật sư Vũ đã tư vấn và đại diện pháp lý cho nhiều Khách hàng là doanh nghiệp, nhà đầu tư trong nước, quốc tế và cá nhân trong các vụ việc có tính chất phức tạp, bao gồm tranh chấp thương mại, trọng tài, thi hành án, các vụ việc hình sự trong lĩnh vực kinh tế, tái cấu trúc doanh nghiệp và giao dịch đầu tư.",
          "Luật sư Vũ có kinh nghiệm trong hoạt động đại diện, bảo vệ quyền và lợi ích hợp pháp của doanh nghiệp, cá nhân trong các vụ việc được giải quyết tại Tòa án, Trọng tài và các cơ quan có thẩm quyền; đồng thời tư vấn cho nhà đầu tư nước ngoài và doanh nghiệp có vốn đầu tư nước ngoài về các vấn đề pháp lý phát sinh trong quá trình thành lập, tổ chức hoạt động và triển khai đầu tư tại Việt Nam.",
          "Bên cạnh chuyên môn pháp lý, Luật sư Vũ còn có sự am hiểu thực tiễn về hoạt động kinh doanh, quản trị và vận hành doanh nghiệp. Sự kết hợp này giúp Luật sư Vũ tiếp cận các vấn đề pháp lý không chỉ từ góc độ quy định pháp luật mà còn trên cơ sở đánh giá mục tiêu kinh doanh, những thách thức trong hoạt động thực tiễn và các rủi ro mà Khách hàng có thể đối mặt.",
          "Trước khi thành lập Integritas Vũ Legal, Luật sư Vũ từng hành nghề tại một công ty luật hàng đầu Việt Nam, nơi ông tích lũy kinh nghiệm trong việc xử lý các tranh chấp phức tạp và nhiều vấn đề pháp lý quan trọng.",
          "Trên cương vị Luật sư Sáng lập và Điều hành, Luật sư Vũ trực tiếp định hướng chiến lược phát triển của Integritas Vũ Legal và tham gia tư vấn, đại diện giải quyết các vụ việc của Khách hàng. Phương pháp hành nghề của ông được xây dựng trên nền tảng tư duy độc lập, tính chính trực, trách nhiệm nghề nghiệp và sự kết hợp giữa phân tích pháp lý chuyên sâu với các giải pháp có tính thực tiễn và chiến lược.",
        ],
      },
      {
        photoAlt: "TS. Trúc Nguyễn",
        name: "TS. TRÚC NGUYỄN",
        // Her profile page heading and <title> in the 12-11 file; the People list keeps
        // "TS. TRÚC NGUYỄN". The Client typed the title as "TS.NGUYỄN" without a space.
        profileName: "Tiến sĩ NGUYỄN HÀ THANH TRÚC",
        titleName: "TS. NGUYỄN HÀ THANH TRÚC",
        shortRole: "Cố vấn cấp cao",
        // The Client's text has two spaces around the pipe here; kept as supplied.
        role: "Đồng sáng lập  |  Cố vấn Đạo đức, Tổ chức, Quản trị & Lãnh đạo",
        biography: [
          "TS. Trúc Nguyễn là cố vấn về đạo đức, tổ chức, quản trị và lãnh đạo, với nhiều kinh nghiệm học thuật và chuyên môn tại Việt Nam và Vương quốc Anh. Bà từng đảm nhiệm các vị trí học thuật tại các trường đại học ở cả hai quốc gia. Bà có bằng Tiến sĩ Quản trị từ University of Kent (Vương quốc Anh), MBA từ RMIT University Việt Nam và Cử nhân Quản trị Kinh doanh tại Phần Lan.",
          "Lĩnh vực chuyên môn của bà bao gồm đạo đức kinh doanh, quản trị tổ chức, lãnh đạo, logic thể chế và quản trị đa văn hóa. Thông qua hoạt động nghiên cứu, bà có nhiều cơ hội làm việc và trao đổi với các nhà quản lý tại các tập đoàn đa quốc gia (MNCs), qua đó có những hiểu biết sâu sắc về cách các nhà quản lý tư duy, ra quyết định và xử lý các vấn đề đạo đức, tổ chức và pháp lý trong bối cảnh Việt Nam.",
          "Đối với khách hàng, Bà Trúc Nguyễn đã tư vấn cho các tổ chức về nhiều vấn đề phức tạp liên quan đến hoạt động kinh doanh và tổ chức, bao gồm các vấn đề nội bộ về lao động và nơi làm việc, tái cơ cấu nhân sự và quyết định cắt giảm lao động, thực tiễn làm thêm giờ, đối xử với người lao động, tuân thủ trong tổ chức và phát triển bền vững về môi trường. Qua những hoạt động này, bà hỗ trợ các tổ chức xem xét và xử lý các khía cạnh đạo đức trong quyết định kinh doanh, cân bằng giữa mục tiêu kinh doanh, yêu cầu pháp luật, phúc lợi người lao động, tính công bằng, lợi ích của các bên liên quan và trách nhiệm của tổ chức, đồng thời tính đến bối cảnh văn hóa và tổ chức tại Việt Nam.",
          "Phương pháp tiếp cận của bà dựa trên giá trị “Tâm” – lương tâm, nhận thức đạo đức và tinh thần trách nhiệm – đồng thời tôn trọng các yêu cầu pháp luật và chuẩn mực quốc tế. Trong công ty, Bà Trúc Nguyễn đóng vai trò quan trọng trong việc xây dựng văn hóa và môi trường tổ chức đề cao đạo đức, thúc đẩy quản trị có trách nhiệm và các phương thức quản lý lấy con người làm trọng tâm. Những nguyên tắc này cũng được thể hiện trong cách công ty đồng hành cùng khách hàng: thấu hiểu hoàn cảnh của từng khách hàng, tôn trọng nhu cầu và giá trị riêng của họ, đồng thời cung cấp dịch vụ chuyên nghiệp dựa trên sự chính trực, đồng cảm và tôn trọng.",
        ],
      },
    ],
  },
  contactPage: {
    heading: "Bắt đầu bằng một cuộc trao đổi.",
    paragraphs: [
      "Mỗi vấn đề pháp lý đều có bối cảnh và mục tiêu riêng. Nếu Quý khách cần trao đổi về một giao dịch, tranh chấp hoặc vấn đề pháp lý cụ thể, vui lòng liên hệ trực tiếp với luật sư của Integritas Vũ Legal hoặc gửi thông tin qua biểu mẫu bên dưới.",
      "Thông tin ban đầu sẽ giúp chúng tôi hiểu khái quát vấn đề trước khi trao đổi cùng Quý khách.",
    ],
    lawyerName: "NGUYỄN HÀ THANH VŨ",
    lawyerRole: "Luật sư Điều hành | Managing Lawyer",
    directLabel: "Điện thoại:",
    emailLabel: "Email:",
    linkedinLabel: "LinkedIn:",
    // The number the Client wrote here in the 12-11 file (it replaced 0938 170 130).
    direct: "0938 2020 99",
    // Supplied by the Client 2026-09-28; an address, not language-specific.
    email: "vu.nguyen@integritasvulegal.com",
    linkedin: "[LinkedIn Profile]",
    profileCta: "XEM HỒ SƠ LUẬT SƯ",
    form: {
      heading: "Quý khách cần trao đổi vấn đề gì?",
      intro: "Vui lòng cung cấp một số thông tin cơ bản dưới đây. Integritas Vũ Legal sẽ xem xét nội dung và liên hệ lại để trao đổi về bước tiếp theo phù hợp.",
      detailsTitle: "THÔNG TIN LIÊN HỆ",
      enquiryTitle: "NỘI DUNG CẦN TƯ VẤN",
      fullName: "Họ và tên",
      email: "Email",
      telephone: "Số điện thoại",
      company: "Công ty / Tổ chức",
      area: "Lĩnh Vực Cần Hỗ Trợ",
      description: "Mô tả ngắn vấn đề cần trao đổi",
      // Capitalised word by word in the 12-11 file, which also adds the criminal practice
      // (typed "Tôi Phạm Kinh Tế"; "Tội" as everywhere else).
      areaOptions: [
        "Giải Quyết Tranh Chấp",
        "Trọng Tài",
        "Tội Phạm Kinh Tế",
        "Thi Hành & Thu Hồi Tài Sản",
        "Doanh Nghiệp & Thương Mại",
        "M&A & Đầu Tư",
        "Bất Động Sản & Xây Dựng",
        "Lao Động",
        "Khách Hàng Cá Nhân",
        "Khác",
      ],
      noticeTitle: "TRƯỚC KHI GỬI YÊU CẦU",
      notice: [
        "Việc gửi thông tin qua biểu mẫu này hoặc liên hệ với Integritas Vũ Legal không tự động làm phát sinh quan hệ luật sư – khách hàng.",
        "Integritas Vũ Legal chỉ có thể nhận và thực hiện một vụ việc sau khi hoàn thành các bước cần thiết, bao gồm việc xem xét khả năng tiếp nhận vụ việc, kiểm tra xung đột lợi ích khi phù hợp và thống nhất phạm vi dịch vụ với khách hàng.",
        "Vì vậy, Quý khách không nên gửi qua biểu mẫu này các tài liệu gốc hoặc thông tin đặc biệt nhạy cảm trước khi Integritas Vũ Legal xác nhận việc tiếp nhận vụ việc.",
        "Quý khách chỉ cần cung cấp thông tin khái quát ở bước này. Không cần gửi các tài liệu hoặc thông tin mật, nhạy cảm qua biểu mẫu liên hệ ban đầu.",
      ],
      submit: "GỬI YÊU CẦU",
    },
  },
  careersPage: {
    heading: "PHÁT TRIỂN CƠ HỘI NGHỀ NGHIỆP CÙNG CHÚNG TÔI",
    opportunitiesTitle: "CƠ HỘI",
    opportunities: ["Trợ lý Luật sư", "Thực tập sinh Pháp lý"],
    joinTitle: "Gia nhập Integritas Vũ Legal",
    joinBody: "Nếu bạn quan tâm đến cơ hội nghề nghiệp tại Integritas Vũ Legal, vui lòng gửi CV và thư giới thiệu ngắn đến:",
    careerEmail: "contact@integritasvulegal.com",
  },
  footer: {
    navigationTitle: "Điều hướng",
    // Same order as the routes in SiteFooter. The first six labels are the Client's own
    // Vietnamese navigation list; the Client has no entry for Experience and asked (26-10)
    // for the footer to be put into Vietnamese, so "Kinh nghiệm" is the site owner's wording.
    // TODO(client): confirm "Kinh nghiệm".
    navigationLinks: ["Về chúng tôi", "Chuyên môn", "Đội ngũ", "Nhận định", "Kinh nghiệm", "Cơ hội nghề nghiệp", "Liên hệ"],
    expertiseTitle: "Lĩnh vực chuyên môn",
    expertiseLinks: [
      "Giải quyết tranh chấp",
      // The Client named this practice area "Hình sự" in Vietnamese (26-10).
      "Hình sự",
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
    // See the English footer: 0938 2020 99 since the Client's 12-11 file.
    telephone: "0938 2020 99",
    email: "contact@integritasvulegal.com",
    legalTitle: "Thông tin pháp lý",
    legalLinks: ["Điều khoản sử dụng", "Chính sách bảo mật", "Miễn trừ trách nhiệm"],
    disclaimerTitle: "Miễn trừ trách nhiệm",
    disclaimerBody: "Nội dung trên trang web của Integritas Vu Legal chỉ nhằm mục đích cung cấp thông tin chung và không cấu thành tư vấn pháp lý hay giải pháp cho bất kỳ vấn đề cụ thể nào. Việc truy cập trang web hoặc liên hệ với Integritas Vũ Legal không mặc nhiên xác lập mối quan hệ luật sư - Khách hàng.",
    copyright: "© 2026 Integritas Vu Legal. All rights reserved.",
  },
} as const satisfies Scaffold<EnglishDictionary>;
