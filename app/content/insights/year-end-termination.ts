import type { Article } from "./types";

/**
 * Legal Insights, twelfth article ("Year-end employment termination: 06 issues employers
 * should review before completing the handover"). Generated with
 * `scripts/drive-sync/convert.py` from the Client's single Word file
 * `Blogs/23.11 - VI&EN - 6 vấn đề Doanh nghiệp cần rà soát khi chấm dứt lao động.docx`, which
 * holds the Vietnamese article and then the English one, then checked line by line against
 * that file: every line is on the page. Do not tidy the wording here: ivl-content-update
 * rule, the Client is a law firm.
 *
 * The Vietnamese article opens with the label "CHUYÊN ĐỀ | HỢP ĐỒNG VÀ QUẢN TRỊ NHÂN SỰ"
 * (`kicker`); the English one has no such line. The closing sections are headed
 * "| KẾT LUẬN" / "| CONCLUSION", with the leading bar as the Client typed it.
 */
export const yearEndTermination: Article = {
  slug: "cham-dut-hop-dong-lao-dong-dip-cuoi-nam-6-van-de-can-ra-soat",
  // 23 November 2026: the date in the name of the Client's file.
  publishedAt: "2026-11-23",
  // No cover picture was supplied for this article, so its card shows the default panel.
  // TODO(client): confirm the category. "Legal Insight" like the other articles.
  category: 1,
  vi: {
    "title": "CHẤM DỨT HỢP ĐỒNG LAO ĐỘNG DỊP CUỐI NĂM: 6 VẤN ĐỀ CẦN RÀ SOÁT",
    "kicker": [
      "CHUYÊN ĐỀ | HỢP ĐỒNG VÀ QUẢN TRỊ NHÂN SỰ"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Cuối năm là thời điểm nhiều doanh nghiệp đánh giá nhân sự, điều chỉnh cơ cấu tổ chức, xử lý hợp đồng lao động hết hạn hoặc thỏa thuận chấm dứt quan hệ lao động. Dù xuất phát từ nhu cầu tổ chức hay quyết định của người lao động, việc hoàn tất thủ tục nghỉ việc không chỉ dừng ở ký biên bản bàn giao. Doanh nghiệp cần kiểm tra đồng thời căn cứ chấm dứt, tài sản và quyền truy cập, các khoản thanh toán, hồ sơ bảo hiểm, thẩm quyền giao dịch đối ngoại và dữ liệu cá nhân."
      },
      {
        "type": "p",
        "text": "Một quy trình kết thúc quan hệ lao động thiếu kiểm soát có thể dẫn đến tranh chấp về quyền lợi, khó khăn trong xác định trách nhiệm đối với tài sản hoặc thông tin kinh doanh, cũng như rủi ro tuân thủ pháp luật. Ngược lại, việc lập hồ sơ đầy đủ và phân định rõ trách nhiệm ngay từ đầu giúp bảo vệ lợi ích hợp pháp của cả doanh nghiệp và người lao động."
      },
      {
        "type": "p",
        "text": "Dưới đây là sáu nhóm vấn đề cần rà soát trước khi chính thức khép lại quy trình chấm dứt hợp đồng lao động."
      },
      {
        "type": "h2",
        "text": "1 | XÁC ĐỊNH ĐÚNG CĂN CỨ VÀ THỦ TỤC CHẤM DỨT HỢP ĐỒNG LAO ĐỘNG"
      },
      {
        "type": "p",
        "text": "Trước khi tổ chức bàn giao, doanh nghiệp cần xác định đúng căn cứ chấm dứt theo Điều 34 Bộ luật Lao động 2019 và các quy định có liên quan: hết hạn hợp đồng, thỏa thuận chấm dứt, đơn phương chấm dứt hoặc trường hợp cho thôi việc do thay đổi cơ cấu, công nghệ hay vì lý do kinh tế. Mỗi căn cứ có điều kiện và hệ quả khác nhau về thời hạn báo trước, thủ tục, trợ cấp thôi việc hoặc trợ cấp mất việc làm. Đối với trường hợp thay đổi cơ cấu, công nghệ hoặc vì lý do kinh tế, cần rà soát riêng các yêu cầu tại Điều 42, 44 và 47 Bộ luật Lao động 2019. Hồ sơ nên thể hiện rõ căn cứ thực tế, quyết định hoặc thỏa thuận chấm dứt, các thông báo và tài liệu chứng minh việc tuân thủ thủ tục áp dụng. Không nên sử dụng thỏa thuận nghỉ việc như một cách mặc nhiên thay thế thủ tục bắt buộc của trường hợp chấm dứt khác. [1]"
      },
      {
        "type": "h2",
        "text": "2| BÀN GIAO KHI NGHỈ VIỆC GỒM NHỮNG GÌ?"
      },
      {
        "type": "p",
        "text": "Việc bàn giao cần được chuẩn bị từ khi xác định thời điểm chấm dứt hợp đồng lao động, thay vì chờ đến ngày làm việc cuối cùng. Tuy nhiên, doanh nghiệp cần phân biệt rõ thời điểm thông báo chấm dứt hợp đồng với thời điểm quan hệ lao động thực sự chấm dứt. Việc người lao động nộp đơn xin nghỉ việc hoặc nhận thông báo chấm dứt hợp đồng không đồng nghĩa với việc doanh nghiệp yêu cầu ngừng làm việc ngay lập tức, thu hồi toàn bộ quyền truy cập hoặc áp dụng các biện pháp hạn chế khác mà không xem xét căn cứ pháp lý và thỏa thuận giữa các bên."
      },
      {
        "type": "p",
        "text": "Trong thời gian báo trước, quan hệ lao động về nguyên tắc vẫn tiếp tục tồn tại và các bên vẫn phải thực hiện những quyền, nghĩa vụ tương ứng. Do đó, doanh nghiệp cần chủ động xây dựng kế hoạch bàn giao phù hợp với vị trí công việc, mức độ nhạy cảm của thông tin và thời điểm nghỉ việc dự kiến. Đối với nhân sự quản lý, tài chính, kinh doanh hoặc công nghệ thông tin, việc bàn giao có thể cần được triển khai theo từng giai đoạn nhằm bảo đảm hoạt động liên tục và hạn chế nguy cơ thất thoát tài sản, dữ liệu. Trường hợp cần điều chỉnh hoặc thu hồi quyền truy cập trước ngày chấm dứt hợp đồng, doanh nghiệp phải xem xét tính cần thiết, phạm vi và căn cứ áp dụng, đồng thời bảo đảm không làm ảnh hưởng trái pháp luật đến điều kiện làm việc và quyền lợi của người lao động."
      },
      {
        "type": "p",
        "text": "Biên bản bàn giao có chữ ký là tài liệu quan trọng nhưng không tự động chứng minh mọi nghĩa vụ đã hoàn tất. Doanh nghiệp nên lập danh mục cụ thể về công việc đang xử lý, hồ sơ gốc, thiết bị, tài sản, công nợ, khoản tạm ứng, dữ liệu kinh doanh và người tiếp nhận; ghi nhận tình trạng, thời điểm, trách nhiệm xử lý tiếp theo và các vấn đề còn tồn đọng. Việc xác nhận bàn giao cần tránh những câu chữ chung chung có thể gây tranh cãi về phạm vi trách nhiệm, đặc biệt khi doanh nghiệp phát hiện thiếu hụt tài sản hoặc sai lệch dữ liệu sau thời điểm nghỉ việc."
      },
      {
        "type": "p",
        "text": "Khi xem xét trách nhiệm vật chất của người lao động, doanh nghiệp phải đối chiếu Điều 129, Điều 130 Bộ luật Lao động 2019, nội quy lao động, các thỏa thuận hợp pháp và chứng cứ cụ thể về hành vi, thiệt hại, nguyên nhân cũng như các giới hạn và trình tự áp dụng. Không thể mặc nhiên quy mọi khoản thất thoát phát hiện sau ngày nghỉ việc cho người lao động đã bàn giao hoặc tự động khấu trừ toàn bộ khoản thanh toán cuối cùng để bù đắp thiệt hại. [1]"
      },
      {
        "type": "p",
        "text": "Đối với tài khoản và dữ liệu công việc, doanh nghiệp cần rà soát quyền sở hữu, quyền quản lý và nghĩa vụ bảo mật theo hợp đồng, quy chế nội bộ và pháp luật liên quan. Việc thu hồi thẻ ra vào, thiết bị, quyền truy cập hệ thống và chuyển giao tài khoản công việc cần được thực hiện theo kế hoạch, có phân công trách nhiệm và ghi nhận thời điểm hoàn tất. Doanh nghiệp cũng cần bảo toàn dữ liệu có liên quan bằng phương thức hợp pháp, đồng thời tránh tự ý truy cập, sao chép hoặc xóa dữ liệu riêng tư trên thiết bị và tài khoản cá nhân của người lao động."
      },
      {
        "type": "p",
        "text": "Đáng lưu ý, việc bảo vệ tài sản và thông tin kinh doanh không nên chỉ bắt đầu khi người lao động thông báo nghỉ việc. Doanh nghiệp cần thiết lập từ trước các quy định về quản lý tài sản, phân quyền truy cập, sử dụng thiết bị cá nhân, lưu trữ dữ liệu và bảo mật thông tin. Đây là cơ sở quan trọng để việc bàn giao và thu hồi quyền truy cập được thực hiện nhất quán, có căn cứ và hạn chế tranh chấp khi quan hệ lao động chấm dứt."
      },
      {
        "type": "h2",
        "text": "3| CHẤM DỨT HỢP ĐỒNG LAO ĐỘNG PHẢI THANH TOÁN NHỮNG KHOẢN NÀO, TRONG BAO LÂU?"
      },
      {
        "type": "p",
        "text": "Theo khoản 1 Điều 48 Bộ luật Lao động 2019, các bên có trách nhiệm thanh toán đầy đủ những khoản liên quan đến quyền lợi của mỗi bên trong thời hạn 14 ngày làm việc kể từ ngày chấm dứt hợp đồng; một số trường hợp luật định có thể kéo dài nhưng không quá 30 ngày. Việc chờ hoàn tất bàn giao không đương nhiên cho phép doanh nghiệp kéo dài thời hạn thanh toán. Bộ phận nhân sự và kế toán cần lập bảng quyết toán có căn cứ, đối chiếu chứng từ và xác định rõ các khoản còn tranh chấp. [1]"
      },
      {
        "type": "p",
        "text": "Ngoài tiền lương và các khoản phải trả theo thỏa thuận, doanh nghiệp cần kiểm tra tiền lương cho ngày nghỉ hằng năm chưa sử dụng thuộc trường hợp phải thanh toán theo khoản 3 Điều 113 Bộ luật Lao động 2019; trợ cấp thôi việc hoặc trợ cấp mất việc làm nếu đủ điều kiện; và các khoản thưởng, bao gồm thưởng cuối năm hoặc “lương tháng 13”, theo đúng bản chất pháp lý, hợp đồng, thỏa ước và quy chế thưởng áp dụng. Không nên mặc nhiên coi mọi khoản “lương tháng 13” là khoản thưởng tùy nghi hoặc mặc nhiên là khoản lương bắt buộc trong mọi trường hợp. Điều 104 Bộ luật Lao động 2019 là một căn cứ cần đối chiếu khi xác định quyền hưởng thưởng. [1]"
      },
      {
        "type": "p",
        "text": "Đối với trợ cấp thôi việc, theo khoản 1 Điều 46 Bộ luật Lao động 2019, người sử dụng lao động có trách nhiệm chi trả cho người lao động đã làm việc thường xuyên từ đủ 12 tháng trở lên khi hợp đồng lao động chấm dứt thuộc các trường hợp luật định, trừ những trường hợp được loại trừ theo quy định. Mỗi năm làm việc được trợ cấp một nửa tháng tiền lương; tiền lương làm căn cứ tính trợ cấp là mức bình quân của 06 tháng liền kề theo hợp đồng lao động trước khi thôi việc. Tuy nhiên, thời gian tính trợ cấp phải loại trừ thời gian đã tham gia bảo hiểm thất nghiệp và thời gian đã được chi trả trợ cấp thôi việc, trợ cấp mất việc làm. Do đó, doanh nghiệp cần rà soát cả căn cứ chấm dứt hợp đồng, quá trình làm việc và lịch sử tham gia bảo hiểm thất nghiệp trước khi xác định nghĩa vụ thanh toán."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cần xác định chính xác thời gian làm việc để tính trợ cấp, trong đó lưu ý thời gian đã tham gia bảo hiểm thất nghiệp và các khoảng thời gian được pháp luật tính tương ứng. Việc khấu trừ thuế thu nhập cá nhân, cấp chứng từ khấu trừ và quyết toán thuế phải thực hiện theo quy định thuế hiện hành, tùy loại khoản chi trả và tình trạng ủy quyền quyết toán; không nên khẳng định mọi trường hợp đều phải cấp chứng từ ngay trước khi kết thúc bàn giao. [1][2]"
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cũng cần lưu ý đến rủi ro xử phạt hành chính khi không thực hiện đầy đủ nghĩa vụ thanh toán tiền lương cho những ngày nghỉ hằng năm chưa sử dụng. Theo khoản 2 Điều 23 Nghị định số 283/2026/NĐ-CP, có hiệu lực từ ngày 10/9/2026, hành vi không trả hoặc trả không đủ tiền lương cho những ngày nghỉ hằng năm chưa nghỉ hoặc chưa nghỉ hết khi người lao động thôi việc, bị mất việc làm có thể bị xử phạt từ 5 triệu đồng đến 50 triệu đồng đối với người sử dụng lao động là cá nhân, tùy theo số lượng người lao động bị vi phạm. Đối với người sử dụng lao động là tổ chức, mức phạt tương ứng từ 10 triệu đồng đến 100 triệu đồng theo khoản 1 Điều 7 Nghị định này."
      },
      {
        "type": "p",
        "text": "Ngoài hình thức phạt tiền, người sử dụng lao động còn có thể bị buộc thanh toán đầy đủ khoản tiền lương còn thiếu cùng tiền lãi theo điểm a khoản 5 Điều 23 Nghị định số 283/2026/NĐ-CP. Do đó, doanh nghiệp cần đối chiếu chính xác số ngày nghỉ hằng năm chưa sử dụng và khoản tiền phải thanh toán trước khi hoàn tất quyết toán khi chấm dứt hợp đồng lao động, thay vì chỉ căn cứ vào bảng lương hoặc số ngày phép ghi nhận trên hệ thống nhân sự."
      },
      {
        "type": "h2",
        "text": "4| CHỐT SỔ BẢO HIỂM XÃ HỘI KHI NGHỈ VIỆC: DOANH NGHIỆP PHẢI LÀM GÌ?"
      },
      {
        "type": "p",
        "text": "Theo khoản 3 Điều 48 Bộ luật Lao động 2019, người sử dụng lao động có trách nhiệm hoàn thành thủ tục xác nhận thời gian đóng bảo hiểm xã hội, bảo hiểm thất nghiệp và trả lại bản chính giấy tờ khác đã giữ của người lao động; đồng thời cung cấp bản sao tài liệu liên quan đến quá trình làm việc nếu người lao động yêu cầu theo luật. Các nghĩa vụ này cần được xử lý độc lập với tranh chấp về bàn giao hoặc trách nhiệm vật chất. Không nên giữ giấy tờ hay trì hoãn việc xác nhận quá trình đóng bảo hiểm để gây sức ép đối với người lao động. [1]"
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cần đối chiếu dữ liệu tham gia bảo hiểm, thực hiện thủ tục báo giảm và xử lý khoản đóng còn thiếu theo quy định áp dụng. Việc chậm hoàn tất hồ sơ có thể ảnh hưởng đến khả năng thực hiện thủ tục hưởng bảo hiểm thất nghiệp của người lao động; đồng thời, doanh nghiệp không chỉ đối mặt với rủi ro bị xử phạt hành chính mà còn có thể phải bồi thường thiệt hại. Do đó, doanh nghiệp cần báo giảm đúng kỳ, hoàn tất nghĩa vụ đóng bảo hiểm đến tháng nghỉ việc theo Luật Bảo hiểm xã hội 2024 và lập biên bản bàn giao có chữ ký xác nhận khi trả tờ rời chốt sổ cho người lao động."
      },
      {
        "type": "h2",
        "text": "5| NGƯỜI LAO ĐỘNG NGHỈ VIỆC CÓ CÒN QUYỀN ĐẠI DIỆN CÔNG TY KHÔNG?"
      },
      {
        "type": "p",
        "text": "Việc bàn giao nội bộ chưa đủ nếu người lao động từng được giao quyền đại diện hoặc quyền thực hiện giao dịch với khách hàng, nhà cung cấp, ngân hàng hay cơ quan nhà nước. Doanh nghiệp cần kiểm tra giấy ủy quyền, phạm vi và thời hạn đại diện, cơ chế phân quyền ký kết, tài khoản giao dịch và các thông báo đã gửi cho bên thứ ba. Không nên mặc nhiên kết luận rằng mọi quyền đại diện theo ủy quyền đều tự động chấm dứt chỉ vì quan hệ lao động kết thúc: hiệu lực đại diện cần được xác định theo căn cứ xác lập, nội dung ủy quyền và Điều 140 Bộ luật Dân sự 2015. [4]"
      },
      {
        "type": "p",
        "text": "Khi cần thiết, doanh nghiệp nên ban hành văn bản chấm dứt hoặc thu hồi ủy quyền, cập nhật người có thẩm quyền tại ngân hàng và hệ thống giao dịch, đồng thời thông báo kịp thời cho đối tác có liên quan. Các giao dịch do người không còn quyền đại diện xác lập phải được đánh giá theo quy định về đại diện và hậu quả pháp lý tương ứng; việc bên thứ ba có biết hoặc phải biết về giới hạn thẩm quyền hay không có thể là tình tiết quan trọng. [4]"
      },
      {
        "type": "h2",
        "text": "6| CÓ PHẢI XÓA DỮ LIỆU CÁ NHÂN CỦA NGƯỜI LAO ĐỘNG SAU KHI NGHỈ VIỆC?"
      },
      {
        "type": "p",
        "text": "Điểm c khoản 2 Điều 25 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 quy định nghĩa vụ xóa, hủy dữ liệu cá nhân của người lao động khi chấm dứt hợp đồng, trừ trường hợp theo thỏa thuận hoặc pháp luật có quy định khác. Đồng thời, điểm b khoản 2 Điều 25 yêu cầu lưu trữ dữ liệu trong thời hạn theo quy định pháp luật hoặc theo thỏa thuận. Doanh nghiệp vì vậy cần phân loại hồ sơ theo mục đích xử lý và căn cứ lưu giữ, thay vì áp dụng một quy tắc xóa dữ liệu đồng loạt. [5]"
      },
      {
        "type": "p",
        "text": "Hành vi lưu trữ dữ liệu cá nhân của người lao động quá thời hạn pháp luật quy định hoặc thời hạn đã thỏa thuận, cũng như không xóa, hủy dữ liệu khi chấm dứt hợp đồng mà không thuộc trường hợp ngoại lệ, có thể bị xử phạt theo Điều 61 Nghị định số 330/2026/NĐ-CP. Khoản 2 Điều 61 quy định khung phạt tiền từ 50.000.000 đồng đến 70.000.000 đồng đối với các hành vi được liệt kê; việc xác định mức phạt áp dụng còn phụ thuộc chủ thể vi phạm và các quy định chung của nghị định. [5][6]"
      },
      {
        "type": "p",
        "text": "Doanh nghiệp nên lập danh mục hồ sơ cần tiếp tục lưu giữ để thực hiện nghĩa vụ về lao động, kế toán, thuế, bảo hiểm hoặc phục vụ việc bảo vệ quyền, lợi ích hợp pháp khi có căn cứ; xác định thời hạn lưu giữ tương ứng, hạn chế quyền truy cập và áp dụng biện pháp bảo mật phù hợp. Với dữ liệu không còn căn cứ xử lý hoặc lưu giữ, cần tổ chức xóa, hủy an toàn và ghi nhận việc thực hiện. Việc lưu trữ để phục vụ tranh chấp cũng phải được đánh giá theo căn cứ pháp luật và tính cần thiết, không phải ngoại lệ không giới hạn."
      },
      {
        "type": "h2",
        "text": "| KẾT LUẬN"
      },
      {
        "type": "p",
        "text": "Chấm dứt hợp đồng lao động không chỉ là việc hoàn tất thủ tục nhân sự. Đó còn là thời điểm doanh nghiệp cần kiểm soát đồng thời căn cứ chấm dứt, chứng cứ bàn giao, nghĩa vụ thanh toán, hồ sơ bảo hiểm, thẩm quyền giao dịch và vòng đời dữ liệu cá nhân. Một quy trình được chuẩn bị từ sớm, có hồ sơ kiểm chứng và phân công trách nhiệm rõ ràng sẽ giúp hạn chế tranh chấp, bảo vệ tài sản và duy trì sự tuân thủ."
      },
      {
        "type": "p",
        "text": "Đối với các vấn đề liên quan đến chấm dứt hợp đồng lao động, Integritas Vũ Legal cung cấp dịch vụ tư vấn pháp luật lao động, hỗ trợ doanh nghiệp rà soát căn cứ và quy trình chấm dứt hợp đồng, xây dựng thỏa thuận chấm dứt hợp đồng lao động, hoàn thiện hồ sơ bàn giao và các thỏa thuận bảo mật, đánh giá nghĩa vụ thanh toán, bảo hiểm và giải quyết tranh chấp phát sinh. Mỗi vụ việc được tiếp cận trên cơ sở đánh giá hồ sơ, hoàn cảnh cụ thể và các rủi ro pháp lý có liên quan."
      },
      {
        "type": "p",
        "text": "Để được hỗ trợ tư vấn pháp luật lao động và quản trị rủi ro nhân sự doanh nghiệp, vui lòng liên hệ Integritas Vũ Legal: contact@integritasvulegal.com."
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
        "text": "Bài viết chỉ cung cấp thông tin pháp lý tổng quát tại thời điểm công bố, không phải ý kiến tư vấn pháp lý cho một vụ việc cụ thể, không tạo lập quan hệ luật sư - khách hàng và không thay thế việc đánh giá hồ sơ, chứng cứ, thỏa thuận và quy định áp dụng. Người đọc không nên tự ý dựa duy nhất vào nội dung này để thực hiện, trì hoãn hoặc từ bỏ bất kỳ biện pháp pháp lý nào. Kết quả xử lý phụ thuộc vào tình tiết và pháp luật áp dụng trong từng trường hợp; nội dung có thể cần cập nhật khi pháp luật hoặc thực tiễn áp dụng thay đổi."
      }
    ]
  },
  en: {
    "title": "YEAR-END EMPLOYMENT TERMINATION: 06 ISSUES EMPLOYERS SHOULD REVIEW BEFORE COMPLETING THE HANDOVER",
    "blocks": [
      {
        "type": "p",
        "text": "Year-end is a time when many businesses review their workforce, restructure their organisations, address expiring employment contracts or agree to terminate employment relationships. Whether driven by organisational needs or an employee’s decision, completing the departure process involves more than signing a handover record. Employers should concurrently review the grounds for termination, assets and access rights, outstanding payments, insurance records, authority to conduct external transactions and personal data."
      },
      {
        "type": "p",
        "text": "An inadequately controlled employment termination process may lead to disputes over entitlements, difficulties in determining responsibility for assets or business information, and legal compliance risks. Conversely, maintaining complete records and clearly allocating responsibilities from the outset helps protect the lawful interests of both employers and employees."
      },
      {
        "type": "p",
        "text": "The following are 06 areas that should be reviewed before formally closing the employment termination process."
      },
      {
        "type": "h2",
        "text": "1 | IDENTIFYING THE CORRECT GROUNDS AND PROCEDURES FOR EMPLOYMENT TERMINATION"
      },
      {
        "type": "p",
        "text": "Before arranging the handover, employers should identify the appropriate grounds for termination under Article 34 of the 2019 Labour Code and other relevant provisions: expiry of the employment contract, termination by mutual agreement, unilateral termination, or termination of employment due to structural or technological changes or economic reasons. Each ground entails different conditions and consequences concerning notice periods, procedures, severance allowance or job-loss allowance. In cases involving structural or technological changes or economic reasons, the requirements under Articles 42, 44 and 47 of the 2019 Labour Code should be reviewed separately. The records should clearly demonstrate the factual grounds, the termination decision or agreement, relevant notices and evidence of compliance with applicable procedures. A mutual termination agreement should not automatically be used as a substitute for mandatory procedures applicable to another form of termination. [1]"
      },
      {
        "type": "h2",
        "text": "2 | HANDOVER OF WORK, ASSETS AND DATA, AND REVOCATION OF SYSTEM ACCESS RIGHTS"
      },
      {
        "type": "p",
        "text": "Handover preparations should begin once the anticipated employment termination date has been identified, rather than being deferred until the employee’s last working day. However, employers must distinguish between the date on which notice of termination is given and the date on which the employment relationship actually ends. An employee’s submission of a resignation letter or receipt of a termination notice does not, without consideration of the legal grounds and agreements between the parties, mean that the employer may require the employee to stop working immediately, revoke all access rights or impose other restrictions."
      },
      {
        "type": "p",
        "text": "During the notice period, the employment relationship generally remains in effect, and both parties must continue to perform their respective rights and obligations. Employers should therefore proactively develop a handover plan appropriate to the employee’s position, the sensitivity of the information involved and the anticipated departure date. For managerial, finance, sales or information technology personnel, the handover may need to take place in stages to ensure business continuity and mitigate risks of asset or data loss. Where access rights need to be adjusted or revoked before the employment contract ends, the employer must consider the necessity, scope and legal basis of the measures, while ensuring that the employee’s working conditions and entitlements are not unlawfully affected."
      },
      {
        "type": "p",
        "text": "A signed handover record is important evidence, but it does not automatically establish that all obligations have been fulfilled. Employers should prepare a detailed inventory of ongoing work, original documents, equipment, assets, receivables and payables, advances, business data and the persons taking over responsibility; and record their status, timing, subsequent responsibilities and any outstanding matters. Handover acknowledgements should avoid overly general language that could give rise to disputes over the scope of responsibility, particularly where asset shortages or data discrepancies are discovered after departure."
      },
      {
        "type": "p",
        "text": "When considering an employee’s material liability, employers must examine Articles 129 and 130 of the 2019 Labour Code, internal labour regulations, lawful agreements and specific evidence of the conduct, damage and causation, as well as applicable limits and procedures. Employers cannot automatically attribute every loss discovered after departure to an employee who has completed a handover, or unilaterally deduct the entirety of the employee’s final payments to offset the alleged damage. [1]"
      },
      {
        "type": "p",
        "text": "For work-related accounts and data, employers should review ownership, management rights and confidentiality obligations under contracts, internal policies and applicable law. The return of access cards and equipment, revocation of system access and transfer of work accounts should be implemented according to a plan, with responsibilities assigned and completion times recorded. Employers should also preserve relevant data through lawful means while avoiding unauthorised access to, copying of or deletion of private data on employees’ personal devices and accounts."
      },
      {
        "type": "p",
        "text": "Importantly, protection of business assets and information should not begin only when an employee announces their departure. Employers should establish rules in advance on asset management, access permissions, use of personal devices, data retention and information confidentiality. Such rules provide an important foundation for consistent and properly justified handover and access revocation procedures, reducing disputes when the employment relationship ends."
      },
      {
        "type": "h2",
        "text": "3 | FINAL SETTLEMENT OF SALARY, ANNUAL LEAVE, YEAR-END BONUSES AND PERSONAL INCOME TAX"
      },
      {
        "type": "p",
        "text": "Under Clause 1, Article 48 of the 2019 Labour Code, the parties must fully settle amounts relating to their respective entitlements within 14 working days from the date of employment termination; in certain statutory circumstances, this period may be extended but must not exceed 30 days. Pending completion of the handover does not automatically entitle the employer to extend the payment deadline. Human resources and accounting departments should prepare a properly substantiated final settlement statement, reconcile supporting documents and identify any disputed amounts. [1]"
      },
      {
        "type": "p",
        "text": "In addition to salary and contractually payable amounts, employers should review payment for unused annual leave where payment is required under Clause 3, Article 113 of the 2019 Labour Code; severance allowance or job-loss allowance where the relevant conditions are satisfied; and bonuses, including year-end bonuses or “13th-month salary”, according to their legal nature and the applicable employment contracts, collective labour agreements and bonus policies. It should not be assumed that every “13th-month salary” payment is a discretionary bonus or, conversely, a mandatory salary payment in all circumstances. Article 104 of the 2019 Labour Code is one of the provisions to consider when determining bonus entitlements. [1]"
      },
      {
        "type": "p",
        "text": "Employers should accurately determine the period of service used to calculate allowances, taking into account periods of participation in unemployment insurance and other periods recognised by law for the relevant purpose. Personal income tax withholding, issuance of tax withholding certificates and tax finalisation must comply with the tax rules in force, depending on the nature of the payments and the employee’s authorisation status for tax finalisation. It should not be asserted that withholding certificates must in every case be issued immediately before the handover is completed. [1][2]"
      },
      {
        "type": "p",
        "text": "Employers should also be mindful of administrative penalties for failing to fulfil their obligations to pay salary for unused annual leave. Under Clause 2, Article 23 of Decree No. 283/2026/ND-CP, effective from 10 September 2026, failure to pay, or insufficient payment of, salary for annual leave not taken or not fully taken when an employee resigns or loses their job may attract fines ranging from VND 5 million to VND 50 million for an employer who is an individual, depending on the number of affected employees. For an employer that is an organisation, the corresponding fines range from VND 10 million to VND 100 million pursuant to Clause 1, Article 7 of the Decree."
      },
      {
        "type": "p",
        "text": "In addition to monetary penalties, employers may be required to pay the outstanding salary in full together with interest pursuant to Point a, Clause 5, Article 23 of Decree No. 283/2026/ND-CP. Accordingly, employers should accurately reconcile unused annual leave days and the amounts payable before completing the final settlement upon employment termination, rather than relying solely on payroll records or leave balances recorded in the human resources system."
      },
      {
        "type": "h2",
        "text": "4 | COMPLETING INSURANCE DEREGISTRATION, CONFIRMING SOCIAL INSURANCE RECORDS AND RETURNING ORIGINAL DOCUMENTS"
      },
      {
        "type": "p",
        "text": "Under Clause 3, Article 48 of the 2019 Labour Code, employers are responsible for completing procedures to confirm the periods of social insurance and unemployment insurance contributions and returning any other original documents retained from employees. They must also provide copies of documents relating to the employee’s employment history upon request, as required by law. These obligations should be addressed independently of disputes concerning handover or material liability. Employers should not retain documents or delay confirmation of insurance contribution periods as a means of pressuring employees. [1]"
      },
      {
        "type": "p",
        "text": "Employers should reconcile insurance participation records, complete the procedures for reporting a reduction in covered employees and settle any outstanding contributions in accordance with applicable rules. Delays in completing these records may affect an employee’s ability to apply for unemployment benefits; employers may also face administrative penalties and potential liability for damages. Accordingly, employers should report reductions for the appropriate period, fulfil contribution obligations through the month of departure in accordance with the 2024 Law on Social Insurance, and prepare a signed handover acknowledgement when returning the confirmed social insurance record sheets to the employee."
      },
      {
        "type": "h2",
        "text": "5 | TERMINATING AUTHORITY TO REPRESENT THE COMPANY BEFORE THIRD PARTIES: INTERNAL HANDOVER ALONE IS NOT ENOUGH"
      },
      {
        "type": "p",
        "text": "An internal handover is insufficient where an employee was authorised to represent the company or conduct transactions with customers, suppliers, banks or government authorities. Employers should review powers of attorney, the scope and duration of representation, signing authority arrangements, transaction accounts and notices previously sent to third parties. It should not be assumed that all authority arising from a power of attorney automatically terminates merely because the employment relationship has ended: the continuing effect of representation must be determined by reference to the basis on which the authority was established, the terms of the authorisation and Article 140 of the 2015 Civil Code. [4]"
      },
      {
        "type": "p",
        "text": "Where necessary, employers should issue written instruments terminating or revoking authorisations, update authorised persons with banks and on transaction systems, and promptly notify relevant counterparties. Transactions entered into by persons who no longer have authority to represent the company must be assessed under the rules governing representation and the corresponding legal consequences; whether a third party knew or ought to have known of the limits of authority may be a material consideration. [4]"
      },
      {
        "type": "h2",
        "text": "6 | HANDLING AND DELETING EMPLOYEES’ PERSONAL DATA AFTER DEPARTURE"
      },
      {
        "type": "p",
        "text": "Point c, Clause 2, Article 25 of the Law on Personal Data Protection No. 91/2025/QH15 requires the deletion or destruction of employees’ personal data upon termination of their employment contracts, except where otherwise agreed or provided by law. Point b, Clause 2, Article 25 also requires data to be retained for the period prescribed by law or agreed upon. Employers should therefore classify records according to their processing purposes and the legal grounds for retention, rather than applying a blanket data deletion rule. [5]"
      },
      {
        "type": "p",
        "text": "Retaining employees’ personal data beyond the statutory or agreed retention period, or failing to delete or destroy such data upon employment termination where no exception applies, may be subject to penalties under Article 61 of Decree No. 330/2026/ND-CP. Clause 2, Article 61 provides a fine range of VND 50 million to VND 70 million for the listed violations; the applicable fine also depends on the identity of the offending party and the Decree’s general provisions. [5][6]"
      },
      {
        "type": "p",
        "text": "Employers should identify the records that must continue to be retained to fulfil employment, accounting, tax or insurance obligations, or to protect lawful rights and interests where there is a proper basis; determine the corresponding retention periods, restrict access and apply appropriate security measures. Data for which there is no longer a lawful basis for processing or retention should be securely deleted or destroyed, with the action documented. Retention for dispute-related purposes must also be assessed against the applicable legal grounds and necessity; it is not an unlimited exception."
      },
      {
        "type": "h2",
        "text": "| CONCLUSION"
      },
      {
        "type": "p",
        "text": "Employment termination is not merely an administrative human resources process. It is also a point at which employers must simultaneously manage the grounds for termination, handover evidence, payment obligations, insurance records, transaction authority and the lifecycle of personal data. A process prepared in advance, supported by verifiable records and clear allocations of responsibility, can help reduce disputes, protect assets and maintain compliance."
      },
      {
        "type": "p",
        "text": "Integritas Vu Legal advises businesses on reviewing the grounds and procedures for employment termination, preparing termination agreements, handover documentation and confidentiality arrangements, assessing payment and insurance obligations, and resolving disputes based on the documents and circumstances of each matter."
      },
      {
        "type": "p",
        "text": "For advice on employment law and corporate human resources risk management, please contact Integritas Vu Legal at contact@integritasvulegal.com."
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
