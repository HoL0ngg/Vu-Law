import type { Article } from "./types";

/**
 * Legal Insights, eleventh article ("Delayed delivery by a contractual counterparty: should
 * businesses continue or terminate the contract?"). Generated with
 * `scripts/drive-sync/convert.py` from the Client's single Word file
 * `Blogs/20_11 - Đối tác vi phạm tiến độ giao hàng - Viet-en ver.docx`, which holds the
 * Vietnamese article and then the English one (the converter splits it at the first legal
 * notice), then checked line by line against that file: every line is on the page. Do not
 * tidy the wording here: ivl-content-update rule, the Client is a law firm.
 *
 * The Client numbers its sections "1." to "6." and ends with an unnumbered "Kết luận" /
 * "Conclusion"; the opening paragraph is a body paragraph in both languages (the English one
 * is short enough to be a standfirst, the Vietnamese one is not, so neither is).
 */
export const supplierDeliveryDelay: Article = {
  slug: "doi-tac-vi-pham-tien-do-giao-hang-doanh-nghiep-nen-tiep-tuc-hop-dong-hay-xem",
  // 20 November 2026: the date in the name of the Client's file.
  publishedAt: "2026-11-20",
  // TODO(client): confirm the category. "Legal Insight" like the other articles.
  category: 1,
  // The Client's picture "Post 20.11.jpg" (1024x1024, stacked case files in front of a blurred
  // meeting), cropped on cards towards the stack of papers.
  coverImage: "/images/blog/supplier-delivery-delay.jpg",
  coverPosition: "50% 55%",
  vi: {
    "title": "ĐỐI TÁC VI PHẠM TIẾN ĐỘ GIAO HÀNG: DOANH NGHIỆP NÊN TIẾP TỤC HỢP ĐỒNG HAY XEM XÉT CHẤM DỨT?",
    "blocks": [
      {
        "type": "p",
        "text": "Trong hoạt động thương mại, việc đối tác giao hàng chậm tiến độ có thể làm gián đoạn sản xuất, ảnh hưởng đến các cam kết với khách hàng và phát sinh những chi phí ngoài dự kiến. Tuy nhiên, không phải mọi hành vi giao hàng chậm đều là căn cứ để doanh nghiệp ngay lập tức chấm dứt hoặc hủy bỏ hợp đồng."
      },
      {
        "type": "p",
        "text": "Quyết định tiếp tục hợp đồng hay áp dụng biện pháp pháp lý cần được đặt trên cơ sở đánh giá toàn diện: mức độ vi phạm, nguyên nhân, trách nhiệm của các bên, thiệt hại thực tế và khả năng khắc phục."
      },
      {
        "type": "h2",
        "text": "1. Giao hàng chậm có phải là căn cứ để chấm dứt hợp đồng?"
      },
      {
        "type": "p",
        "text": "Trước hết, doanh nghiệp cần kiểm tra điều khoản về thời hạn giao hàng, các mốc tiến độ, điều kiện chấm dứt và chế tài đã thỏa thuận."
      },
      {
        "type": "p",
        "text": "Theo Luật Thương mại 2005, việc áp dụng chế tài đình chỉ thực hiện hợp đồng hoặc hủy bỏ hợp đồng, về nguyên tắc, phải dựa trên một trong hai căn cứ: xảy ra hành vi vi phạm mà các bên đã thỏa thuận là điều kiện áp dụng chế tài tương ứng; hoặc có hành vi vi phạm cơ bản nghĩa vụ hợp đồng, đồng thời phải xem xét các trường hợp miễn trách nhiệm theo luật."
      },
      {
        "type": "p",
        "text": "Vi phạm cơ bản được xác định dựa trên mức độ thiệt hại gây ra cho bên kia đến mức làm cho bên đó không đạt được mục đích của việc giao kết hợp đồng. Vì vậy, cần phân biệt giữa việc chậm giao hàng có thể khắc phục và việc chậm giao hàng khiến mục đích thương mại của hợp đồng không còn đạt được."
      },
      {
        "type": "p",
        "text": "Đối với hợp đồng giao hàng nhiều đợt, doanh nghiệp cũng cần đánh giá khả năng xử lý riêng từng đợt giao hàng thay vì mặc nhiên hủy bỏ toàn bộ hợp đồng."
      },
      {
        "type": "h2",
        "text": "2. Xác định nguyên nhân vi phạm trước khi quy trách nhiệm"
      },
      {
        "type": "p",
        "text": "Không phải mọi trường hợp giao hàng chậm đều phát sinh trách nhiệm pháp lý giống nhau."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cần làm rõ việc chậm giao hàng xuất phát từ năng lực sản xuất, quản trị chuỗi cung ứng của bên bán; sự chậm trễ trong việc cung cấp thông tin, phê duyệt mẫu hoặc thực hiện nghĩa vụ của bên mua; hay sự kiện bất khả kháng được viện dẫn làm căn cứ miễn trách nhiệm."
      },
      {
        "type": "p",
        "text": "Đặc biệt, không nên mặc nhiên coi tình trạng thiếu nguyên liệu, khó khăn tài chính hoặc gián đoạn vận chuyển là sự kiện bất khả kháng. Việc miễn trách nhiệm phải được đánh giá theo điều kiện pháp luật, thỏa thuận hợp đồng và chứng cứ của từng trường hợp."
      },
      {
        "type": "p",
        "text": "Theo Điều 294 Luật Thương mại 2005, bên vi phạm có nghĩa vụ chứng minh trường hợp miễn trách nhiệm mà mình viện dẫn. Nghĩa vụ thông báo và xác nhận trường hợp miễn trách nhiệm cũng cần được xem xét theo Điều 295."
      },
      {
        "type": "h2",
        "text": "3. Yếu tố lỗi và trách nhiệm của các bên"
      },
      {
        "type": "p",
        "text": "Việc xác định lỗi có ý nghĩa quan trọng, đặc biệt khi sự chậm trễ có thể bắt nguồn từ hành vi của cả hai bên."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cần xem xét bên bán có chủ động thực hiện nghĩa vụ, cảnh báo rủi ro và đề xuất biện pháp khắc phục hay không; đồng thời đánh giá liệu bên mua có thực hiện đầy đủ các nghĩa vụ phối hợp theo hợp đồng."
      },
      {
        "type": "p",
        "text": "Tuy nhiên, trong quan hệ thương mại, không nên đồng nhất việc không chứng minh được lỗi cố ý với việc được miễn trách nhiệm. Luật Thương mại 2005 quy định các căn cứ miễn trách nhiệm cụ thể, trong đó có trường hợp hành vi vi phạm hoàn toàn do lỗi của bên kia."
      },
      {
        "type": "p",
        "text": "Do đó, đánh giá lỗi phải gắn với nghĩa vụ hợp đồng, nguyên nhân trực tiếp của sự chậm trễ và các căn cứ miễn trách nhiệm được pháp luật công nhận."
      },
      {
        "type": "h2",
        "text": "4. Thiệt hại thực tế: Cần xác định trước khi yêu cầu bồi thường"
      },
      {
        "type": "p",
        "text": "Một quyết định xử lý vi phạm hợp đồng không nên chỉ xuất phát từ mức độ nghiêm trọng của sự chậm trễ mà còn cần tính đến hậu quả tài chính thực tế."
      },
      {
        "type": "p",
        "text": "Thiệt hại có thể bao gồm chi phí phát sinh để tìm nguồn hàng thay thế, chi phí lưu kho, vận chuyển bổ sung hoặc tổn thất từ việc không thực hiện được nghĩa vụ với khách hàng tiếp theo. Tuy nhiên, các khoản này chỉ có thể được yêu cầu bồi thường khi đáp ứng điều kiện pháp luật và được chứng minh bằng tài liệu phù hợp."
      },
      {
        "type": "p",
        "text": "Theo Điều 302–305 Luật Thương mại 2005, yêu cầu bồi thường cần được xem xét trên cơ sở thiệt hại thực tế, trực tiếp; khoản lợi trực tiếp đáng lẽ được hưởng; quan hệ nhân quả giữa hành vi vi phạm và thiệt hại; cùng nghĩa vụ chứng minh và hạn chế tổn thất."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp cũng cần phân biệt phạt vi phạm với bồi thường thiệt hại, bởi căn cứ áp dụng và phương pháp xác định hai chế tài này không hoàn toàn giống nhau."
      },
      {
        "type": "h2",
        "text": "5. Ưu tiên giải pháp thương mại trước khi chấm dứt hợp đồng"
      },
      {
        "type": "p",
        "text": "Chấm dứt quan hệ hợp đồng không phải lúc nào cũng là lựa chọn mang lại lợi ích kinh tế tốt nhất."
      },
      {
        "type": "p",
        "text": "Trước khi áp dụng chế tài, doanh nghiệp nên cân nhắc khả năng tiếp tục thực hiện hợp đồng thông qua việc điều chỉnh lịch giao hàng, giao hàng từng phần, bổ sung biện pháp bảo đảm thực hiện nghĩa vụ hoặc thỏa thuận cơ chế kiểm soát tiến độ."
      },
      {
        "type": "p",
        "text": "Trong một số trường hợp, việc yêu cầu bên bán thực hiện đúng hợp đồng và khắc phục vi phạm có thể bảo vệ lợi ích thương mại hiệu quả hơn so với việc chấm dứt ngay lập tức."
      },
      {
        "type": "p",
        "text": "Nếu thương lượng không đạt kết quả, doanh nghiệp cần lựa chọn chính xác chế tài pháp lý, tuân thủ điều kiện và nghĩa vụ thông báo tương ứng. Đặc biệt, đình chỉ thực hiện và hủy bỏ hợp đồng có hậu quả pháp lý khác nhau; việc áp dụng sai căn cứ có thể khiến chính bên bị vi phạm phải đối mặt với yêu cầu bồi thường."
      },
      {
        "type": "h2",
        "text": "6. Thu thập chứng cứ ngay từ khi xuất hiện dấu hiệu vi phạm"
      },
      {
        "type": "p",
        "text": "Chứng cứ không chỉ phục vụ quá trình giải quyết tranh chấp mà còn là cơ sở để doanh nghiệp đánh giá khả năng thương lượng và lựa chọn phương án xử lý."
      },
      {
        "type": "p",
        "text": "Doanh nghiệp nên lưu giữ hợp đồng, phụ lục, đơn đặt hàng, lịch giao hàng, thông báo thay đổi tiến độ, email và trao đổi điện tử, chứng từ giao nhận, tài liệu về nguyên nhân chậm trễ, cùng hồ sơ chứng minh thiệt hại và các biện pháp hạn chế tổn thất đã thực hiện."
      },
      {
        "type": "p",
        "text": "Đồng thời, các thông báo yêu cầu khắc phục, gia hạn hoặc áp dụng chế tài cần được lập và gửi theo phương thức phù hợp với hợp đồng, bảo đảm khả năng chứng minh nội dung và thời điểm bên kia nhận được."
      },
      {
        "type": "p",
        "text": "Một hồ sơ chứng cứ đầy đủ có thể giúp doanh nghiệp tránh quyết định vội vàng và bảo vệ tốt hơn vị thế pháp lý khi tranh chấp phát sinh."
      },
      {
        "type": "h2",
        "text": "Kết luận"
      },
      {
        "type": "p",
        "text": "Khi đối tác vi phạm tiến độ giao hàng, câu hỏi quan trọng không chỉ là doanh nghiệp có quyền chấm dứt hợp đồng hay không, mà còn là việc chấm dứt có thực sự cần thiết và mang lại lợi ích tốt hơn so với tiếp tục thực hiện hợp đồng hay không."
      },
      {
        "type": "p",
        "text": "Một quyết định phù hợp cần kết hợp đánh giá pháp lý, thiệt hại thực tế, khả năng khắc phục và mục tiêu thương mại dài hạn. Doanh nghiệp nên xác lập chiến lược xử lý ngay khi xuất hiện dấu hiệu vi phạm, thay vì chờ đến khi tranh chấp trở nên không thể kiểm soát."
      },
      {
        "type": "p",
        "text": "Integritas Vũ Legal hỗ trợ doanh nghiệp đánh giá vi phạm hợp đồng, xác định phương án xử lý, thương lượng với đối tác và đại diện giải quyết tranh chấp thương mại trên cơ sở hồ sơ và mục tiêu cụ thể của từng vụ việc."
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
    "title": "DELAYED DELIVERY BY A CONTRACTUAL COUNTERPARTY: SHOULD BUSINESSES CONTINUE OR TERMINATE THE CONTRACT?",
    "blocks": [
      {
        "type": "p",
        "text": "In commercial transactions, delayed delivery may disrupt production, affect commitments to customers and result in unexpected costs. However, not every delivery delay entitles a business to immediately terminate or cancel a contract."
      },
      {
        "type": "p",
        "text": "The decision to continue contractual performance or pursue legal remedies should be based on a careful assessment of the nature and severity of the breach, its underlying causes, the parties' respective responsibilities, the losses incurred and the prospects of remedying the breach."
      },
      {
        "type": "h2",
        "text": "1. Does delayed delivery constitute grounds for terminating the contract?"
      },
      {
        "type": "p",
        "text": "The starting point is to examine the contractual provisions governing delivery deadlines, performance milestones, termination rights and agreed remedies."
      },
      {
        "type": "p",
        "text": "Under Vietnam's Commercial Law 2005, suspension of contractual performance or cancellation of a contract is generally available where the breach constitutes an agreed ground for the relevant remedy or amounts to a fundamental breach, subject to the applicable statutory exemptions from liability."
      },
      {
        "type": "p",
        "text": "A fundamental breach is assessed by reference to whether the breach causes such detriment to the other party that it is substantially deprived of what it was entitled to expect under the contract."
      },
      {
        "type": "p",
        "text": "Accordingly, businesses should distinguish between a delay that can reasonably be remedied and one that substantially defeats the commercial purpose of the agreement."
      },
      {
        "type": "p",
        "text": "For contracts involving delivery by instalments, it may also be necessary to assess whether the appropriate remedy should apply to particular deliveries rather than the entire contract."
      },
      {
        "type": "h2",
        "text": "2. Identify the underlying causes before attributing responsibility"
      },
      {
        "type": "p",
        "text": "Not all delivery delays give rise to the same legal consequences."
      },
      {
        "type": "p",
        "text": "Businesses should determine whether the delay results from the supplier's production capacity or supply-chain management, the buyer's failure to provide necessary information or approvals, or an external event relied upon as a ground for exemption from liability."
      },
      {
        "type": "p",
        "text": "In particular, shortages of materials, financial difficulties or transportation disruptions should not automatically be treated as force majeure events. Whether an exemption applies depends on the relevant legal requirements, contractual provisions and supporting evidence."
      },
      {
        "type": "p",
        "text": "Under Article 294 of the Commercial Law 2005, the breaching party bears the burden of proving the circumstances on which it relies for exemption from liability. The notification requirements under Article 295 must also be considered."
      },
      {
        "type": "h2",
        "text": "3. Assess fault and the parties' respective responsibilities"
      },
      {
        "type": "p",
        "text": "Fault may be relevant, particularly where both parties' conduct contributed to the delay."
      },
      {
        "type": "p",
        "text": "Businesses should examine whether the supplier took reasonable steps to perform its obligations, communicated foreseeable risks and proposed corrective measures. Equally, the buyer's compliance with its own contractual obligations should be assessed."
      },
      {
        "type": "p",
        "text": "However, the absence of intentional misconduct does not, in itself, establish an exemption from contractual liability."
      },
      {
        "type": "p",
        "text": "The Commercial Law 2005 provides specific grounds for exemption, including where the breach is entirely attributable to the other party's fault."
      },
      {
        "type": "p",
        "text": "The assessment should therefore focus on the contractual obligations involved, the actual causes of the delay and whether a legally recognised exemption applies."
      },
      {
        "type": "h2",
        "text": "4. Establish and substantiate the losses incurred"
      },
      {
        "type": "p",
        "text": "Before pursuing compensation, businesses should identify the financial consequences of the delay."
      },
      {
        "type": "p",
        "text": "Potential losses may include additional costs of obtaining replacement goods, storage expenses, supplementary transportation costs and losses arising from the inability to fulfil downstream contractual commitments."
      },
      {
        "type": "p",
        "text": "However, such losses are not automatically recoverable. Any claim must satisfy the applicable legal requirements and be supported by sufficient evidence."
      },
      {
        "type": "p",
        "text": "Under Articles 302–305 of the Commercial Law 2005, damages are assessed by reference to actual and direct losses, direct profits that would otherwise have been earned, the causal relationship between the breach and the losses, and the claimant's obligations to substantiate and mitigate those losses."
      },
      {
        "type": "p",
        "text": "Businesses should also distinguish between contractual penalties and damages, as the legal grounds and requirements for these remedies differ."
      },
      {
        "type": "h2",
        "text": "5. Consider commercial solutions before terminating the contract"
      },
      {
        "type": "p",
        "text": "Terminating a commercial relationship is not necessarily the most commercially advantageous response to delayed delivery."
      },
      {
        "type": "p",
        "text": "Before invoking contractual remedies, businesses should consider whether performance can be preserved through a revised delivery schedule, partial deliveries, additional performance security or enhanced monitoring arrangements."
      },
      {
        "type": "p",
        "text": "In certain circumstances, requiring the supplier to perform its obligations and remedy the breach may better protect the buyer's commercial interests than immediate termination."
      },
      {
        "type": "p",
        "text": "If negotiations fail, the business should identify the appropriate legal remedy and comply with the relevant conditions and notification requirements."
      },
      {
        "type": "p",
        "text": "In particular, suspension of performance and cancellation of a contract have different legal consequences. Invoking an inappropriate remedy without sufficient grounds may expose the affected business to liability."
      },
      {
        "type": "h2",
        "text": "6. Preserve evidence from the earliest indication of a breach"
      },
      {
        "type": "p",
        "text": "Evidence is essential not only for dispute resolution but also for assessing negotiating leverage and determining an appropriate course of action."
      },
      {
        "type": "p",
        "text": "Businesses should preserve the contract and its amendments, purchase orders, delivery schedules, notices of delay, emails and other electronic communications, delivery records, documents concerning the causes of the delay, and evidence of losses and mitigation measures."
      },
      {
        "type": "p",
        "text": "Notices requiring remedial action, granting extensions or invoking contractual remedies should be issued in accordance with the contract and in a manner that allows their content, delivery and receipt to be established."
      },
      {
        "type": "p",
        "text": "A well-documented factual record enables businesses to make informed decisions and strengthens their legal position if a dispute arises."
      },
      {
        "type": "h2",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "When a contractual counterparty fails to meet delivery deadlines, the critical question is not merely whether the business has the legal right to terminate, but also whether termination is necessary and commercially preferable to continued performance."
      },
      {
        "type": "p",
        "text": "An effective response requires an integrated assessment of legal rights, actual losses, available remedies and longer-term commercial objectives. Businesses should develop a response strategy as soon as material risks emerge, rather than waiting until the dispute becomes difficult to manage."
      },
      {
        "type": "p",
        "text": "Integritas Vu Legal advises and represents businesses in assessing contractual breaches, developing appropriate response strategies, negotiating with counterparties and resolving commercial disputes, taking into account the circumstances and objectives of each matter."
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
