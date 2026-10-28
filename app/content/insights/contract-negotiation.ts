import type { Article } from "./types";

/**
 * Legal Insights, third article. Transcribed verbatim from the Client's
 * `Blogs/CONTENT 28-10.docx` - typos included; see the project report for the list.
 * Do not tidy the wording here: ivl-content-update rule, the Client is a law firm.
 *
 * The English version is the Client's own `Blogs/03.IVL_Contract Negotiations_Part_1_EN.docx`.
 * It opens with two label lines the Vietnamese version does not have ("INTEGRITAS VU LEGAL |
 * LEGAL INSIGHTS" and "CONTRACT NEGOTIATION SERIES • PART 1/2"); they are the `kicker`.
 *
 * `**Trong Tập 2**` carries the two asterisks the Client typed (Markdown bold). The text is
 * kept as written; `InsightArticleView` shows the marked words in bold.
 *
 * One exception, at the site owner's request (2026-10-28): "Trách Nhiện Hữu Hạn" in the legal
 * notice now reads "Trách Nhiệm Hữu Hạn".
 */
export const contractNegotiation: Article = {
  slug: "dam-phan-hop-dong-thoa-thuan-da-dat-duoc-nghia-vu-phap-ly-da-ro-rang",
  // The Client named the file "CONTENT 28-10"; TODO(client): confirm the publication date.
  publishedAt: "2026-10-28",
  // TODO(client): confirm the category. "Legal Insight" like the earlier articles; it could
  // equally be filed as a Practical Guide.
  category: 1,
  // Supplied by the Client (Blogs/Ảnh - blogs/POST 3.jpg, a tall 9:16 photograph), resized for
  // the web. The cards crop it to a landscape band; this points the crop at the gavel and the
  // hand holding the pen rather than the middle of the picture.
  coverImage: "/images/blog/contract-negotiation.jpg",
  coverPosition: "50% 28%",
  vi: {
    title: "ĐÀM PHÁN HỢP ĐỒNG: THỎA THUẬN ĐÃ ĐẠT ĐƯỢC, NGHĨA VỤ PHÁP LÝ ĐÃ RÕ RÀNG?",
    subtitle: "Từ hiệu lực giao dịch đến thẩm quyền đại diện và nội dung nghĩa vụ — ba vấn đề cần giải quyết trước khi đặt bút ký.",
    blocks: [
      { type: "p", text: "Giá cả, tiến độ và phương thức thanh toán thường là trọng tâm của một cuộc đàm phán thương mại. Tuy nhiên, sự thống nhất về lợi ích kinh tế không tự nó trả lời được ba câu hỏi: thỏa thuận có đáp ứng điều kiện có hiệu lực hay không; người đưa ra cam kết có đủ thẩm quyền đại diện hay không; và mỗi bên thực sự phải thực hiện những nghĩa vụ gì?" },
      { type: "p", text: "Một hợp đồng có thể được soạn thảo rất dài nhưng vẫn bỏ sót các điều kiện quyết định khả năng thực thi. Các câu hỏi dưới đây, doanh nghiệp có thể nhìn lại cách mình đang thương lượng và ghi nhận các cam kết." },
      { type: "h2", text: "01 | CÁC BÊN ĐÃ TỰ NGUYỆN THỎA THUẬN: ĐIỀU KHOẢN CÓ ĐƯƠNG NHIÊN CÓ HIỆU LỰC?" },
      { type: "p", text: "Quyền tự do, tự nguyện cam kết, thỏa thuận là nguyên tắc nền tảng của pháp luật dân sự, nhưng không đồng nghĩa các bên có thể xác lập bất kỳ nội dung nào và mặc nhiên yêu cầu thực thi. Theo Điều 3 và Điều 117 Bộ luật Dân sự 2015, việc xác định hiệu lực giao dịch phải xem xét năng lực chủ thể, sự tự nguyện, mục đích và nội dung không vi phạm điều cấm của luật, không trái đạo đức xã hội; hình thức là điều kiện có hiệu lực trong trường hợp luật có quy định." },
      { type: "p", text: "Với giao dịch thương mại, Điều 4 Luật Thương mại 2005 đặt ra yêu cầu xác định đúng phạm vi điều chỉnh và quan hệ giữa luật thương mại với pháp luật có liên quan. Đặc biệt, một số giao dịch còn chịu quy định chuyên ngành về điều kiện kinh doanh, hình thức hợp đồng, công chứng, chứng thực hoặc đăng ký." },
      { type: "p", text: "Chẳng hạn, đối với giao dịch mà pháp luật yêu cầu tuân thủ hình thức bắt buộc, việc các bên đã thống nhất hoặc thực hiện một phần nghĩa vụ không đủ để mặc nhiên kết luận giao dịch có hiệu lực. Cần xem xét Điều 119, Điều 129 Bộ luật Dân sự 2015 và quy định chuyên ngành; việc xử lý vi phạm về hình thức còn tùy thuộc vào điều kiện cụ thể của từng trường hợp." },
      { type: "p", text: "Điểm cần lưu ý: Xác định đúng bản chất giao dịch, điều kiện có hiệu lực và yêu cầu về hình thức, thủ tục trước khi các bên chấp thuận cam kết." },
      { type: "h2", text: "02 | NGƯỜI ĐÀM PHÁN ĐÃ ĐỒNG Ý: DOANH NGHIỆP ĐỐI TÁC CÓ BỊ RÀNG BUỘC?" },
      { type: "p", text: "Trong thực tiễn, người trực tiếp thương lượng có thể là trưởng bộ phận, nhân viên kinh doanh, người được ủy quyền hoặc cá nhân thường xuyên liên hệ với đối tác. Sự hiện diện của họ trong quá trình đàm phán không đồng nghĩa với việc họ có quyền nhân danh doanh nghiệp xác lập mọi nghĩa vụ." },
      { type: "p", text: "Điều 142 và Điều 143 Bộ luật Dân sự 2015 quy định hệ quả của giao dịch do người không có quyền đại diện hoặc vượt quá phạm vi đại diện xác lập, thực hiện. Khi đánh giá trách nhiệm của người được đại diện, không thể chỉ dựa vào chức danh trên danh thiếp hoặc chữ ký trong văn bản; còn phải xem xét phạm vi đại diện, sự công nhận giao dịch, việc biết mà không phản đối trong thời hạn hợp lý và những tình tiết khác theo từng điều luật." },
      { type: "p", text: "Vì vậy, không thể kết luận theo một chiều rằng mọi cam kết do nhân viên đưa ra đều ràng buộc doanh nghiệp, hoặc rằng giao dịch luôn không phát sinh hiệu lực đối với doanh nghiệp khi người ký thiếu thẩm quyền. Hồ sơ đăng ký doanh nghiệp, điều lệ, quyết định phân quyền, giấy ủy quyền và hành vi xác nhận của các bên đều có thể có ý nghĩa trong việc xác định chủ thể chịu trách nhiệm." },
      { type: "p", text: "Điểm cần lưu ý: Kiểm tra tư cách đại diện và phạm vi thẩm quyền; lưu giữ căn cứ về việc chấp thuận, phê duyệt hoặc xác nhận các cam kết quan trọng." },
      { type: "h2", text: "03 | ĐÃ THỐNG NHẤT GIÁ VÀ TIẾN ĐỘ: NỘI DUNG NGHĨA VỤ ĐÃ ĐẦY ĐỦ VÀ RÕ RÀNG?" },
      { type: "p", text: "Một hợp đồng mua bán có thể ghi nhận đúng chủng loại và đơn giá nhưng bỏ ngỏ tiêu chuẩn chất lượng, quy trình kiểm tra, thời điểm chuyển giao rủi ro hoặc điều kiện từ chối nhận hàng. Một hợp đồng dịch vụ có thể xác định phạm vi công việc nhưng không làm rõ tiêu chí hoàn thành, quy trình nghiệm thu và cách xử lý yêu cầu phát sinh." },
      { type: "p", text: "Điều 398 Bộ luật Dân sự 2015 quy định về nội dung hợp đồng mà các bên có thể thỏa thuận; việc thiếu một điều khoản không đương nhiên khiến hợp đồng vô hiệu. Tuy nhiên, trong từng giao dịch, quy định mặc định của pháp luật, thỏa thuận, tập quán hợp pháp và chứng cứ về quá trình giao kết có thể ảnh hưởng đến cách xác định nghĩa vụ. Đối với mua bán hàng hóa, cần đồng thời đối chiếu các quy định của Luật Thương mại 2005 về giao hàng, sự phù hợp của hàng hóa, kiểm tra hàng hóa và thanh toán." },
      { type: "p", text: "Vấn đề không nằm ở số lượng điều khoản, mà ở khả năng xác định được bên nào phải làm gì, vào thời điểm nào, theo tiêu chuẩn nào và dựa trên chứng cứ nào để xác định việc thực hiện hoặc vi phạm nghĩa vụ." },
      { type: "p", text: "Điểm cần lưu ý: Chuyển các kỳ vọng thương mại thành nghĩa vụ cụ thể, có thể kiểm chứng; quy định rõ tiêu chí chất lượng, nghiệm thu, thanh toán và xử lý công việc phát sinh." },
      { type: "h2", text: "TỪ THỎA THUẬN ĐẾN CHẾ TÀI: ĐIỀU GÌ SẼ XẢY RA NẾU HỢP ĐỒNG BỊ VI PHẠM?" },
      { type: "p", text: "Thỏa thuận hợp pháp, người ký có thẩm quyền và nghĩa vụ được xác định rõ là nền tảng quan trọng. Nhưng ngay cả khi ba vấn đề này đã được xử lý, doanh nghiệp vẫn cần trả lời câu hỏi tiếp theo: khi đối tác không thực hiện đúng cam kết, điều khoản phạt, bồi thường, lãi chậm thanh toán hoặc quyền chấm dứt hợp đồng có thực sự được áp dụng như các bên dự kiến?" },
      { type: "p", text: "**Trong Tập 2**, Integritas Vũ Legal tiếp tục phân tích nhóm điều khoản thường quyết định khả năng bảo vệ quyền lợi của doanh nghiệp khi hợp đồng bị vi phạm: phạt vi phạm; bồi thường thiệt hại; lãi chậm thanh toán; và đơn phương chấm dứt, hủy bỏ hợp đồng. Đáng chú ý, một điều khoản phạt 20% giá trị hợp đồng chưa chắc mang lại mức bảo vệ mà bên soạn thảo kỳ vọng." },
      { type: "p", text: "Hãy liên hệ Integritas Vũ Legal để được hỗ trợ đánh giá rủi ro và xây dựng phương án pháp lý phù hợp ngay từ giai đoạn chuẩn bị và đàm phán giao dịch." },
      { type: "p", text: "Website: www.integritasvulegal.com  |  Email: contact@integritasvulegal.com" },
      { type: "h2", text: "THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ" },
      { type: "note", text: "© 2026 Integritas Vũ Legal. Nội dung bài viết do Công Ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal biên soạn và công bố; các quyền đối với phần nội dung thuộc phạm vi bảo hộ được thực hiện theo quy định pháp luật về sở hữu trí tuệ. Không được sao chép, chỉnh sửa, tái bản, phân phối hoặc khai thác nội dung vì mục đích thương mại khi chưa có sự chấp thuận của chủ thể có quyền, trừ các trường hợp được pháp luật cho phép. Khi trích dẫn hợp pháp, đề nghị ghi rõ nguồn và đường dẫn đến bài viết gốc." },
      { type: "note", text: "Bài viết chỉ cung cấp thông tin pháp lý tổng quát tại thời điểm công bố, không phải ý kiến tư vấn pháp lý cho một vụ việc cụ thể, không tạo lập quan hệ luật sư – khách hàng và không thay thế việc đánh giá hồ sơ, chứng cứ, thỏa thuận và quy định áp dụng. Người đọc không nên tự ý dựa duy nhất vào nội dung này để thực hiện, trì hoãn hoặc từ bỏ bất kỳ biện pháp pháp lý nào. Kết quả xử lý phụ thuộc vào tình tiết và pháp luật áp dụng trong từng trường hợp; nội dung có thể cần cập nhật khi pháp luật hoặc thực tiễn áp dụng thay đổi." },
    ],
  },
  en: {
    title: "CONTRACT NEGOTIATIONS: AGREEMENT REACHED—BUT ARE THE LEGAL OBLIGATIONS CLEAR?",
    subtitle: "From the validity of transactions to authority to represent and the scope of contractual obligations—three issues to resolve before signing.",
    kicker: ["INTEGRITAS VU LEGAL  |  LEGAL INSIGHTS", "CONTRACT NEGOTIATION SERIES  •  PART 1/2"],
    blocks: [
      { type: "p", text: "Price, delivery schedules and payment terms often dominate commercial negotiations. Yet agreement on commercial interests does not, in itself, answer three essential questions: does the agreement satisfy the requirements for legal validity; does the person making the commitment have the requisite authority to represent the business; and what, precisely, is each party obliged to perform?" },
      { type: "p", text: "Even a lengthy contract may omit provisions critical to its enforceability. The following questions offer businesses an opportunity to reconsider how they negotiate and document their commitments." },
      { type: "h2", text: "01 | THE PARTIES HAVE AGREED VOLUNTARILY: ARE THE TERMS NECESSARILY LEGALLY EFFECTIVE?" },
      { type: "p", text: "Freedom of contract and voluntary agreement are fundamental principles of civil law. They do not, however, mean that parties may agree to any terms whatsoever and automatically insist upon their enforcement. Under Articles 3 and 117 of the 2015 Civil Code, the validity of a civil transaction must be assessed by reference to the parties’ legal capacity, their voluntary participation, whether its purpose and contents contravene statutory prohibitions or social ethics, and—where prescribed by law—compliance with requirements as to form." },
      { type: "p", text: "For commercial transactions, Article 4 of the 2005 Commercial Law requires consideration of the Law’s scope of application and its relationship with other applicable legislation. Certain transactions are also subject to sector-specific requirements concerning business conditions, contractual form, notarisation, certification or registration." },
      { type: "p", text: "For example, where the law prescribes a mandatory form, the fact that the parties have reached agreement or partly performed their obligations does not, of itself, establish that the transaction is valid. Articles 119 and 129 of the 2015 Civil Code, together with applicable sector-specific provisions, must be considered; the legal consequences of non-compliance depend on the circumstances of the particular case." },
      { type: "p", text: "Key consideration: Ascertain the true nature of the transaction, the requirements for its validity, and any applicable formalities or procedures before accepting binding commitments." },
      { type: "h2", text: "02 | THE NEGOTIATOR HAS AGREED: IS THE COUNTERPARTY LEGALLY BOUND?" },
      { type: "p", text: "In practice, negotiations may be conducted by a department head, a sales employee, an authorised representative or an individual who routinely communicates with the counterparty. Their participation in negotiations does not necessarily confer authority to bind the business to every obligation." },
      { type: "p", text: "Articles 142 and 143 of the 2015 Civil Code address the consequences of transactions entered into or performed without authority to represent another person, or beyond the scope of that authority. Whether the principal is bound cannot be determined solely by a job title on a business card or a signature on a document. The scope of authority, subsequent ratification, knowledge of the transaction without objection within a reasonable period, and other circumstances specified in those provisions must also be considered." },
      { type: "p", text: "It would therefore be equally mistaken to assume that every undertaking given by an employee binds the business, or that a transaction can never bind the business where the signatory lacked authority. Enterprise registration records, the charter, internal delegations of authority, powers of attorney and the parties’ subsequent conduct may all be relevant to identifying who bears responsibility." },
      { type: "p", text: "Key consideration: Verify the representative’s capacity and scope of authority, and preserve evidence of the acceptance, approval or ratification of material commitments." },
      { type: "h2", text: "03 | PRICE AND TIMETABLE AGREED: ARE THE CONTRACTUAL OBLIGATIONS SUFFICIENTLY DEFINED?" },
      { type: "p", text: "A sale and purchase agreement may correctly identify the goods and their unit price while leaving quality specifications, inspection procedures, the point at which risk passes or the grounds for rejecting delivery unresolved. A services agreement may define the scope of work without specifying completion criteria, acceptance procedures or how additional requests will be addressed." },
      { type: "p", text: "Article 398 of the 2015 Civil Code addresses the terms that parties may agree upon in a contract; omission of a particular term does not automatically invalidate the contract. Depending on the transaction, however, statutory default rules, the parties’ agreement, lawful trade usages and evidence of the contracting process may affect how obligations are determined. For sales of goods, the provisions of the 2005 Commercial Law concerning delivery, conformity of goods, inspection and payment must also be considered." },
      { type: "p", text: "What matters is not the number of clauses, but whether the contract makes it possible to establish which party must do what, by when, to what standard, and by reference to what evidence performance or breach will be assessed." },
      { type: "p", text: "Key consideration: Translate commercial expectations into specific, objectively verifiable obligations, with clear provisions on quality standards, acceptance, payment and the handling of additional work." },
      { type: "h2", text: "FROM AGREEMENT TO REMEDIES: WHAT HAPPENS WHEN A CONTRACT IS BREACHED?" },
      { type: "p", text: "A legally valid agreement, an appropriately authorised signatory and clearly defined obligations provide an essential foundation. Even where all three are in place, businesses must ask a further question: if the counterparty fails to honour its commitments, will contractual penalties, damages, late-payment interest or termination rights operate as the parties intended?" },
      { type: "p", text: "In Part 2, Integritas Vu Legal examines the provisions that often determine a business’s ability to protect its interests following a breach: contractual penalties, damages, interest for late payment, and unilateral termination or cancellation of the contract. Notably, a penalty stipulated at 20% of the contract value may not provide the protection its drafter expects." },
      { type: "p", text: "Contact Integritas Vu Legal for assistance in assessing legal risks and developing an appropriate legal approach from the transaction planning and negotiation stages." },
      { type: "p", text: "Website: www.integritasvulegal.com  |  Email: contact@integritasvulegal.com" },
      { type: "h2", text: "LEGAL NOTICE AND COPYRIGHT" },
      { type: "note", text: "© 2026 Integritas Vu Legal. This Article has been prepared and published by Integritas Vu Legal LLC. Rights in the content to the extent protected by intellectual property law are reserved and exercised in accordance with applicable law. No part of the content may be reproduced, modified, republished, distributed, or commercially exploited without the authorization of the relevant rights holder, except as permitted by law. Where lawful quotation is made, please acknowledge the source and provide a link to the original Article." },
      { type: "note", text: "This Article provides general legal information as at the date of publication. It does not constitute legal advice on any particular matter, does not establish a lawyer–Client relationship, and is not a substitute for reviewing the relevant documents, evidence, agreements, and applicable law. Readers should not rely solely on this Article when taking, delaying, or refraining from any legal action. Outcomes depend on the facts and applicable law in each case, and the content may require updating as legislation or legal practice develops." },
    ],
  },
};
