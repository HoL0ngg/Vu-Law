import type { Article } from "./types";

/**
 * Legal Insights, seventh article ("At year-end, which outstanding receivables should
 * businesses prioritise?"). Transcribed verbatim from the Client's
 * `Blogs/07.IVL_Legal Insight_Cuối năm, doanh nghiệp nên ưu tiên xử lý khoản công nợ nào trước (VN|EN) - Post 09.11.2026.docx`
 * - typos included; see the project report for the list. Do not tidy the wording here:
 * ivl-content-update rule, the Client is a law firm.
 *
 * The document has no standfirst and no topic line: it opens with two paragraphs, so the
 * summary comes from the first one (`summaryOf`). It has two bulleted lists (`list`) and a
 * table (section 05), and a numbered source list [1]-[4].
 *
 * One exception, as on the earlier articles (site owner, 2026-10-28): the Vietnamese legal
 * notice's "Trách Nhiện Hữu Hạn" reads "Trách Nhiệm Hữu Hạn".
 */
export const yearEndReceivables: Article = {
  slug: "cuoi-nam-doanh-nghiep-nen-uu-tien-xu-ly-khoan-cong-no-nao-truoc",
  // 9 November 2026: the date in the names of the Client's files for this article.
  publishedAt: "2026-11-09",
  // TODO(client): confirm the category. "Legal Insight" like the other articles.
  category: 1,
  // No picture was supplied for this article, so its card shows the default panel.
  vi: {
    title: "CUỐI NĂM, DOANH NGHIỆP NÊN ƯU TIÊN XỬ LÝ KHOẢN CÔNG NỢ NÀO TRƯỚC? CÁC TIÊU CHÍ ĐỂ BẢO VỆ DÒNG TIỀN VÀ QUYỀN THU HỒI",
    blocks: [
      { type: "p", text: "Cuối năm, doanh nghiệp thường đồng thời phải cân đối tiền lương, nghĩa vụ thuế, thanh toán nhà cung cấp và kế hoạch vốn cho năm tiếp theo. Khi nhiều khách hàng cùng chậm trả, việc chỉ ưu tiên khoản nợ lớn nhất hoặc gửi thư nhắc thanh toán hàng loạt chưa chắc đem lại hiệu quả." },
      { type: "p", text: "Câu hỏi quản trị quan trọng hơn là: khoản nào có nguy cơ mất quyền yêu cầu, mất khả năng thu hồi hoặc ảnh hưởng lớn nhất đến dòng tiền nếu tiếp tục chậm xử lý? Doanh nghiệp nên phân loại danh mục công nợ theo mức độ cấp bách pháp lý, khả năng thu tiền thực tế, chất lượng chứng cứ, chi phí xử lý và giá trị quan hệ thương mại. Đây là các tiêu chí quản trị đề xuất, không phải thứ tự ưu tiên bắt buộc theo luật." },
      { type: "h2", text: "01 | KHOẢN NỢ NÀO ĐANG CÓ RỦI RO VỀ THỜI HIỆU KHỞI KIỆN?" },
      { type: "p", text: "Điều 319 Luật Thương mại 2005 quy định thời hiệu khởi kiện đối với tranh chấp thương mại về nguyên tắc là 02 năm kể từ thời điểm quyền, lợi ích hợp pháp bị xâm phạm, trừ trường hợp pháp luật có quy định khác. Đối với tranh chấp hợp đồng dân sự thuộc Điều 429 Bộ luật Dân sự 2015, thời hiệu là 03 năm kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp của mình bị xâm phạm. Cần xác định đúng bản chất tranh chấp và mốc tính thời hiệu trước khi lựa chọn phương án xử lý. [1][2]" },
      { type: "p", text: "Các khoản nợ có nguy cơ hết thời hiệu cần được rà soát ngay. Theo Điều 157 Bộ luật Dân sự 2015, việc bên có nghĩa vụ thừa nhận nghĩa vụ, thực hiện xong một phần nghĩa vụ hoặc các bên tự hòa giải có thể làm bắt đầu lại thời hiệu khi đáp ứng điều kiện luật định; việc gia hạn thanh toán không mặc nhiên có hệ quả này. Theo khoản 2 Điều 149 Bộ luật Dân sự 2015, Tòa án chỉ áp dụng thời hiệu theo yêu cầu hợp lệ của một bên trước khi Tòa án cấp sơ thẩm ra bản án, quyết định giải quyết vụ việc. Doanh nghiệp không nên chờ đến cuối năm mới kiểm tra thời hiệu. [2]" },
      { type: "h2", text: "02 | ĐỐI TÁC CÓ DẤU HIỆU SUY GIẢM KHẢ NĂNG THANH TOÁN HAY CHUYỂN DỊCH TÀI SẢN?" },
      { type: "p", text: "Những dấu hiệu đáng kiểm tra gồm: chậm trả nhiều chủ nợ, ngừng hoạt động tại địa chỉ đăng ký, phát sinh tranh chấp hoặc thay đổi bất thường đối với tài sản trọng yếu. Tuy nhiên, thay đổi người đại diện, chuyển nhượng vốn hoặc gặp khó khăn dòng tiền không tự thân chứng minh hành vi tẩu tán tài sản. Doanh nghiệp cần xác minh thông tin từ nguồn hợp pháp và đánh giá từng tình huống cụ thể." },
      { type: "p", text: "Khi có căn cứ về nguy cơ ảnh hưởng đến việc thi hành án, doanh nghiệp nên bảo toàn chứng cứ, đánh giá khả năng thương lượng và chuẩn bị phương án tố tụng kịp thời. Yêu cầu Tòa án áp dụng biện pháp khẩn cấp tạm thời, như phong tỏa tài khoản hoặc cấm chuyển dịch quyền về tài sản, phải đáp ứng điều kiện tương ứng theo Bộ luật Tố tụng dân sự 2015 và Nghị quyết 02/2020/NQ-HĐTP. Tuy nhiên, cần lưu ý rằng, không phải mọi êu cầu đều đủ căn cứ để Toàn án chập nhận, việc chấp nhận yêu cầu cần phải thỏa mãn các yêu cầu của luật định. [3]" },
      { type: "h2", text: "03 | ĐÁNH GIÁ CHỨNG CỨ: HỒ SƠ ĐÃ ĐỦ CĂN CỨ ĐỂ KHỞI KIỆN?" },
      { type: "p", text: "Trước khi chọn biện pháp xử lý, cần kiểm tra chuỗi tài liệu chứng minh giao dịch, việc thực hiện nghĩa vụ, số tiền đã thanh toán và dư nợ thực tế:" },
      {
        type: "list",
        items: [
        "Hồ sơ tương đối đầy đủ: Hợp đồng, đơn hàng, chứng từ giao nhận/nghiệm thu, sao kê, hóa đơn và đối chiếu công nợ thống nhất là những tài liệu quan trọng. Tuy nhiên, không có tài liệu đơn lẻ nào mặc nhiên bảo đảm thắng kiện; vẫn phải đánh giá tính xác thực, thẩm quyền ký và sự phù hợp giữa các chứng cứ.",
        "Hồ sơ còn thiếu hoặc có mâu thuẫn: Cần ưu tiên đối chiếu công nợ, yêu cầu xác nhận bằng văn bản từ người có thẩm quyền và bảo quản dữ liệu gốc của email, tin nhắn, giao dịch điện tử. Việc đối tác thanh toán một phần có thể là chứng cứ về nghĩa vụ nhưng không nên đề nghị thanh toán tượng trưng chỉ để tạo lập chứng cứ thiếu trung thực. Không trì hoãn biện pháp bảo vệ quyền khởi kiện chỉ để chờ hoàn thiện hồ sơ.",
        ],
      },
      { type: "h2", text: "04 | KHẢ NĂNG THU TIỀN THỰC TẾ CÓ TƯƠNG XỨNG VỚI CHI PHÍ XỬ LÝ?" },
      { type: "p", text: "Mục tiêu cuối cùng của doanh nghiệp trong mọi tranh chấp công nợ không phải là một bản án thắng kiện trên giấy tờ, mà là dòng tiền thực tế được thu hồi về tài khoản. Việc khởi kiện và giành thắng lợi tại Tòa án hay Trọng tài cũng sẽ không mang lại giá trị về mặt kinh tế cho doanh nghiệp nếu bên có nghĩa vụ không còn tài sản để thi hành án; đồng thời, chi phí để tham gia giải quyết cũng là một vấn đề đáng phải cân nhắc. Bản án hoặc phán quyết có lợi chưa đồng nghĩa doanh nghiệp sẽ thu được tiền." },
      { type: "p", text: "Do đó, trước khi tiến hành hành động pháp lý như khởi kiện, cần cân nhắc khả năng xác định tài sản hợp pháp của bên có nghĩa vụ, tài sản đã được bảo đảm cho chủ nợ khác, thời gian dự kiến, án phí/chi phí tố tụng, chi phí thi hành án và tác động đến hoạt động kinh doanh. Giá trị ghi sổ của khoản phải thu cần được phân biệt với giá trị có khả năng thu hồi trên thực tế." },
      {
        type: "list",
        items: [
        "Với đối tác còn hoạt động, có thiện chí và chứng minh được dòng tiền trả nợ, doanh nghiệp có thể cân nhắc lịch trình thanh toán, thanh toán trước một phần và biện pháp bảo đảm hợp lệ; thỏa thuận cần quy định rõ số dư, thời hạn, lãi và hậu quả vi phạm từng kỳ.",
        "Với đối tác né tránh nghĩa vụ hoặc có nguy cơ dịch chuyển tài sản, cần đánh giá việc khởi kiện và biện pháp bảo vệ tài sản phù hợp, thay vì tiếp tục gia hạn vô điều kiện. Với khoản nợ có giá trị nhỏ nhưng hồ sơ rõ và đối tác có khả năng thanh toán, một phương án thương lượng nhanh đôi khi hiệu quả hơn tranh chấp kéo dài.",
        ],
      },
      { type: "h2", text: "05 | BẢNG THAM KHẢO ƯU TIÊN HÀNH ĐỘNG" },
      {
        type: "table",
        head: ["Thứ tự ưu tiên", "Tình trạng pháp lý của khoản nợ", "Phương án hành động trọng tâm"],
        rows: [
        ["Nhóm 1: Cấp bách pháp lý", "Cận thời hiệu; có chứng cứ cụ thể về nguy cơ chuyển dịch tài sản hoặc suy giảm khả năng thi hành.", "Kiểm tra mốc thời hiệu; bảo toàn chứng cứ; cân nhắc khởi kiện và biện pháp khẩn cấp tạm thời khi đủ điều kiện."],
        ["Nhóm 2: Có thể thu nhanh", "Khoản nợ đã xác định rõ; đối tác còn dòng tiền hoặc có khả năng thanh toán; chi phí xử lý hợp lý.", "Đặt thời hạn thanh toán cụ thể, đàm phán phương án trả ngay/trả từng kỳ có kiểm soát; chuẩn bị phương án pháp lý nếu vi phạm."],
        ["Nhóm 3: Cần củng cố chứng cứ", "Thiếu chứng từ giao nhận, chưa đối chiếu số dư hoặc còn tranh cãi về nghĩa vụ.", "Đối chiếu công nợ, xác minh người có thẩm quyền, bảo quản dữ liệu điện tử; đồng thời theo dõi thời hiệu."],
        ["Nhóm 4: Tái cấu trúc có điều kiện", "Đối tác quan trọng, khó khăn tạm thời nhưng có kế hoạch trả nợ và nguồn tiền có thể kiểm chứng.", "Thỏa thuận bằng văn bản về lịch trả, lãi, bảo đảm và điều khoản toàn bộ dư nợ đến hạn khi vi phạm."],
        ["Nhóm 5: Rủi ro mất vốn cao", "Khả năng thanh toán rất thấp; đối tác ngừng hoạt động hoặc có thông tin về thủ tục giải thể; phục hồi, phá sản.", "Đánh giá chi phí–lợi ích; xem xét nộp đơn yêu cầu Tòa án mở thủ tục phá sản đối tác theo thủ tục được quy định trong Luật Phục hồi, Phá sản 2025. [4] Theo dõi thủ tục phục hồi, phá sản và thời hạn khai báo khoản nợ; xem xét xử lý kế toán, thuế theo điều kiện riêng của pháp luật. Không mặc nhiên coi khoản nợ là không thu hồi được."],
        ],
      },
      { type: "h2", text: "06 | KẾT LUẬN" },
      { type: "p", text: "Không có một thứ tự xử lý công nợ phù hợp cho mọi doanh nghiệp. Khoản cần ưu tiên không nhất thiết là khoản lớn nhất, mà là khoản có rủi ro tăng nhanh nếu chậm hành động hoặc có khả năng chuyển thành dòng tiền với chi phí hợp lý. Doanh nghiệp nên lập danh mục công nợ theo từng đối tác, ghi rõ số dư, tuổi nợ, thời hiệu dự kiến, tình trạng chứng cứ, khả năng thanh toán, tài sản bảo đảm và bước xử lý tiếp theo; cập nhật định kỳ thay vì chỉ rà soát vào thời điểm khóa sổ cuối năm." },
      { type: "p", text: "Integritas Vũ Legal hỗ trợ doanh nghiệp rà soát danh mục công nợ, xác định rủi ro thời hiệu, củng cố chứng cứ, xây dựng phương án thương lượng và lựa chọn biện pháp tố tụng, thi hành án phù hợp với từng khoản phải thu. Để trao đổi về chiến lược xử lý công nợ cuối năm, vui lòng liên hệ: contact@integritasvulegal.com." },
      { type: "h2", text: "NGUỒN PHÁP LÝ VÀ DỮ LIỆU THAM KHẢO" },
      { type: "note", text: "[1] Luật Thương mại số 36/2005/QH11, Điều 319 (lưu ý ngoại lệ theo luật chuyên ngành)." },
      { type: "note", text: "[2] Bộ luật Dân sự số 91/2015/QH13, Điều 149, 157, 429 và quy định về bảo đảm thực hiện nghĩa vụ." },
      { type: "note", text: "[3] Bộ luật Tố tụng dân sự số 92/2015/QH13, Điều 111–114, 120–126, 136; Nghị quyết 02/2020/NQ-HĐTP." },
      { type: "note", text: "[4] Luật Phục hồi, phá sản số 142/2025/QH15 (hiệu lực từ 01/03/2026), các quy định về quyền của chủ nợ, điều kiện và thủ tục phục hồi, phá sản." },
      { type: "h2", text: "THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ" },
      { type: "note", text: "© 2026 Integritas Vũ Legal. Nội dung bài viết do Công Ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal biên soạn và công bố; các quyền đối với phần nội dung thuộc phạm vi bảo hộ được thực hiện theo quy định pháp luật về sở hữu trí tuệ. Không được sao chép, chỉnh sửa, tái bản, phân phối hoặc khai thác nội dung vì mục đích thương mại khi chưa có sự chấp thuận của chủ thể có quyền, trừ các trường hợp được pháp luật cho phép. Khi trích dẫn hợp pháp, đề nghị ghi rõ nguồn và đường dẫn đến bài viết gốc." },
      { type: "note", text: "Bài viết chỉ cung cấp thông tin pháp lý tổng quát tại thời điểm công bố, không phải ý kiến tư vấn pháp lý cho một vụ việc cụ thể, không tạo lập quan hệ luật sư – khách hàng và không thay thế việc đánh giá hồ sơ, chứng cứ, thỏa thuận và quy định áp dụng. Người đọc không nên tự ý dựa duy nhất vào nội dung này để thực hiện, trì hoãn hoặc từ bỏ bất kỳ biện pháp pháp lý nào. Kết quả xử lý phụ thuộc vào tình tiết và pháp luật áp dụng trong từng trường hợp; nội dung có thể cần cập nhật khi pháp luật hoặc thực tiễn áp dụng thay đổi." },
    ],
  },
  en: {
    title: "AT YEAR-END, WHICH OUTSTANDING RECEIVABLES SHOULD BUSINESSES PRIORITISE? CRITERIA FOR PROTECTING CASH FLOW AND RECOVERY RIGHTS",
    blocks: [
      { type: "p", text: "At year-end, businesses often need to balance employee salaries, tax obligations, payments to suppliers and capital planning for the following year simultaneously. When multiple customers are late in making payments, prioritising only the largest outstanding debt or sending payment reminders en masse may not necessarily be effective." },
      { type: "p", text: "The more important management question is: which receivables are at risk of losing the right to bring a claim, becoming uncollectible or having the greatest impact on cash flow if action is further delayed? Businesses should classify their receivables portfolios according to legal urgency, the practical likelihood of recovery, the quality of evidence, the costs of recovery and the value of commercial relationships. These are proposed management criteria, not a legally mandatory order of priority." },
      { type: "h2", text: "01 | WHICH RECEIVABLES ARE AT RISK OF EXPIRY OF THE LIMITATION PERIOD FOR INITIATING LEGAL PROCEEDINGS?" },
      { type: "p", text: "Article 319 of the 2005 Commercial Law provides that, in principle, the limitation period for initiating legal proceedings in commercial disputes is two years from the date on which lawful rights or interests were infringed, unless otherwise provided by law. For civil contractual disputes governed by Article 429 of the 2015 Civil Code, the limitation period is three years from the date on which the person entitled to bring a claim knew or ought to have known that their lawful rights or interests were infringed. Businesses should correctly determine the nature of the dispute and the starting point of the limitation period before choosing a course of action. [1][2]" },
      { type: "p", text: "Receivables at risk of becoming time-barred should be reviewed immediately. Under Article 157 of the 2015 Civil Code, acknowledgement of an obligation by the obligor, performance of part of the obligation or voluntary reconciliation between the parties may cause the limitation period to recommence where the statutory conditions are met; an extension of the payment deadline does not automatically have this effect. Under Clause 2, Article 149 of the 2015 Civil Code, a Court applies the limitation period only upon a valid request by a party made before the first-instance Court issues its judgment or decision resolving the matter. Businesses should not wait until year-end to review limitation periods. [2]" },
      { type: "h2", text: "02 | DOES THE COUNTERPARTY SHOW SIGNS OF DECLINING PAYMENT CAPACITY OR TRANSFERRING ASSETS?" },
      { type: "p", text: "Indicators worth examining include late payments to multiple creditors, cessation of operations at the registered address, emerging disputes or unusual changes involving material assets. However, a change of legal representative, transfer of capital or cash-flow difficulties do not, in themselves, establish asset dissipation. Businesses should verify information from lawful sources and assess each situation on its own facts." },
      { type: "p", text: "Where there are grounds to believe that enforcement of a judgment may be adversely affected, businesses should preserve evidence, assess the prospects of negotiation and prepare a timely litigation strategy. Applications for interim urgent measures, such as freezing accounts or prohibiting the transfer of rights over property, must satisfy the applicable requirements under the 2015 Civil Procedure Code and Resolution No. 02/2020/NQ-HĐTP. Not every application will have sufficient grounds to be granted by the Court; the relevant statutory requirements must be met. [3]" },
      { type: "h2", text: "03 | ASSESSING EVIDENCE: IS THERE SUFFICIENT EVIDENCE TO INITIATE LEGAL PROCEEDINGS?" },
      { type: "p", text: "Before selecting a course of action, businesses should review the chain of documents evidencing the transaction, performance of obligations, amounts already paid and the actual outstanding balance:" },
      {
        type: "list",
        items: [
        "Relatively complete documentation: Contracts, purchase orders, delivery or acceptance records, bank statements, invoices and consistent debt reconciliations are important documents. However, no single document automatically guarantees success in litigation; the authenticity of the evidence, the signatory’s authority and the consistency of the documents must still be assessed.",
        "Incomplete or inconsistent documentation: Priority should be given to reconciling outstanding balances, obtaining written confirmation from an authorised person and preserving original data from emails, messages and electronic transactions. A partial payment by the counterparty may constitute evidence of an obligation, but a nominal payment should not be solicited solely to manufacture misleading evidence. Measures to protect the right to initiate legal proceedings should not be delayed merely to complete the documentation.",
        ],
      },
      { type: "h2", text: "04 | IS THE PRACTICAL LIKELIHOOD OF RECOVERY PROPORTIONATE TO THE COSTS INVOLVED?" },
      { type: "p", text: "The ultimate objective of a business in a receivables dispute is not merely to obtain a favourable judgment on paper, but to recover funds into its account. Even a successful outcome before a Court or arbitral tribunal may have no economic value to the business if the obligor has no assets available for enforcement; the costs of resolving the dispute must also be considered. A favourable judgment or arbitral award does not necessarily mean that the business will recover its money." },
      { type: "p", text: "Therefore, before taking legal action such as initiating proceedings, businesses should consider the ability to identify assets lawfully belonging to the obligor, assets already provided as security to other creditors, the expected timeframe, court fees and litigation costs, enforcement costs and the impact on business operations. The book value of a receivable should be distinguished from the amount realistically recoverable." },
      {
        type: "list",
        items: [
        "For counterparties that remain operational, demonstrate willingness to pay and can substantiate their repayment cash flow, businesses may consider a repayment schedule, partial advance payment and legally valid security. The agreement should clearly specify the outstanding balance, payment deadlines, interest and the consequences of default on each instalment.",
        "For counterparties avoiding their obligations or presenting a risk of asset transfers, businesses should assess litigation and appropriate asset-protection measures rather than continuing to grant unconditional extensions. For a relatively small receivable supported by clear documentation, where the counterparty has the ability to pay, a prompt negotiated resolution may sometimes be more effective than prolonged proceedings.",
        ],
      },
      { type: "h2", text: "05 | REFERENCE TABLE FOR PRIORITISING ACTION" },
      {
        type: "table",
        head: ["Priority order", "Legal status of the receivable", "Principal course of action"],
        rows: [
        ["Group 1: Legally urgent", "Approaching expiry of the limitation period; specific evidence of a risk of asset transfers or a decline in the ability to satisfy an enforceable judgment.", "Check the limitation period; preserve evidence; consider initiating proceedings and applying for interim urgent measures where the statutory conditions are met."],
        ["Group 2: Potential for prompt recovery", "The debt is clearly established; the counterparty still has cash flow or the ability to pay; recovery costs are reasonable.", "Set a specific payment deadline; negotiate immediate payment or controlled instalment payments; prepare legal action in the event of default."],
        ["Group 3: Evidence needs strengthening", "Delivery records are missing, balances have not been reconciled or the obligation remains disputed.", "Reconcile outstanding balances, verify the authority of relevant persons and preserve electronic data; monitor the limitation period at the same time."],
        ["Group 4: Conditional restructuring", "An important counterparty is experiencing temporary difficulties but has a repayment plan and verifiable sources of funds.", "Agree in writing on the repayment schedule, interest, security and an acceleration clause making the entire outstanding balance due upon default."],
        ["Group 5: High risk of loss", "Payment capacity is very low; the counterparty has ceased operations or there is information concerning dissolution, recovery or bankruptcy proceedings.", "Assess costs and benefits; consider petitioning the Court to commence bankruptcy proceedings against the counterparty in accordance with the procedures prescribed by the 2025 Law on Recovery and Bankruptcy. [4] Monitor recovery and bankruptcy proceedings and the deadlines for declaring claims; consider accounting and tax treatment subject to the specific legal requirements. Do not automatically treat the debt as irrecoverable."],
        ],
      },
      { type: "h2", text: "06 | CONCLUSION" },
      { type: "p", text: "There is no single order for handling receivables that suits every business. The receivable to prioritise is not necessarily the largest, but rather one for which the risk increases rapidly if action is delayed or which can be converted into cash at a reasonable cost. Businesses should maintain a receivables register for each counterparty, recording the outstanding balance, age of the debt, estimated limitation period, evidential position, payment capacity, security and next action; this register should be updated regularly rather than reviewed only at year-end closing." },
      { type: "p", text: "Integritas Vu Legal assists businesses in reviewing their receivables portfolios, identifying limitation-period risks, strengthening evidence, developing negotiation strategies and selecting litigation and judgment-enforcement measures appropriate to each receivable. To discuss a year-end receivables management strategy, please contact: contact@integritasvulegal.com." },
      { type: "h2", text: "LEGAL SOURCES AND REFERENCE MATERIALS" },
      { type: "note", text: "[1] Commercial Law No. 36/2005/QH11, Article 319 (subject to exceptions under specialised legislation)." },
      { type: "note", text: "[2] Civil Code No. 91/2015/QH13, Articles 149, 157 and 429, and provisions on security for the performance of obligations." },
      { type: "note", text: "[3] Civil Procedure Code No. 92/2015/QH13, Articles 111–114, 120–126 and 136; Resolution No. 02/2020/NQ-HĐTP." },
      { type: "note", text: "[4] Law on Recovery and Bankruptcy No. 142/2025/QH15 (effective from 1 March 2026), provisions on creditors’ rights and the conditions and procedures for recovery and bankruptcy." },
      { type: "h2", text: "LEGAL NOTICE AND COPYRIGHT" },
      { type: "note", text: "© 2026 Integritas Vu Legal. This article was prepared and published by Integritas Vu Legal LLC. Rights in its content, to the extent protected by intellectual property law, are reserved and exercised in accordance with applicable law. No part may be reproduced, modified, republished, distributed or commercially exploited without the rights holder’s consent, except as permitted by law. Any lawful quotation should acknowledge the source and link to the original article." },
      { type: "note", text: "This article is provided for general legal information as at the date of publication. It does not constitute legal advice on any specific matter, establish a lawyer–client relationship or replace an assessment of the relevant documents, evidence, agreements and applicable law. Readers should not rely solely on this article in deciding whether to take, defer or refrain from legal action. Outcomes depend on the facts and applicable law in each case, and the content may require revision as legislation or legal practice evolves." },
    ],
  },
};
