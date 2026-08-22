import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ấn phẩm & Góc nhìn | Integritas Vu Legal",
  description: "Các phân tích pháp lý, ấn phẩm chuyên môn và ghi nhận của Integritas Vu Legal.",
};

const publications = [
  { no: "01", type: "Cẩm nang", date: "Tháng 08 · 2026", title: "Quản trị rủi ro pháp lý trong giai đoạn tăng trưởng", text: "Một khung tiếp cận thực tiễn dành cho ban lãnh đạo và đội ngũ pháp chế doanh nghiệp." },
  { no: "02", type: "Phân tích", date: "Tháng 07 · 2026", title: "Những thay đổi doanh nghiệp cần lưu ý", text: "Tóm lược tác động và những bước chuẩn bị cần thiết cho hoạt động kinh doanh." },
  { no: "03", type: "Chuyên môn", date: "Tháng 07 · 2026", title: "Chuẩn bị trước khi bước vào tranh tụng", text: "Từ chiến lược chứng cứ đến lựa chọn phương án giải quyết phù hợp." },
  { no: "04", type: "Bản tin", date: "Tháng 06 · 2026", title: "Giao dịch tài chính và giới hạn rủi ro", text: "Những điều khoản then chốt giúp bảo vệ giá trị trong các giao dịch phức tạp." },
  { no: "05", type: "Góc nhìn", date: "Tháng 05 · 2026", title: "Pháp lý như một lợi thế cạnh tranh", text: "Tư duy pháp lý chủ động giúp doanh nghiệp ra quyết định nhanh và bền vững hơn." },
  { no: "06", type: "Cẩm nang", date: "Tháng 04 · 2026", title: "Giải quyết tranh chấp dân sự hiệu quả", text: "Lựa chọn giữa thương lượng, hòa giải, trọng tài và tố tụng tại tòa án." },
];

export default function PublicationsPage() {
  return (
    <main className="pub-page">
      <header className="pub-nav">
        <a className="pub-brand" href="/" aria-label="Về trang chủ">
          <svg viewBox="0 0 70 70" aria-hidden="true"><path d="M35 5 59 15v19c0 16-10 25-24 31C21 59 11 50 11 34V15L35 5Z"/><path d="M21 21h28M25 27l10 23 10-23M35 19v31"/></svg>
          <span>INTEGRITAS VU LEGAL</span>
        </a>
        <a className="pub-back" href="/">Trang chủ <b>↗</b></a>
      </header>

      <section className="pub-hero">
        <div className="pub-kicker"><span>IVL — KNOWLEDGE</span><i /></div>
        <h1>Góc nhìn tạo nên<br/><em>lợi thế.</em></h1>
        <p>Phân tích ngắn gọn. Góc nhìn thực tiễn.<br/>Giá trị dành cho những quyết định quan trọng.</p>
        <div className="pub-orbit" aria-hidden="true"><span>IVL</span><i /></div>
      </section>

      <section className="pub-featured">
        <div className="pub-featured-art"><span>2026</span><b>LEGAL<br/>OUTLOOK</b><i>IVL</i></div>
        <div className="pub-featured-copy">
          <small>ẤN PHẨM NỔI BẬT · 2026</small>
          <h2>Bức tranh pháp lý<br/>doanh nghiệp Việt Nam</h2>
          <p>Những chuyển động quan trọng về quản trị, đầu tư, tài chính và giải quyết tranh chấp.</p>
          <a href="#library">Khám phá ấn phẩm <b>↓</b></a>
        </div>
      </section>

      <section className="pub-library" id="library">
        <div className="pub-library-head"><span>THƯ VIỆN</span><p>Chọn lọc bởi đội ngũ<br/>Integritas Vu Legal</p></div>
        <div className="pub-list">
          {publications.map((item) => (
            <article className="pub-item" key={item.no}>
              <div><small>{item.type} · {item.date}</small><h2>{item.title}</h2><p>{item.text}</p></div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition">
        <span>GHI NHẬN</span>
        <div><strong>Legal 500</strong><strong>AsiaLaw</strong><strong>Benchmark<br/>Litigation</strong><strong>Chambers</strong></div>
        <small>* Nội dung minh họa — thay bằng các giải thưởng thực tế của công ty.</small>
      </section>

      <footer className="pub-footer"><span>INTEGRITAS VU LEGAL</span><a href="mailto:hello@integritasvulegal.com">Bắt đầu một cuộc đối thoại ↗</a><small>© 2026 IVL</small></footer>
    </main>
  );
}
