import type { Article } from "./types";

/**
 * Legal Insights, second article. Transcribed verbatim from the Client's
 * `Blogs/CONTENT 26_10-30_10.docx` - typos included; see the project report for the list.
 * Do not tidy the wording here: ivl-content-update rule, the Client is a law firm.
 * One exception, at the site owner's request (2026-10-28): the split word "vi ph ạm" in section 01 now reads "vi phạm".
 *
 * Vietnamese only. The Client has not supplied an English version and legal copy is never
 * machine-translated, so this article appears on `/vi` and nowhere on the English pages
 * until an `en` block is added.
 */
export const unsignedTransactions: Article = {
  slug: "giao-dich-khong-ky-hop-dong-nhan-dien-rui-ro-phap-ly",
  // TODO(client): confirm the publication date. The document carries none; this is the
  // day it was put on the site.
  publishedAt: "2026-10-28",
  // TODO(client): confirm the category. "Legal Insight" like the first article; it could
  // equally be filed as a Practical Guide.
  category: 1,
  // Supplied by the Client (Blogs/Ảnh - blogs/POST 2.png), resized for the web. The lettering
  // on the document in the photograph is mirrored in the Client's file; kept as supplied.
  coverImage: "/images/blog/unsigned-transactions.jpg",
  vi: {
    title: "GIAO DỊCH KHÔNG KÝ HỢP ĐỒNG: NHẬN DIỆN RỦI RO PHÁP LÝ",
    // The document has no separate standfirst line: its opening paragraph is shown as the
    // standfirst under the headline and is not repeated in the body.
    subtitle: "Không phải giao dịch nào cũng bắt đầu bằng một bản hợp đồng, thỏa thuận được ký kết. Một đơn đặt hàng qua tin nhắn. Một khoản thanh toán đã chuyển. Hàng hóa đã được giao. Nhưng không có hợp đồng ký kết. Giao dịch có thể vẫn phát sinh quyền và nghĩa vụ — song doanh nghiệp đã chuẩn bị đủ hồ sơ để bảo vệ mình trước đối tác, cơ quan thuế và cơ quan tiến hành tố tụng hay chưa?",
    blocks: [
      { type: "h2", text: "01 | KHÔNG CÓ HỢP ĐỒNG GIẤY: GIAO DỊCH CÓ ĐƯỢC CÔNG NHẬN?" },
      { type: "p", text: "Trong giao dịch dân sự và hoạt động thương mại, giao dịch có thể được xác lập bằng lời nói, văn bản hoặc hành vi cụ thể; hợp đồng mua bán hàng hóa được Điều 24 Luật Thương mại 2005 ghi nhận các hình thức này. Điều 119 Bộ luật Dân sự 2015 cũng ghi nhận hình thức giao dịch dân sự tương ứng. Vì vậy, không có bản hợp đồng giấy được ký không đồng nghĩa với việc giao dịch đương nhiên không tồn tại hoặc vô hiệu. Tuy nhiên, phải xác định đúng loại giao dịch và điều kiện có hiệu lực của giao dịch cụ thể." },
      { type: "p", text: "Ngoại lệ cần đặc biệt lưu ý: Khi pháp luật chuyên ngành quy định giao dịch phải lập thành văn bản, công chứng, chứng thực hoặc đăng ký, các bên phải tuân thủ điều kiện tương ứng. Điều 117, Điều 119 và Điều 129 Bộ luật Dân sự 2015 là cơ sở để xem xét điều kiện có hiệu lực và hậu quả của vi phạm về hình thức; không thể suy luận rằng cứ đã thanh toán hoặc thực hiện một phần thì mọi thiếu sót về hình thức đều được khắc phục." },
      { type: "p", text: "Vấn đề pháp lý đặt ra: Các bên thực sự thỏa thuận với nhau, hay chỉ có một bên đơn phương gửi báo giá, điều kiện giao dịch rồi coi như đối tác đã chấp nhận?" },
      { type: "h2", text: "02 | AI LÀ CHỦ THỂ GIAO DỊCH — VÀ AI PHẢI CHỊU TRÁCH NHIỆM?" },
      { type: "p", text: "Ai mới là bên có nghĩa vụ: Người gửi đơn hàng có phải đại diện có thẩm quyền? Tiền chuyển từ tài khoản cá nhân có phải là khoản thanh toán của doanh nghiệp? Bên nhận hàng, bên đứng tên hóa đơn và bên phải thanh toán có thực sự là một chủ thể? Đây thường là những điểm bất đồng có ảnh hưởng trực tiếp đến phạm vi yêu cầu khi tranh chấp." },
      { type: "p", text: "Điều 142 và 143 Bộ luật Dân sự 2015 đặt ra vấn đề hậu quả của giao dịch do người không có quyền đại diện hoặc vượt quá phạm vi đại diện xác lập. Đáng chú ý, việc một nhân viên hoặc người trung gian liên hệ giao dịch không đương nhiên làm phát sinh nghĩa vụ cho doanh nghiệp. Chỉ riêng việc nhân viên trao đổi và nhận hàng không đủ để mặc nhiên kết luận doanh nghiệp đã chấp nhận mọi nghĩa vụ." },
      { type: "h2", text: "03 | CÓ GIAO DỊCH THỰC TẾ, NHƯNG CÓ ĐỦ CHỨNG CỨ?" },
      { type: "p", text: "Email, dữ liệu đặt hàng, phiếu giao nhận, biên bản nghiệm thu, sao kê ngân hàng, hóa đơn và đối chiếu công nợ có thể hỗ trợ xác định giao dịch. Tuy nhiên, mỗi chứng từ chỉ chứng minh một phần sự kiện: hóa đơn không tự nó chứng minh bên mua đã chấp thuận toàn bộ điều khoản; chuyển khoản không luôn xác định được bản chất của khoản tiền. Điều 91, 94, 95 Bộ luật Tố tụng dân sự 2015 quy định về nghĩa vụ chứng minh và nguồn chứng cứ; thông điệp dữ liệu cần được đánh giá theo Luật Giao dịch điện tử 2023." },
      { type: "p", text: "Vấn đề pháp lý đặt ra: Khi đối tác phủ nhận giao dịch, ai sẽ chứng minh việc đặt hàng, giao nhận và số tiền còn phải trả?" },
      { type: "h2", text: "04 | RỦI RO THUẾ: GIAO DỊCH CÓ THẬT CHƯA CHẮC ĐÃ ĐỦ ĐIỀU KIỆN KHẤU TRỪ" },
      { type: "p", text: "Đây là điểm dễ bị bỏ sót: Hiệu lực của hợp đồng theo pháp luật dân sự/thương mại và điều kiện xử lý thuế là hai phép kiểm tra khác nhau. Khoản chi thực tế phát sinh không đương nhiên được tính vào chi phí được trừ khi xác định thu nhập chịu thuế thu nhập doanh nghiệp (TNDN). Khoản 1 Điều 9 Nghị định 320/2025/NĐ-CP yêu cầu, trong phạm vi áp dụng, khoản chi liên quan đến hoạt động kinh doanh, có đủ hóa đơn/chứng từ hợp pháp và có chứng từ thanh toán không dùng tiền mặt đối với khoản mua hàng hóa, dịch vụ hoặc khoản thanh toán khác từng lần từ 05 triệu đồng trở lên. Các ngoại lệ và trường hợp đặc thù phải kiểm tra theo văn bản hướng dẫn, trong đó có Thông tư 20/2026/TT-BTC. [1]" },
      { type: "p", text: "Đối với thuế GTGT đầu vào, Điều 25 và 26 Nghị định 181/2025/NĐ-CP quy định điều kiện về hóa đơn và chứng từ thanh toán không dùng tiền mặt, với ngưỡng 05 triệu đồng (đã bao gồm thuế GTGT) theo phạm vi áp dụng. Đặc biệt, quy định sửa đổi tại Nghị định 144/2026/NĐ-CP về mua trả chậm, trả góp từ ngưỡng này đề cập rõ hợp đồng mua hàng hóa, dịch vụ bằng văn bản, hóa đơn GTGT và chứng từ thanh toán; khi chưa đến hạn thanh toán, việc khấu trừ và điều chỉnh được xử lý theo điều kiện cụ thể của quy định. Đây là ví dụ điển hình cho thấy có giao dịch thực tế không đồng nghĩa với việc có thể bỏ qua hồ sơ hợp đồng khi pháp luật thuế yêu cầu. [2]" },
      { type: "p", text: "Vấn đề pháp lý đặt ra: Doanh nghiệp nhận hàng theo trao đổi miệng, thanh toán tiền mặt 80 triệu đồng và chỉ lưu phiếu giao hàng. Tranh chấp dân sự có thể vẫn xem xét giao dịch trên toàn bộ chứng cứ; nhưng doanh nghiệp đối mặt rủi ro không đáp ứng điều kiện chứng từ để khấu trừ GTGT đầu vào hoặc ghi nhận chi phí TNDN. Kết quả cụ thể còn phụ thuộc vào đối tượng, thời điểm, loại giao dịch, chứng từ và ngoại lệ của pháp luật." },
      { type: "h2", text: "05 | MUA BÁN HÓA ĐƠN: TỪ “HỢP THỨC HÓA CHI PHÍ” ĐẾN RỦI RO HÌNH SỰ" },
      { type: "p", text: "Một sai lầm nguy hiểm là tìm hóa đơn từ bên thứ ba để “bù” cho giao dịch thiếu chứng từ, hoặc sử dụng hóa đơn không phản ánh hàng hóa, dịch vụ thực tế. Hóa đơn không thay thế được giao dịch có thật, và không thể dùng một chứng từ giả tạo để hợp thức hóa chi phí. Hành vi sử dụng hóa đơn không hợp pháp có thể kéo theo hậu quả về thuế và xử phạt hành chính; nếu đủ dấu hiệu cấu thành, hành vi mua bán trái phép hóa đơn, chứng từ thu nộp ngân sách nhà nước có thể bị xem xét theo Điều 203 Bộ luật Hình sự 2015 (được sửa đổi, bổ sung). Tùy tình tiết, hành vi gian dối nhằm giảm số thuế phải nộp còn cần được đánh giá riêng theo Điều 200 về tội trốn thuế. Không phải mọi sai sót trên hóa đơn đều cấu thành tội phạm. [3]" },
      { type: "h2", text: "06 | CHIẾN LƯỢC PHÒNG NGỪA PHẢI BẮT ĐẦU TRƯỚC TRANH CHẤP" },
      { type: "p", text: "Khi xác lập giao dịch, cần một quy trình tối thiểu: xác minh thẩm quyền người đặt hàng; xác nhận bằng phương tiện có thể lưu trữ về hàng hóa, giá, điều kiện giao nhận và thanh toán; đối chiếu chứng từ với dòng tiền và hóa đơn; xác định ngay từ đầu giao dịch có yêu cầu hình thức riêng hoặc hồ sơ thuế đặc thù hay không. Khi xuất hiện dấu hiệu bất đồng, cần bảo toàn dữ liệu gốc, lập diễn biến giao dịch và đánh giá đồng thời rủi ro dân sự, thương mại, thuế và khi có dấu hiệu hình sự." },
      { type: "p", text: "Câu hỏi pháp lý không dừng ở “Không ký hợp đồng có kiện được không?”. Một giao dịch có thể đồng thời tạo ra nghĩa vụ thanh toán, rủi ro bị bác yêu cầu do thiếu chứng cứ, chi phí không được trừ, thuế đầu vào không được khấu trừ hoặc trách nhiệm từ hóa đơn không hợp pháp. Công ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal (Integritas Vũ Legal) nhìn nhận giao dịch từ bản chất pháp lý, chứng cứ, dòng tiền, nghĩa vụ thuế và mục tiêu kinh doanh; xây dựng phương án xử lý ngay từ khi nhận diện vấn đề, thay vì chờ đến lúc tranh chấp phát sinh." },
      { type: "p", text: "Hãy liên hệ Integritas Vũ Legal để được hỗ trợ rà soát rủi ro, đánh giá các phương án xử lý và xây dựng chiến lược pháp lý phù hợp. Với cách tiếp cận chuyên sâu và giải pháp được xây dựng trên cơ sở đặc thù của từng vụ việc, chúng tôi đồng hành cùng khách hàng trong việc phòng ngừa, kiểm soát rủi ro và bảo vệ hiệu quả quyền, lợi ích hợp pháp." },
      { type: "p", text: "Website: www.integritasvulegal.com" },
      { type: "p", text: "Email: contact@integritasvulegal.com" },
      { type: "note", text: "[1] Luật Thuế TNDN số 67/2025/QH15, Điều 9; Nghị định 320/2025/NĐ-CP, khoản 1 Điều 9; Thông tư 20/2026/TT-BTC. Bộ Tài chính: https://portal.mof.gov.vn/hoidapcstc/home/cthoidap/160392 ; https://www.mof.gov.vn/tin-tuc-tai-chinh/tin-chinh-sach-tai-chinh/cac-khoan-chi-phi-duoc-tru-khi-tinh-thue-tndn-phai-co-du-hoa-don-chung-tu-theo-quy-dinh" },
      { type: "note", text: "[2] Nghị định 181/2025/NĐ-CP, Điều 25, 26; Nghị định 144/2026/NĐ-CP (hiệu lực 20/6/2026). https://baochinhphu.vn/sua-doi-bo-sung-mot-so-quy-dinh-ve-thue-gia-tri-gia-tang-102260506173207886.htm" },
      { type: "note", text: "[3] Bộ luật Hình sự 2015, Điều 200, 203 và văn bản sửa đổi liên quan. https://vbpl.moj.gov.vn/nganhangnhanuoc/Pages/vbpq-toanvan.aspx?ItemID=96122&Keyword=" },
      { type: "h2", text: "THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ" },
      { type: "note", text: "© 2026 Integritas Vũ Legal. Nội dung bài viết do Công Ty Luật Trách Nhiệm Hữu Hạn Integritas Vũ Legal biên soạn và công bố; các quyền đối với phần nội dung thuộc phạm vi bảo hộ được thực hiện theo quy định pháp luật về sở hữu trí tuệ. Không được sao chép, chỉnh sửa, tái bản, phân phối hoặc khai thác nội dung vì mục đích thương mại khi chưa có sự chấp thuận của chủ thể có quyền, trừ các trường hợp được pháp luật cho phép. Khi trích dẫn hợp pháp, đề nghị ghi rõ nguồn và đường dẫn đến bài viết gốc." },
      { type: "note", text: "Bài viết chỉ cung cấp thông tin pháp lý tổng quát tại thời điểm công bố, không phải ý kiến tư vấn pháp lý cho một vụ việc cụ thể, không tạo lập quan hệ luật sư – khách hàng và không thay thế việc đánh giá hồ sơ, chứng cứ, thỏa thuận và quy định áp dụng. Người đọc không nên tự ý dựa duy nhất vào nội dung này để thực hiện, trì hoãn hoặc từ bỏ bất kỳ biện pháp pháp lý nào. Kết quả xử lý phụ thuộc vào tình tiết và pháp luật áp dụng trong từng trường hợp; nội dung có thể cần cập nhật khi pháp luật hoặc thực tiễn áp dụng thay đổi." },
    ],
  },
};
