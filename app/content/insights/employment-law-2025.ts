import type { Article } from "./types";

/**
 * Legal Insights, ninth article ("Employment Law 2025: key unemployment insurance changes for employers"). Generated with
 * `scripts/drive-sync/convert.py` from the Client's `Blogs/16_11 - Luật Việc làm 2025 - Viet ver.docx` and `Blogs/16_11- Luật Việc làm 2025 - Eng ver.docx`, then checked line by
 * line against the Word files: every line is on the page. Do not tidy the wording here:
 * ivl-content-update rule, the Client is a law firm.
 *
 * One exception, as on the earlier articles (site owner, 2026-10-28): the Vietnamese legal
 * notice's "Trách Nhiện Hữu Hạn" reads "Trách Nhiệm Hữu Hạn".
 */
export const employmentLaw2025: Article = {
  slug: "luat-viec-lam-2025-nhung-thay-doi-ve-bao-hiem-that-nghiep-doanh-nghiep-can-luu-y",
  // The date in the names of the Client's files for this article.
  publishedAt: "2026-11-16",
  // TODO(client): confirm the category. "Legal Insight" like the other articles.
  category: 1,
  coverImage: "/images/blog/employment-law-2025.jpg",
  coverPosition: "50% 62%",
  vi: {
    "title": "LUẬT VIỆC LÀM 2025: NHỮNG THAY ĐỔI VỀ BẢO HIỂM THẤT NGHIỆP DOANH NGHIỆP CẦN LƯU Ý",
    "kicker": [
      "CHUYÊN ĐỀ: PHÁP LUẬT LAO ĐỘNG VÀ BẢO HIỂM"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Từ ngày 01/01/2026, Luật Việc làm số 74/2025/QH15 và Nghị định số 374/2025/NĐ-CP có hiệu lực, điều chỉnh nhiều nội dung quan trọng của chính sách bảo hiểm thất nghiệp (BHTN). Đối với doanh nghiệp, việc cập nhật không chỉ dừng ở mức đóng mà còn liên quan đến đối tượng tham gia, căn cứ tiền lương, xử lý thời gian đóng và trách nhiệm khi chấm dứt quan hệ lao động. [3][4]"
      },
      {
        "type": "p",
        "text": "Bài viết phân tích những điểm thay đổi đáng lưu ý và các bước tuân thủ thực tiễn."
      },
      {
        "type": "h2",
        "text": "01 | ĐỐI TƯỢNG THAM GIA BHTN: KHÔNG CHỈ CĂN CỨ TÊN GỌI HỢP ĐỒNG"
      },
      {
        "type": "p",
        "text": "Điều 31 Luật Việc làm 2025 mở rộng và quy định rõ hơn phạm vi tham gia BHTN. Doanh nghiệp cần xác định bản chất quan hệ lao động, loại hợp đồng, điều kiện về tiền lương và các trường hợp loại trừ, thay vì chỉ dựa vào chức danh hoặc tên văn bản ký kết. [1][3]"
      },
      {
        "type": "list",
        "items": [
          "Người làm việc theo hợp đồng lao động không xác định thời hạn hoặc hợp đồng xác định thời hạn từ đủ 01 tháng trở lên thuộc diện tham gia, trừ trường hợp loại trừ theo khoản 2 Điều 31. Người làm việc theo hợp đồng làm việc và một số chức danh quản lý có hưởng tiền lương cũng thuộc phạm vi quy định tại khoản 1 Điều 31. [3]",
          "Một thỏa thuận mang tên “hợp đồng cộng tác viên”, “hợp đồng dịch vụ” hoặc tên gọi khác vẫn có thể thuộc diện tham gia nếu nội dung thể hiện việc làm có trả công, tiền lương và sự quản lý, điều hành, giám sát của một bên. Việc xác định phải dựa trên nội dung và thực tế thực hiện. [1][3]",
          "Người làm việc không trọn thời gian thuộc điểm a khoản 1 Điều 31 phải tham gia BHTN khi tiền lương trong tháng bằng hoặc cao hơn mức tiền lương làm căn cứ đóng BHXH bắt buộc thấp nhất theo Luật Bảo hiểm xã hội. Khoản 2 Điều 31 loại trừ, trong số các trường hợp luật định, người đang hưởng lương hưu, người đủ điều kiện hưởng lương hưu, người làm việc theo hợp đồng thử việc và người giúp việc gia đình. [3]"
        ]
      },
      {
        "type": "h2",
        "text": "02 | MỨC ĐÓNG: KHUNG “TỐI ĐA 1%” KHÔNG PHẢI QUYỀN TỰ CHỌN"
      },
      {
        "type": "p",
        "text": "Khoản 1 Điều 33 Luật Việc làm 2025 quy định mức đóng tối đa bằng 1% đối với người lao động và người sử dụng lao động. Điều 4 Nghị định 374/2025/NĐ-CP quy định mức áp dụng là 1% tiền lương tháng của người lao động và 1% quỹ tiền lương tháng của người lao động tham gia BHTN đối với người sử dụng lao động. Doanh nghiệp không được tự đặt mức thấp hơn khi chưa có căn cứ pháp lý. [3][4]"
      },
      {
        "type": "p",
        "text": "So với Điều 57 Luật Việc làm 2013, điểm thay đổi nằm ở kỹ thuật quy định mức trần trong luật và việc giao Chính phủ xác định mức cụ thể. Mức đóng hiện hành vẫn là 1% cho mỗi bên; doanh nghiệp cần phân biệt “khung tối đa” với “tỷ lệ thực tế phải đóng”. [2][3][4]"
      },
      {
        "type": "h2",
        "text": "03 | CĂN CỨ TIỀN LƯƠNG ĐÓNG BHTN: RÀ SOÁT THEO BẢN CHẤT KHOẢN TRẢ"
      },
      {
        "type": "p",
        "text": "Điều 34 Luật Việc làm 2025 phân biệt căn cứ đóng theo chế độ tiền lương do Nhà nước quy định và chế độ tiền lương do người sử dụng lao động quyết định. Với doanh nghiệp áp dụng thang bảng lương của mình, cần rà soát hợp đồng, phụ lục, bảng lương và cách chi trả trên thực tế. [3]"
      },
      {
        "type": "list",
        "items": [
          "Đối với chế độ tiền lương do người sử dụng lao động quyết định, căn cứ đóng gồm mức lương theo công việc hoặc chức danh, phụ cấp lương và khoản bổ sung khác được thỏa thuận trả thường xuyên, ổn định trong mỗi kỳ trả lương. Không thể loại trừ một khoản chỉ vì doanh nghiệp đặt tên là “hỗ trợ” hoặc “phúc lợi”; ngược lại, không phải mọi khoản thưởng hay chi trả không thường xuyên đều mặc nhiên là căn cứ đóng. [3]",
          "Khoản 2 Điều 34 quy định mức tiền lương làm căn cứ đóng BHTN cao nhất bằng 20 lần mức lương tối thiểu tháng theo vùng do Chính phủ công bố tại thời điểm đóng. Đây là giới hạn của căn cứ đóng BHTN, không phải giới hạn tiền lương được thỏa thuận trong hợp đồng lao động. [3]",
          "Trường hợp ngừng việc mà người lao động vẫn hưởng lương tháng bằng hoặc cao hơn mức lương làm căn cứ đóng BHXH bắt buộc thấp nhất thì đóng BHTN theo tiền lương được hưởng trong thời gian ngừng việc. Khi người lao động bị tạm giam hoặc tạm đình chỉ công việc, việc tạm dừng đóng và đóng bù nếu được truy lĩnh đủ lương phải thực hiện theo khoản 3 Điều 34. Cần đồng thời kiểm tra quy định chi tiết và dữ liệu BHXH thực tế. [3][4]"
        ]
      },
      {
        "type": "h2",
        "text": "04 | TRÁCH NHIỆM KHI CHẤM DỨT HỢP ĐỒNG: KHÔNG CHỈ LÀ CHỐT SỔ BẢO HIỂM"
      },
      {
        "type": "p",
        "text": "Khoản 7 Điều 33 Luật Việc làm 2025 đặt ra trách nhiệm đóng đủ BHTN khi chấm dứt hợp đồng lao động, hợp đồng làm việc hoặc chấm dứt làm việc để giải quyết chế độ cho người lao động. Trường hợp không đóng đủ, người sử dụng lao động phải trả khoản tiền tương ứng với chế độ BHTN mà người lao động được hưởng theo quy định. Doanh nghiệp cần đối chiếu số tiền đã đóng, thời gian còn thiếu và hồ sơ của từng người lao động trước khi quyết toán nghỉ việc. [3]"
      },
      {
        "type": "p",
        "text": "BHTN là chế độ bảo hiểm; trợ cấp thôi việc và trợ cấp mất việc làm là những nghĩa vụ khác, được xác định theo căn cứ chấm dứt và điều kiện của Bộ luật Lao động 2019. Việc người lao động có thể hưởng trợ cấp thất nghiệp không tự động miễn trừ nghĩa vụ trả trợ cấp thôi việc hoặc trợ cấp mất việc làm nếu pháp luật yêu cầu. Cần phân định thời gian đã tham gia BHTN khi tính các khoản trợ cấp theo quy định tương ứng. [1][3]"
      },
      {
        "type": "p",
        "text": "Đối với phương án thay đổi cơ cấu, công nghệ hoặc vì lý do kinh tế, doanh nghiệp phải đánh giá riêng căn cứ thực tế, phương án sử dụng lao động, nghĩa vụ tham vấn, thông báo và trợ cấp mất việc làm theo Điều 42, 44 và 47 Bộ luật Lao động 2019; không được xem việc thanh toán BHTN hoặc khoản hỗ trợ tự nguyện là phương thức thay thế thủ tục chấm dứt hợp đồng. [1]"
      },
      {
        "type": "h2",
        "text": "LƯU Ý VẬN HÀNH | ĐỐI CHIẾU DỮ LIỆU TRƯỚC KHI CHỐT QUYẾT TOÁN"
      },
      {
        "type": "p",
        "text": "Bộ phận nhân sự và kế toán nên thống nhất danh sách lao động thuộc diện BHTN với dữ liệu kê khai, mức lương thực trả, thời điểm bắt đầu hoặc chấm dứt tham gia, các tháng ngừng việc và tình trạng đóng thiếu. Các trường hợp hợp đồng mang tên gọi khác, lao động không trọn thời gian hoặc có thay đổi cơ cấu thu nhập cần được kiểm tra riêng. Việc xử lý truy đóng, điều chỉnh hồ sơ và xác nhận thời gian đóng phải thực hiện theo thủ tục áp dụng, không tự suy đoán chỉ từ bảng lương nội bộ. [1][3][4]"
      },
      {
        "type": "h2",
        "text": "05 | CHECKLIST TUÂN THỦ DÀNH CHO DOANH NGHIỆP"
      },
      {
        "type": "p",
        "text": "Trước khi kết thúc năm, doanh nghiệp nên: (i) phân loại hợp đồng và trường hợp loại trừ BHTN; (ii) kiểm tra tiền lương làm căn cứ đóng, trần đóng và mức đóng 1%; (iii) đối chiếu dữ liệu đóng và khoản còn thiếu; (iv) xác định đúng căn cứ pháp lý của từng trường hợp chấm dứt; (v) lập bảng quyết toán lương, phép năm, trợ cấp và các khoản thỏa thuận; (vi) hoàn tất hồ sơ, xác nhận quá trình đóng bảo hiểm; và (vii) cân nhắc hỗ trợ đào tạo, duy trì việc làm hoặc kết nối việc làm theo điều kiện pháp luật."
      },
      {
        "type": "h2",
        "text": "TUÂN THỦ BHTN LÀ MỘT PHẦN CỦA QUẢN TRỊ RỦI RO LAO ĐỘNG"
      },
      {
        "type": "p",
        "text": "Luật Việc làm 2025 đòi hỏi doanh nghiệp nhìn BHTN như một chuỗi nghĩa vụ liên tục: xác định đúng đối tượng, tính đúng căn cứ và mức đóng, lưu giữ dữ liệu chính xác và hoàn tất trách nhiệm khi quan hệ lao động chấm dứt. Việc tuân thủ ngay từ đầu giảm rủi ro tranh chấp, truy đóng và gián đoạn quyền lợi của người lao động."
      },
      {
        "type": "list",
        "items": [
          "Đối với các kế hoạch tái cơ cấu, doanh nghiệp cần đánh giá độc lập căn cứ chấm dứt và hồ sơ chứng minh; không nên xem việc đóng BHTN hoặc chi trả hỗ trợ thêm là sự thay thế cho thủ tục và nghĩa vụ theo Bộ luật Lao động. [1][3]",
          "Đối với người lao động, cần kiểm tra quyền lợi theo từng căn cứ pháp lý, bảo quản chứng từ và tuân thủ thời hạn đề nghị hưởng trợ cấp thất nghiệp. [1][3]"
        ]
      },
      {
        "type": "p",
        "text": "Integritas Vũ Legal hỗ trợ doanh nghiệp rà soát hợp đồng, hệ thống tiền lương và nghĩa vụ bảo hiểm; tư vấn phương án tái cơ cấu, chấm dứt hợp đồng lao động và quản trị tranh chấp trên cơ sở hồ sơ, chứng cứ của từng trường hợp."
      },
      {
        "type": "h2",
        "text": "NGUỒN PHÁP LÝ VÀ TÀI LIỆU THAM KHẢO"
      },
      {
        "type": "note",
        "text": "[1] Bộ luật Lao động số 45/2019/QH14 (đặc biệt các Điều 13, 34, 41–44, 46–48, 113, 188): https://vanban.chinhphu.vn/?classid=1&docid=198540&pageid=27160"
      },
      {
        "type": "note",
        "text": "[2] Luật Việc làm số 38/2013/QH13 (chỉ dùng để đối chiếu pháp luật trước 01/01/2026): https://vbpl.vn/"
      },
      {
        "type": "note",
        "text": "[3] Luật Việc làm số 74/2025/QH15 (các Điều 31–35, 37–39, 42): https://vanban.chinhphu.vn/?docid=214560&pageid=27160"
      },
      {
        "type": "note",
        "text": "[4] Nghị định số 374/2025/NĐ-CP ngày 31/12/2025 (quy định chi tiết về BHTN): https://vanban.chinhphu.vn/?classid=1&docid=216493&pageid=27160"
      },
      {
        "type": "note",
        "text": "[5] Luật Bảo hiểm xã hội số 41/2024/QH15 (đối chiếu căn cứ đóng BHXH bắt buộc và điều kiện hưởng lương hưu): https://vbpl.vn/"
      },
      {
        "type": "h2",
        "text": "THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ"
      },
      {
        "type": "note",
        "text": "© 2026 Integritas Vũ Legal. Nội dung bài viết do Công Ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal biên soạn và công bố; các quyền đối với phần nội dung thuộc phạm vi bảo hộ được thực hiện theo quy định pháp luật về sở hữu trí tuệ. Không được sao chép, chỉnh sửa, tái bản, phân phối hoặc khai thác nội dung vì mục đích thương mại khi chưa có sự chấp thuận của chủ thể có quyền, trừ các trường hợp được pháp luật cho phép. Khi trích dẫn hợp pháp, đề nghị ghi rõ nguồn và đường dẫn đến bài viết gốc."
      },
      {
        "type": "note",
        "text": "Bài viết chỉ cung cấp thông tin pháp lý tổng quát tại thời điểm công bố, không phải ý kiến tư vấn pháp lý cho một vụ việc cụ thể, không tạo lập quan hệ luật sư – khách hàng và không thay thế việc đánh giá hồ sơ, chứng cứ, thỏa thuận và quy định áp dụng. Người đọc không nên tự ý dựa duy nhất vào nội dung này để thực hiện, trì hoãn hoặc từ bỏ bất kỳ biện pháp pháp lý nào. Kết quả xử lý phụ thuộc vào tình tiết và pháp luật áp dụng trong từng trường hợp; nội dung có thể cần cập nhật khi pháp luật hoặc thực tiễn áp dụng thay đổi."
      }
    ]
  },
  en: {
    "title": "EMPLOYMENT LAW 2025: KEY UNEMPLOYMENT INSURANCE CHANGES FOR EMPLOYERS",
    "kicker": [
      "LEGAL INSIGHTS | EMPLOYMENT AND INSURANCE LAW"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Effective 1 January 2026, Employment Law No. 74/2025/QH15 and Decree No. 374/2025/ND-CP introduce important changes to Vietnam’s unemployment insurance (UI) framework. Employers should review not only contribution rates, but also coverage, contribution-based salary, contribution records and obligations arising on termination of employment. [3][4]"
      },
      {
        "type": "p",
        "text": "This Legal Insight highlights key developments and practical compliance considerations for businesses."
      },
      {
        "type": "h2",
        "text": "01 | COVERAGE: CONTRACT LABELS ARE NOT DETERMINATIVE"
      },
      {
        "type": "p",
        "text": "Article 31 of the 2025 Employment Law expands and clarifies UI coverage. Employers should assess the substance of the employment relationship, contract type, salary conditions and statutory exclusions rather than relying solely on job titles or document labels. [1][3]"
      },
      {
        "type": "p",
        "text": "Employees working under indefinite-term employment contracts or fixed-term employment contracts of at least one month are generally covered, subject to the exclusions in Clause 2, Article 31. Persons engaged under working contracts and certain salaried management positions are also addressed in Clause 1, Article 31. [3]"
      },
      {
        "type": "p",
        "text": "An agreement described as a “collaborator agreement”, “service agreement” or otherwise may constitute an employment relationship where its substance involves paid work under the management, direction or supervision of another party. Both the contractual terms and actual working arrangements must be considered. [1][3]"
      },
      {
        "type": "p",
        "text": "Part-time employees falling within Point a, Clause 1, Article 31 are covered where their monthly salary equals or exceeds the minimum salary used as the basis for compulsory social insurance contributions. Clause 2, Article 31 also specifies exclusions, including persons receiving a pension, persons eligible for a pension, probationary employees and domestic workers. [3]"
      },
      {
        "type": "h2",
        "text": "02 | CONTRIBUTION RATES: THE “UP TO 1%” CEILING IS NOT AN ELECTIVE RATE"
      },
      {
        "type": "p",
        "text": "Clause 1, Article 33 of the 2025 Employment Law provides for maximum UI contribution rates of 1% for employees and employers. Article 4 of Decree No. 374/2025/ND-CP sets the applicable rates at 1% of the employee’s monthly salary and 1% of the monthly payroll of employees participating in UI, respectively. Employers cannot unilaterally apply a lower rate without a legal basis. [3][4]"
      },
      {
        "type": "p",
        "text": "Compared with Article 57 of the 2013 Employment Law, the principal change is the statutory framework establishing a ceiling while allowing the Government to prescribe the applicable rate. The current rate remains 1% for each side. [2][3][4]"
      },
      {
        "type": "h2",
        "text": "03 | CONTRIBUTION-BASED SALARY: SUBSTANCE OVER PAYMENT LABELS"
      },
      {
        "type": "p",
        "text": "Article 34 distinguishes salary bases under State-prescribed pay regimes from those determined by employers. Businesses operating their own pay structures should review employment contracts, amendments, payroll records and actual payment practices. [3]"
      },
      {
        "type": "p",
        "text": "For employer-determined salaries, the contribution base includes the salary for the job or position, salary allowances and other agreed payments made regularly and consistently in each pay period. An amount is not automatically excluded merely because it is labelled “support” or “benefit”; conversely, not every bonus or irregular payment is necessarily included. [3]"
      },
      {
        "type": "p",
        "text": "Clause 2, Article 34 caps the salary used for UI contributions at 20 times the applicable regional monthly minimum wage at the time of contribution. This is a cap on the contribution base, not on the salary that the parties may agree under an employment contract. [3]"
      },
      {
        "type": "p",
        "text": "Where an employee is suspended from work and receives a monthly salary at least equal to the minimum salary used for compulsory social insurance contributions, UI contributions are based on the salary received during that period. Rules concerning temporary detention, suspension from duties and subsequent payment of withheld salary should be assessed under Clause 3, Article 34 and the applicable implementing provisions. [3][4]"
      },
      {
        "type": "h2",
        "text": "04 | TERMINATION: EMPLOYERS’ OBLIGATIONS EXTEND BEYOND CONFIRMING INSURANCE RECORDS"
      },
      {
        "type": "p",
        "text": "Clause 7, Article 33 of the 2025 Employment Law requires employers to pay outstanding UI contributions when an employment contract, working contract or employment relationship ends so that the employee’s benefits can be processed. Where the employer fails to pay the required contributions in full, it must pay an amount corresponding to the UI benefits to which the employee would be entitled, as prescribed by law. Employers should reconcile contribution periods, arrears and individual records before final settlement. [3]"
      },
      {
        "type": "p",
        "text": "UI benefits are distinct from statutory severance allowance and job-loss allowance. The latter are determined by the grounds for termination and the relevant requirements of the 2019 Labour Code. Potential eligibility for UI benefits does not, by itself, discharge an employer’s obligation to pay a statutory severance or job-loss allowance where applicable. Periods already covered by UI must be taken into account in the relevant statutory calculations. [1][3]"
      },
      {
        "type": "p",
        "text": "Where a workforce reduction is attributed to structural or technological changes or economic reasons, employers must separately assess the factual basis, labour utilisation plan, consultation and notification requirements, and any job-loss allowance under Articles 42, 44 and 47 of the 2019 Labour Code. UI contributions or discretionary support payments do not replace mandatory termination procedures. [1]"
      },
      {
        "type": "h2",
        "text": "RECONCILE DATA BEFORE FINAL SETTLEMENT"
      },
      {
        "type": "p",
        "text": "HR and payroll teams should reconcile the population covered by UI against declarations, actual pay, commencement and cessation dates, periods of work stoppage and outstanding contributions. Particular attention should be given to differently labelled contracts, part-time workers and changes in remuneration structures. Any arrears, adjustments and confirmation of contribution records should follow the applicable procedures rather than assumptions based solely on internal payroll data. [1][3][4]"
      },
      {
        "type": "h2",
        "text": "05 | EMPLOYER COMPLIANCE CHECKLIST"
      },
      {
        "type": "p",
        "text": "Before year-end, employers should: (i) classify contracts and UI exclusions; (ii) verify contribution-based salary, the statutory cap and the 1% rates; (iii) reconcile contribution histories and arrears; (iv) establish the correct legal ground for each termination; (v) calculate outstanding salary, unused annual leave, statutory allowances and contractual payments; (vi) complete insurance records and confirmations; and (vii) consider lawful measures for training, job retention or job placement where appropriate."
      },
      {
        "type": "h2",
        "text": "UI COMPLIANCE IS PART OF EMPLOYMENT RISK MANAGEMENT"
      },
      {
        "type": "p",
        "text": "The 2025 Employment Law requires employers to approach UI as a continuous compliance obligation: determining coverage, calculating and paying contributions correctly, maintaining accurate records and completing obligations when employment ends. Early compliance reduces exposure to disputes, contribution arrears and disruption of employees’ benefits."
      },
      {
        "type": "p",
        "text": "For restructuring plans, employers should independently verify the legal basis for termination and the supporting evidence. UI compliance and additional support payments should not be treated as substitutes for the requirements of the Labour Code. [1][3]"
      },
      {
        "type": "p",
        "text": "Employees should be provided with accurate termination and insurance records so they can assess their individual entitlements and applicable claim deadlines. [1][3]"
      },
      {
        "type": "p",
        "text": "Integritas Vu Legal advises businesses on employment contracts, remuneration structures, mandatory insurance compliance, workforce restructuring, termination planning and employment dispute risk management, taking into account the documents and circumstances of each matter."
      },
      {
        "type": "h2",
        "text": "LEGAL SOURCES"
      },
      {
        "type": "note",
        "text": "[1] Labour Code No. 45/2019/QH14 (including Articles 13, 34, 41–44, 46–48, 113 and 188): https://vanban.chinhphu.vn/?classid=1&docid=198540&pageid=27160"
      },
      {
        "type": "note",
        "text": "[2] Employment Law No. 38/2013/QH13 (historical comparison only): https://vbpl.vn/"
      },
      {
        "type": "note",
        "text": "[3] Employment Law No. 74/2025/QH15 (including Articles 31–35, 37–39 and 42): https://vanban.chinhphu.vn/?docid=214560&pageid=27160"
      },
      {
        "type": "note",
        "text": "[4] Decree No. 374/2025/ND-CP dated 31 December 2025: https://vanban.chinhphu.vn/?classid=1&docid=216493&pageid=27160"
      },
      {
        "type": "note",
        "text": "[5] Social Insurance Law No. 41/2024/QH15: https://vbpl.vn/"
      },
      {
        "type": "h2",
        "text": "LEGAL NOTICE AND COPYRIGHT"
      },
      {
        "type": "note",
        "text": "© 2026 Integritas Vu Legal. This article was prepared and published by Integritas Vu Legal LLC. Rights in its content, to the extent protected by intellectual property law, are reserved and exercised in accordance with applicable law. No part may be reproduced, modified, republished, distributed or commercially exploited without the rights holder’s consent, except as permitted by law. Any lawful quotation should acknowledge the source and link to the original article."
      },
      {
        "type": "note",
        "text": "This article is provided for general legal information as at the date of publication. It does not constitute legal advice on any specific matter, establish a lawyer–client relationship or replace an assessment of the relevant documents, evidence, agreements and applicable law. Readers should not rely solely on this article in deciding whether to take, defer or refrain from legal action. Outcomes depend on the facts and applicable law in each case, and the content may require revision as legislation or legal practice evolves."
      }
    ]
  },
};
