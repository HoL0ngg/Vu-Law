import type { Article } from "./types";

/**
 * Legal Insights, tenth article ("No signed contract, only emails, messages and bank transfers: how can businesses substantiate their claims? (Topic 03: Evidence and proof)"). Generated with
 * `scripts/drive-sync/convert.py` from the Client's `Blogs/18_11 - Chứng cứ và Chứng minh trong Tố tụng - Viet ver.docx` and `... - Eng ver.docx`, then checked line by
 * line against the Word files: every line is on the page. Do not tidy the wording here:
 * ivl-content-update rule, the Client is a law firm.
 *
 * One exception, as on the earlier articles (site owner, 2026-10-28): the Vietnamese legal
 * notice's "Trách Nhiện Hữu Hạn" reads "Trách Nhiệm Hữu Hạn".
 */
export const evidenceAndProof: Article = {
  slug: "khong-co-hop-dong-giay-chi-co-email-tin-nhan-va-chuyen-khoan-doanh-nghiep-chung",
  // The date in the names of the Client's files for this article.
  publishedAt: "2026-11-18",
  // TODO(client): confirm the category. "Legal Insight" like the other articles.
  category: 1,
  coverImage: "/images/blog/evidence-and-proof.jpg",
  coverPosition: "50% 52%",
  vi: {
    "title": "KHÔNG CÓ HỢP ĐỒNG GIẤY, CHỈ CÓ EMAIL, TIN NHẮN VÀ CHUYỂN KHOẢN: DOANH NGHIỆP CHỨNG MINH QUYỀN YÊU CẦU BẰNG CÁCH NÀO?",
    "kicker": [
      "CHUYÊN ĐỀ 03| CHỨNG CỨ VÀ TỐ TỤNG"
    ],
    "topic": "CHỦ ĐỀ 03: CHỨNG CỨ VÀ CHỨNG MINH",
    "blocks": [
      {
        "type": "p",
        "text": "Tiếp nối bài viết mở đầu “Thắng kiện chưa đồng nghĩa với thu hồi được tiền”, Integritas Vũ Legal triển khai chuỗi Legal Insights chuyên sâu, lần lượt phân tích những vấn đề pháp lý và thực tiễn trọng yếu trong quá trình bảo vệ và thực thi quyền yêu cầu thanh toán, từ xác định bản chất tranh chấp, chiến lược giải quyết, thu thập, đánh giá chứng cứ và chứng minh trong quá trình giải quyết vụ việc."
      },
      {
        "type": "p",
        "text": "Trong hoạt động giao dịch thương mại, vẫn tồn tại trường hợp doanh nghiệp xác nhận đơn hàng, trao đổi điều kiện mua bán và thanh toán qua email, ứng dụng nhắn tin hoặc chuyển khoản, thay vì ký một hợp đồng giấy hoàn chỉnh. Khi tranh chấp phát sinh, đối tác có thể phủ nhận việc giao kết, khối lượng đã nhận hoặc số tiền còn phải thanh toán."
      },
      {
        "type": "p",
        "text": "Trên thực tế, không ít vụ án bị Tòa án bác một phần hoặc toàn bộ yêu cầu thanh toán không phải vì giao dịch không tồn tại, mà vì nguyên đơn không cung cấp đủ chứng cứ hợp lệ để chứng minh căn cứ phát sinh nghĩa vụ. Vấn đề quyết định không chỉ là giao dịch có thực sự diễn ra hay không, mà là bên yêu cầu có chứng minh được các tình tiết làm phát sinh nghĩa vụ bằng chứng cứ hợp pháp, xác thực và đủ sức thuyết phục hay không. Một hồ sơ gồm nhiều tài liệu vẫn có thể không đủ căn cứ để Tòa án chấp nhận yêu cầu."
      },
      {
        "type": "h2",
        "text": "1| AI CÓ NGHĨA VỤ CHỨNG MINH?"
      },
      {
        "type": "p",
        "text": "Điều 91 Bộ luật Tố tụng dân sự 2015 quy định: đương sự yêu cầu Tòa án bảo vệ quyền, lợi ích hợp pháp của mình có nghĩa vụ thu thập, cung cấp và giao nộp chứng cứ chứng minh yêu cầu, trừ những trường hợp luật định. Đương sự phản đối yêu cầu của bên kia cũng phải chứng minh căn cứ phản đối; người đưa ra yêu cầu phản tố phải chứng minh yêu cầu đó. [1]"
      },
      {
        "type": "p",
        "text": "Trong tranh chấp thanh toán, doanh nghiệp cần chứng minh tối thiểu: (i) chủ thể giao dịch và thẩm quyền của người trao đổi; (ii) việc xác lập thỏa thuận, nội dung và giá trị nghĩa vụ; (iii) việc giao hàng hoặc cung cấp dịch vụ; (iv) thời hạn thanh toán; và (v) số tiền còn phải thanh toán. Cần phân biệt tài liệu được giao nộp với chứng cứ có giá trị chứng minh đối với từng tình tiết."
      },
      {
        "type": "p",
        "text": "Nghĩa vụ chứng minh trước hết thuộc về nguyên đơn; trường hợp, bị đơn có yêu cầu phản tố cũng phải có nghĩa vụ chứng minh cho luận điểm của mình. Theo khoản 4 Điều 91, khi đương sự không cung cấp hoặc cung cấp không đủ chứng cứ, Tòa án giải quyết trên cơ sở chứng cứ có trong hồ sơ; điều này không đồng nghĩa mọi yêu cầu thiếu một loại tài liệu cụ thể đều bị bác. Đồng thời, phải xem xét các tình tiết không phải chứng minh theo Điều 92 và những ngoại lệ về nghĩa vụ chứng minh theo pháp luật. [1]"
      },
      {
        "type": "h2",
        "text": "2| KHÔNG KÝ HỢP ĐỒNG BẰNG VĂN BẢN CÓ ĐỒNG NGHĨA KHÔNG CÓ GIAO DỊCH?"
      },
      {
        "type": "p",
        "text": "Điều 119 Bộ luật Dân sự 2015 và các Điều 24, 74 Luật Thương mại 2005 cho phép nhiều giao dịch được xác lập bằng lời nói, văn bản hoặc hành vi cụ thể; riêng giao dịch mà luật yêu cầu hình thức nhất định phải tuân thủ quy định tương ứng. Vì vậy, không có tài liệu mang tên “hợp đồng” không mặc nhiên có nghĩa là không có quan hệ hợp đồng. [2] [3]"
      },
      {
        "type": "p",
        "text": "Trọng tâm chứng minh là sự thống nhất ý chí và quá trình thực hiện: báo giá, đơn đặt hàng, xác nhận của người có thẩm quyền, giao nhận, nghiệm thu, hóa đơn, thanh toán và trao đổi sau giao dịch. Những điều khoản như phạt vi phạm, lãi suất hoặc thỏa thuận giải quyết tranh chấp không được suy đoán là đã tồn tại nếu không có căn cứ xác lập."
      },
      {
        "type": "h2",
        "text": "3| EMAIL, ZALO, TIN NHẮN VÀ DỮ LIỆU ĐIỆN TỬ CÓ PHẢI CHỨNG CỨ KHÔNG?"
      },
      {
        "type": "p",
        "text": "Theo các Điều 93–95 Bộ luật Tố tụng dân sự 2015, dữ liệu điện tử là một nguồn chứng cứ; Điều 8 và Điều 11 Luật Giao dịch điện tử 2023 cũng khẳng định thông điệp dữ liệu không bị phủ nhận giá trị pháp lý chỉ vì tồn tại dưới dạng điện tử và có thể được sử dụng làm chứng cứ theo pháp luật tố tụng. Tuy nhiên, việc được xác định là nguồn chứng cứ không đồng nghĩa nội dung đương nhiên được Tòa án tin nhận. [1] [4]"
      },
      {
        "type": "p",
        "text": "Ảnh chụp màn hình, bản in email hoặc tin nhắn có thể được giao nộp để Tòa án xem xét, nhưng giá trị chứng minh phụ thuộc vào khả năng xác thực nguồn gốc, tính toàn vẹn, chủ thể trao đổi và sự phù hợp với các chứng cứ khác. Không có quy tắc chung rằng mọi bản chụp màn hình đều vô giá trị, hoặc cứ có vi bằng thì nội dung tin nhắn mặc nhiên được xác nhận là đúng."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp nên làm rõ: (i) dữ liệu được tạo lập, gửi, nhận và lưu trữ như thế nào; (ii) có thể truy cập, đối chiếu nội dung đầy đủ và phát hiện dấu hiệu chỉnh sửa hay không; (iii) ai thực sự sử dụng tài khoản, có thẩm quyền đại diện hay đã được doanh nghiệp chấp thuận giao dịch hay không. Điều 10 Luật Giao dịch điện tử 2023 quy định riêng điều kiện để thông điệp dữ liệu có giá trị như bản gốc; Điều 11 điều chỉnh việc đánh giá giá trị dùng làm chứng cứ. [4]"
      },
      {
        "type": "h2",
        "text": "4| CHỨNG TỪ CHUYỂN KHOẢN CHỨNG MINH ĐƯỢC ĐIỀU GÌ?"
      },
      {
        "type": "p",
        "text": "Sao kê, xác nhận giao dịch hoặc ủy nhiệm chi giúp xác định dòng tiền, thời điểm, tài khoản chuyển và nhận; nhưng tự thân không phải lúc nào cũng chứng minh được bản chất pháp lý của khoản tiền hay toàn bộ nghĩa vụ còn tồn tại."
      },
      {
        "type": "p",
        "text": "Ví dụ, cùng một khoản chuyển khoản có thể là tiền hàng, tiền vay, tiền ứng trước hoặc thanh toán cho giao dịch khác. Nội dung chuyển khoản ghi rõ mã đơn hàng là một căn cứ liên kết hữu ích, nhưng vẫn cần đối chiếu với đơn hàng, hóa đơn, chứng từ giao nhận và trao đổi giữa các bên. Nếu nội dung chuyển khoản không rõ, nên bổ sung chứng cứ về mục đích thanh toán, người thụ hưởng và việc đối tác đã nhận, sử dụng khoản tiền."
      },
      {
        "type": "h2",
        "text": "5| ĐỐI TÁC CỐ TÌNH KHÔNG KÝ BIÊN BẢN ĐỐI CHIẾU CÔNG NỢ: GIẢI PHÁP CHO DOANH NGHIỆP"
      },
      {
        "type": "p",
        "text": "Biên bản đối chiếu công nợ có chữ ký của các bên là chứng cứ quan trọng, nhưng không phải điều kiện bắt buộc trong mọi tranh chấp thanh toán. Việc đối tác không ký biên bản không tự động làm mất quyền khởi kiện."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp có thể chứng minh số dư nghĩa vụ bằng hệ thống tài liệu liên kết: đơn hàng, chứng từ giao nhận hoặc nghiệm thu, hóa đơn, chứng từ thanh toán, bảng đối chiếu và trao đổi xác nhận. Việc xuất hóa đơn hoặc kê khai thuế chỉ là những tình tiết cần đánh giá cùng chứng cứ khác; không tự nó chứng minh bên mua đã nhận đủ hàng hoặc còn nợ đúng số tiền được yêu cầu."
      },
      {
        "type": "p",
        "text": "Không nên coi việc đối tác im lặng trước thư yêu cầu thanh toán là sự thừa nhận công nợ. Điều 393 Bộ luật Dân sự 2015 liên quan đến sự im lặng khi chấp nhận đề nghị giao kết hợp đồng trong trường hợp có thỏa thuận hoặc thói quen đã được xác lập giữa các bên; không thể áp dụng máy móc để suy ra việc xác nhận số dư công nợ. Chỉ khi có căn cứ cụ thể về thỏa thuận, tập quán giao dịch hoặc hành vi xác nhận mới có thể xem xét giá trị chứng minh của sự im lặng. [2]"
      },
      {
        "type": "h2",
        "text": "6| BẢO TOÀN TÍNH TOÀN VẸN CỦA DỮ LIỆU ĐIỆN TỬ"
      },
      {
        "type": "p",
        "text": "Ngay khi có dấu hiệu tranh chấp, doanh nghiệp nên sao lưu có kiểm soát email, tệp đính kèm, lịch sử trao đổi, dữ liệu trên thiết bị và thông tin liên quan đến tài khoản; ghi nhận thời điểm, người thực hiện và cách thức trích xuất. Tránh tự ý cắt ghép, chỉnh sửa hoặc chỉ lưu một phần hội thoại làm mất ngữ cảnh. Việc bảo toàn phải tuân thủ quy định về bảo mật, dữ liệu cá nhân và quyền truy cập hợp pháp."
      },
      {
        "type": "p",
        "text": "Có thể cân nhắc lập vi bằng để ghi nhận sự kiện, hành vi , hoặc đề nghị giám định khi có tranh chấp về tính xác thực. Tuy nhiên, vi bằng không thay thế việc xác minh người gửi, tính đúng đắn của nội dung giao dịch, cũng không bảo đảm Tòa án sẽ chấp nhận yêu cầu. Cần lưu giữ dữ liệu nguồn và các chứng cứ độc lập để đối chiếu. [5]"
      },
      {
        "type": "h2",
        "text": "7| TỰ MÌNH THU THẬP CHỨNG CỨ BẤT THÀNH: KHI NÀO CẦN YÊU CẦU TÒA ÁN THU THẬP CHỨNG CỨ?"
      },
      {
        "type": "p",
        "text": "Theo các Điều 97 và 106 Bộ luật Tố tụng dân sự 2015, đương sự có quyền chủ động thu thập chứng cứ, yêu cầu cơ quan, tổ chức, cá nhân đang lưu giữ cung cấp tài liệu; nếu đã áp dụng biện pháp cần thiết mà không thể tự thu thập, đương sự có thể đề nghị Tòa án yêu cầu cung cấp hoặc tiến hành thu thập theo trình tự luật định. Đơn đề nghị cần xác định rõ vấn đề phải chứng minh, tài liệu cần thu thập, nơi lưu giữ và lý do không tự thu thập được. [1]"
      },
      {
        "type": "p",
        "text": "Tùy tính cần thiết và tính hợp pháp, Tòa án có thể xem xét yêu cầu cung cấp thông tin từ ngân hàng, nhà cung cấp dịch vụ hoặc cơ quan quản lý. Doanh nghiệp không nên mặc định mọi dữ liệu tài khoản, nội dung trao đổi hay nhật ký kỹ thuật đều còn được lưu giữ hoặc có thể tiếp cận. Việc đề nghị Tòa án hỗ trợ không thay thế nghĩa vụ chủ động chuẩn bị chứng cứ của đương sự."
      },
      {
        "type": "h2",
        "text": "8| NHỮNG SAI LẦM PHỔ BIẾN KHI CHUẨN BỊ CHỨNG CỨ ĐIỆN TỬ"
      },
      {
        "type": "p",
        "text": "Sai lầm thường gặp là chỉ nộp bản in tin nhắn hoặc ảnh chụp màn hình đã cắt rời, không giữ dữ liệu để đối chiếu, không giải thích được xuất xứ hoặc không chứng minh được tài khoản thuộc người có liên quan. Khi tính xác thực bị tranh chấp, Tòa án đánh giá từng tài liệu cùng toàn bộ chứng cứ; không thể khẳng định mọi ảnh chụp đều bị loại, cũng không thể khẳng định cứ thiếu điện thoại gốc là yêu cầu khởi kiện chắc chắn bị bác."
      },
      {
        "type": "p",
        "text": "Rủi ro thứ hai là không chứng minh được người trao đổi có thẩm quyền hoặc giao dịch đã được doanh nghiệp đối tác chấp thuận. Một địa chỉ email cá nhân hoặc tài khoản Zalo mang tên nhân viên không tự động ràng buộc pháp nhân; cần xem xét chức vụ, phân công, ủy quyền, quá trình thực hiện và hành vi chấp nhận của doanh nghiệp."
      },
      {
        "type": "p",
        "text": "Ngược lại, việc người gửi không phải đại diện theo pháp luật cũng chưa đủ để kết luận mọi giao dịch vô hiệu hoặc không ràng buộc doanh nghiệp. Cần đối chiếu các quy định về đại diện, phạm vi thẩm quyền và việc công nhận hoặc thực hiện giao dịch trong hoàn cảnh cụ thể."
      },
      {
        "type": "h2",
        "text": "THỰC TIỄN XÉT XỬ:"
      },
      {
        "type": "list",
        "items": [
          "Bản án số 01/2022/DS-PT ngày 17/11/2022 của TAND tỉnh Bắc Ninh: Tòa giữ nguyên việc bác yêu cầu đòi 1,38 tỷ đồng vì chứng cứ trong hồ sơ, bao gồm các tin nhắn Zalo được viện dẫn, không đủ chứng minh khoản vay chưa thanh toán; không nên diễn giải rằng Tòa án mặc nhiên bác mọi chứng cứ Zalo. [6]",
          "Bản án số 87/2026/DS-PT ngày 27/01/2026 của TAND tỉnh Vĩnh Long: Tòa không có đủ cơ sở xem xét bản photocopy tin nhắn Zalo khi tài khoản đã bị xóa, không xác minh được người sử dụng và không có chứng cứ bổ trợ; tuy nhiên Tòa tiếp tục đánh giá các chứng cứ khác về khoản vay. [7]"
        ]
      },
      {
        "type": "p",
        "text": "Hai vụ án cho thấy trọng tâm là tính xác thực và sức chứng minh của toàn bộ hồ sơ, không chỉ hình thức điện tử của tài liệu."
      },
      {
        "type": "h2",
        "text": "KẾT LUẬN|"
      },
      {
        "type": "p",
        "text": "Trong tranh chấp dân sự, thương mại không có hợp đồng, thỏa thuận bằng văn bản, quyền yêu cầu không được quyết định chỉ bởi số lượng tài liệu doanh nghiệp nắm giữ. Cần xây dựng chuỗi chứng cứ hợp pháp, xác thực và nhất quán để chứng minh ai đã thỏa thuận, đã thực hiện nghĩa vụ gì, khoản thanh toán nào đã phát sinh và số dư còn lại. Chứng cứ điện tử có thể giữ vai trò quan trọng, nhưng không tự động bảo đảm kết quả tố tụng."
      },
      {
        "type": "p",
        "text": "Integritas Vũ Legal hỗ trợ doanh nghiệp rà soát hồ sơ giao dịch, xác định các tình tiết cần chứng minh, đánh giá tính xác thực của dữ liệu điện tử và xây dựng phương án thu thập, bảo toàn, giao nộp chứng cứ phù hợp. Trên cơ sở từng vụ việc, IVL tư vấn chiến lược giải quyết tranh chấp và đại diện tham gia tố tụng theo phạm vi dịch vụ được thỏa thuận."
      },
      {
        "type": "p",
        "text": "Để được hỗ trợ đánh giá hồ sơ chứng cứ và phương án giải quyết tranh chấp, vui lòng liên hệ Integritas Vũ Legal: contact@integritasvulegal.com."
      },
      {
        "type": "h2",
        "text": "NGUỒN PHÁP LÝ VÀ DỮ LIỆU THAM KHẢO"
      },
      {
        "type": "note",
        "text": "[1] Bộ luật Tố tụng dân sự số 92/2015/QH13, đặc biệt các Điều 91–97, 106, 108 (và các sửa đổi, bổ sung có hiệu lực tại thời điểm áp dụng). Nguồn: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[2] Bộ luật Dân sự số 91/2015/QH13, các Điều 119, 142–143, 393 và quy định liên quan về đại diện. Nguồn: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[3] Luật Thương mại số 36/2005/QH11, các Điều 24, 74 (đối chiếu văn bản hiện hành và luật chuyên ngành). Nguồn: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[4] Luật Giao dịch điện tử số 20/2023/QH15, các Điều 8–11. Nguồn: https://vbpl.moj.gov.vn/[5] Nghị định 08/2020/NĐ-CP về tổ chức và hoạt động của Thừa phát lại, quy định về vi bằng (đối chiếu sửa đổi nếu có).[6] Bản án 01/2022/DS-PT, TAND tỉnh Bắc Ninh, 17/11/2022: https://congbobanan.toaan.gov.vn/5ta1106996t1cvn/Ban_an_PT_Doan__Lan.pdf[7] Bản án 87/2026/DS-PT, TAND tỉnh Vĩnh Long, 27/01/2026: https://hethongphapluat.com/ban-an-so-87-2026-ds-pt-ngay-27-01-2026-cua-toa-an-nhan-dan-tinh-vinh-long-ve-tranh-chap-hop-dong-vay-tai-san.html________________________________________"
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
    "title": "NO SIGNED CONTRACT, ONLY EMAILS, MESSAGES AND BANK TRANSFERS: HOW CAN BUSINESSES SUBSTANTIATE THEIR CLAIMS?",
    "topic": "TOPIC 03: EVIDENCE AND PROOF",
    "blocks": [
      {
        "type": "p",
        "text": "Following the introductory article “A Favourable Judgment Does Not Necessarily Mean Recovery of the Money”, Integritas Vu Legal presents a series of in-depth Legal Insights examining key legal and practical issues in protecting and enforcing the right to claim payment, from identifying the nature of a dispute and devising a dispute-resolution strategy to collecting and assessing evidence and proving facts during the resolution of a case."
      },
      {
        "type": "p",
        "text": "In commercial transactions, businesses may confirm orders, discuss terms of sale and purchase, and make payments by email, messaging applications or bank transfers instead of signing a complete paper contract. When a dispute arises, the counterparty may deny that an agreement was concluded, the quantity of goods received or the amount still payable."
      },
      {
        "type": "p",
        "text": "In practice, in a number of cases, courts have rejected all or part of payment claims not because the underlying transaction did not occur, but because the plaintiff failed to provide sufficient valid evidence to prove the basis on which the obligation arose. The decisive issue is not only whether the transaction actually occurred, but whether the claimant can prove the facts giving rise to the obligation by lawful, authentic and sufficiently persuasive evidence. Even a file containing numerous documents may be insufficient for the Court to uphold the claim."
      },
      {
        "type": "h2",
        "text": "1 | WHO BEARS THE BURDEN OF PROOF?"
      },
      {
        "type": "p",
        "text": "Article 91 of the 2015 Civil Procedure Code provides that a party requesting the Court to protect its lawful rights and interests must collect, provide and submit evidence supporting its claim, subject to statutory exceptions. A party disputing the other party’s claim must also substantiate its objections, and a party making a counterclaim must prove that counterclaim. [1]"
      },
      {
        "type": "p",
        "text": "In a  dispute, a business needs to prove, at a minimum: (i) the parties to the transaction and the authority of the persons communicating; (ii) the formation of the agreement, its terms and the value of the obligation; (iii) delivery of goods or provision of services; (iv) the payment deadline; and (v) the outstanding amount. A distinction must be drawn between documents submitted and evidence having probative value in relation to each fact."
      },
      {
        "type": "p",
        "text": "The burden of proof rests primarily with the plaintiff; where the defendant brings a counterclaim, the defendant must also prove the grounds for that counterclaim. Under clause 4, Article 91, where a party fails to provide evidence or provides insufficient evidence, the Court resolves the case on the basis of the evidence in the case file; this does not mean that every claim lacking a particular type of document must be rejected. Facts that need not be proved under Article 92 and statutory exceptions to the burden of proof must also be considered. [1]"
      },
      {
        "type": "h2",
        "text": "2 | DOES THE ABSENCE OF A WRITTEN CONTRACT MEAN THERE WAS NO TRANSACTION?"
      },
      {
        "type": "p",
        "text": "Article 119 of the 2015 Civil Code and Articles 24 and 74 of the 2005 Commercial Law permit many transactions to be concluded orally, in writing or through specific conduct. Transactions for which the law prescribes a particular form must comply with that requirement. Accordingly, the absence of a document entitled “Contract” does not necessarily mean that no contractual relationship exists. [2][3]"
      },
      {
        "type": "p",
        "text": "The focus of proof is the parties’ mutual agreement and the course of performance: quotations, purchase orders, confirmations by authorised persons, delivery and acceptance records, invoices, payments and post-transaction communications. Terms concerning contractual penalties, interest rates or dispute resolution must not be presumed to exist without a basis for establishing that they were agreed."
      },
      {
        "type": "h2",
        "text": "3 | CAN EMAILS, ZALO MESSAGES AND ELECTRONIC DATA CONSTITUTE EVIDENCE?"
      },
      {
        "type": "p",
        "text": "Under Articles 93–95 of the 2015 Civil Procedure Code, electronic data is a source of evidence. Articles 8 and 11 of the 2023 Law on Electronic Transactions also confirm that a data message is not denied legal validity merely because it is in electronic form and may be used as evidence in accordance with procedural law. However, recognition as a source of evidence does not mean that its contents will automatically be accepted as true by the Court. [1][4]"
      },
      {
        "type": "p",
        "text": "Screenshots and printouts of emails or messages may be submitted for the Court’s consideration, but their probative value depends on whether their origin, integrity, participants and consistency with other evidence can be verified. There is no general rule that all screenshots are devoid of evidential value, or that the existence of a bailiff’s record automatically establishes the truth of the messages recorded."
      },
      {
        "type": "p",
        "text": "Businesses should clarify: (i) how the data was created, sent, received and stored; (ii) whether its full contents can be accessed and cross-checked and signs of alteration detected; and (iii) who actually used the account, whether that person had authority to represent the business or whether the business had approved the transaction. Article 10 of the 2023 Law on Electronic Transactions separately prescribes the conditions under which a data message has the same value as an original; Article 11 governs the assessment of its evidential value. [4]"
      },
      {
        "type": "h2",
        "text": "4 | WHAT CAN BANK TRANSFER RECORDS PROVE?"
      },
      {
        "type": "p",
        "text": "Bank statements, transaction confirmations and payment orders can establish the movement of funds, timing, and sending and receiving accounts. On their own, however, they do not always prove the legal nature of a payment or the entirety of an outstanding obligation."
      },
      {
        "type": "p",
        "text": "For example, the same transfer might represent payment for goods, a loan, an advance or payment under another transaction. A payment reference identifying an order number is a useful link but should still be checked against the order, invoice, delivery records and correspondence. Where the transfer description is unclear, further evidence should be obtained concerning the purpose of payment, the beneficiary and the counterparty’s receipt and use of the funds."
      },
      {
        "type": "h2",
        "text": "5 | THE COUNTERPARTY DELIBERATELY REFUSES TO SIGN A DEBT RECONCILIATION STATEMENT: WHAT CAN THE BUSINESS DO?"
      },
      {
        "type": "p",
        "text": "A debt reconciliation statement signed by both parties is important evidence, but it is not mandatory in every payment dispute. Refusal to sign does not automatically extinguish the right to sue."
      },
      {
        "type": "p",
        "text": "A business may prove the outstanding balance through a coherent body of evidence, including orders, delivery or acceptance records, invoices, payment records, reconciliation schedules and confirming correspondence. Issuing an invoice or making a tax declaration is a matter to be assessed alongside other evidence; neither alone proves that the buyer received all goods or owes the exact amount claimed."
      },
      {
        "type": "p",
        "text": "A counterparty’s silence in response to a demand for payment should not automatically be treated as acknowledgement of debt. Article 393 of the 2015 Civil Code concerns silence as acceptance of an offer to enter into a contract where the parties have agreed or established a relevant practice; it cannot be mechanically applied to infer confirmation of a debt balance. The evidential significance of silence may be considered only where a specific agreement, course of dealing or confirming conduct provides a basis. [2]"
      },
      {
        "type": "h2",
        "text": "6 | PRESERVING THE INTEGRITY OF ELECTRONIC DATA"
      },
      {
        "type": "p",
        "text": "As soon as there are signs of a dispute, a business should make controlled backups of emails, attachments, communication histories, device data and relevant account information, recording when, by whom and how the data was extracted. It should avoid unilaterally cutting, combining or altering data, or retaining only part of a conversation so that its context is lost. Preservation must comply with confidentiality, personal data protection and lawful-access requirements."
      },
      {
        "type": "p",
        "text": "Consideration may be given to having a bailiff draw up a record (vi bằng) of events or conduct, or requesting expert examination where authenticity is disputed. However, such a record does not replace verification of the sender or of the accuracy of the transaction’s contents, nor does it guarantee that the Court will uphold a claim. Source data and independent evidence should be retained for cross-checking. [5]"
      },
      {
        "type": "h2",
        "text": "7 | WHEN A PARTY CANNOT OBTAIN EVIDENCE ITSELF, WHEN SHOULD IT ASK THE COURT TO COLLECT IT?"
      },
      {
        "type": "p",
        "text": "Under Articles 97 and 106 of the 2015 Civil Procedure Code, parties have the right to collect evidence themselves and request documents from agencies, organisations and individuals holding them. If, after taking necessary measures, a party cannot obtain the evidence itself, it may request the Court to require its production or collect it in accordance with the statutory procedure. The application should clearly identify the fact to be proved, the documents sought, where they are held and why the applicant cannot obtain them independently. [1]"
      },
      {
        "type": "p",
        "text": "Subject to necessity and legality, the Court may consider requests for information from banks, service providers or regulatory authorities. Businesses should not assume that all account data, correspondence or technical logs remain available or accessible. Seeking the Court’s assistance does not replace a party’s responsibility to prepare its own evidence."
      },
      {
        "type": "h2",
        "text": "8 | COMMON MISTAKES WHEN PREPARING ELECTRONIC EVIDENCE"
      },
      {
        "type": "p",
        "text": "A common mistake is submitting only printouts of messages or isolated screenshots without retaining the underlying data for cross-checking, explaining their origin or proving that the account belonged to the person concerned. Where authenticity is disputed, the Court assesses each document together with the evidence as a whole. It cannot be asserted that all screenshots will be excluded, or that a claim will necessarily be rejected if the original phone is unavailable."
      },
      {
        "type": "p",
        "text": "Another risk is failing to prove that the person communicating had authority or that the counterparty approved the transaction. A personal email address or Zalo account bearing an employee’s name does not automatically bind a legal entity. The person’s position, duties, authorisation, performance history and the business’s conduct in accepting the transaction must be examined."
      },
      {
        "type": "p",
        "text": "Conversely, the fact that a sender was not the legal representative does not, by itself, render every transaction invalid or non-binding. The rules on representation, scope of authority and subsequent recognition or performance must be considered in the specific circumstances."
      },
      {
        "type": "h2",
        "text": "JUDICIAL PRACTICE:"
      },
      {
        "type": "list",
        "items": [
          "Judgment No. 01/2022/DS-PT dated 17 November 2022 of the People’s Court of Bac Ninh Province: the Court upheld the rejection of a claim for VND 1.38 billion because the evidence in the case file, including the Zalo messages relied upon, was insufficient to prove that the loan remained unpaid. This should not be interpreted as the Court automatically rejecting all Zalo evidence. [6]",
          "Judgment No. 87/2026/DS-PT dated 27 January 2026 of the People’s Court of Vinh Long Province: the Court lacked sufficient grounds to consider photocopies of Zalo messages where the account had been deleted, the user could not be verified and there was no corroborating evidence; however, the Court continued to assess other evidence concerning the loan. [7]"
        ]
      },
      {
        "type": "p",
        "text": "These cases illustrate that authenticity and the probative strength of the evidence as a whole—not merely its electronic form—are central."
      },
      {
        "type": "h2",
        "text": "CONCLUSION |"
      },
      {
        "type": "p",
        "text": "In civil and commercial disputes without a written contract or agreement, a claim is not determined solely by the number of documents held by the business. A lawful, authentic and consistent chain of evidence must be established to prove who reached the agreement, which obligations were performed, which payments arose and what balance remains outstanding. Electronic evidence may play an important role, but does not automatically guarantee the outcome of proceedings."
      },
      {
        "type": "p",
        "text": "Integritas Vu Legal assists businesses in reviewing transaction files, identifying facts requiring proof, assessing the authenticity of electronic data and developing appropriate procedures for collecting, preserving and submitting evidence. Depending on the matter, IVL advises on dispute-resolution strategies and represents clients in proceedings within the agreed scope of services."
      },
      {
        "type": "h2",
        "text": "LEGAL SOURCES AND JUDGMENTS REFERENCED"
      },
      {
        "type": "note",
        "text": "[1] Civil Procedure Code No. 92/2015/QH13, particularly Articles 91–97, 106 and 108 (and amendments effective at the relevant time). Source: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[2] Civil Code No. 91/2015/QH13, Articles 119, 142–143 and 393, and relevant provisions on representation. Source: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[3] Commercial Law No. 36/2005/QH11, Articles 24 and 74 (check current legislation and sector-specific laws). Source: https://vbpl.moj.gov.vn/"
      },
      {
        "type": "note",
        "text": "[4] Law on Electronic Transactions No. 20/2023/QH15, Articles 8–11. Source: https://vbpl.moj.gov.vn/[5] Decree No. 08/2020/ND-CP on the organisation and operation of bailiffs, including provisions on bailiffs’ records (check amendments, if any).[6] Judgment No. 01/2022/DS-PT, People’s Court of Bac Ninh Province, 17 November 2022: https://congbobanan.toaan.gov.vn/5ta1106996t1cvn/Ban_an_PT_Doan__Lan.pdf[7] Judgment No. 87/2026/DS-PT, People’s Court of Vinh Long Province, 27 January 2026: https://hethongphapluat.com/ban-an-so-87-2026-ds-pt-ngay-27-01-2026-cua-toa-an-nhan-dan-tinh-vinh-long-ve-tranh-chap-hop-dong-vay-tai-san.html"
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
