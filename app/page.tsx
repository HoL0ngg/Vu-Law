"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Tranh tụng & Giải quyết tranh chấp",
    short: "Tranh tụng",
    areas: ["Tranh chấp thương mại", "Trọng tài thương mại", "Thu hồi tài sản", "Tranh chấp đầu tư & FDI", "Tranh chấp xây dựng", "Thi hành bản án", "Tranh chấp lao động", "Sở hữu trí tuệ"],
  },
  {
    title: "Luật dân sự",
    short: "Luật dân sự",
    areas: ["Hợp đồng dân sự", "Tranh chấp tài sản", "Thừa kế & di chúc", "Hôn nhân & gia đình", "Bất động sản", "Bồi thường thiệt hại", "Đại diện ngoài tố tụng", "Hòa giải tranh chấp"],
  },
  {
    title: "Dịch vụ doanh nghiệp",
    short: "Doanh nghiệp",
    areas: ["Thành lập doanh nghiệp", "Quản trị nội bộ", "Mua bán & sáp nhập", "Đầu tư nước ngoài", "Hợp đồng thương mại", "Lao động & nhân sự", "Tuân thủ pháp luật", "Tái cấu trúc doanh nghiệp"],
  },
  {
    title: "Tài chính & Đầu tư",
    short: "Tài chính",
    areas: ["Tài chính doanh nghiệp", "Giao dịch bảo đảm", "Thẩm định pháp lý", "Cấu trúc đầu tư", "Quản trị rủi ro", "Thu hồi công nợ", "Tư vấn thuế", "Ngân hàng & tín dụng"],
  },
];

const articles = [
  { tag: "Góc nhìn", title: "Quản trị rủi ro pháp lý trong giai đoạn tăng trưởng", date: "12.08.2026" },
  { tag: "Phân tích", title: "Những thay đổi doanh nghiệp cần lưu ý", date: "28.07.2026" },
  { tag: "Chuyên môn", title: "Chiến lược tranh tụng: chuẩn bị trước khi bước vào phiên tòa", date: "04.07.2026" },
];

const awards = [
  { mark: "IVL", type: "Chứng nhận hành nghề", year: "HỒ SƠ IVL", title: "Tên chứng nhận chuyên môn", note: "Nội dung chờ cập nhật từ hồ sơ năng lực" },
  { mark: "EX", type: "Ghi nhận chuyên môn", year: "TRANH TỤNG", title: "Tên giải thưởng hoặc bảng xếp hạng", note: "Nội dung chờ cập nhật từ hồ sơ năng lực" },
  { mark: "LC", type: "Ghi nhận khách hàng", year: "VIỆT NAM", title: "Tên tổ chức trao chứng nhận", note: "Nội dung chờ cập nhật từ hồ sơ năng lực" },
  { mark: "AP", type: "Thành viên nghề nghiệp", year: "ASIA PACIFIC", title: "Tên hiệp hội hoặc tổ chức", note: "Nội dung chờ cập nhật từ hồ sơ năng lực" },
];

function Mark({ small = false }: { small?: boolean }) {
  return (
    <div className={`mark ${small ? "mark--small" : ""}`} aria-label="Integritas Vu Legal">
      <svg viewBox="0 0 70 70" aria-hidden="true">
        <path d="M35 5 59 15v19c0 16-10 25-24 31C21 59 11 50 11 34V15L35 5Z" />
        <path d="M21 21h28M25 27l10 23 10-23M35 19v31" />
      </svg>
      <div><b>INTEGRITAS VU LEGAL</b><span>INTEGRITY · STRATEGY · RESULTS</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [awardIndex, setAwardIndex] = useState(0);
  const hero = useRef<HTMLElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);
  const dragStart = useRef(0);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
        if (hero.current) {
          const rect = hero.current.getBoundingClientRect();
          const distance = Math.max(rect.height - window.innerHeight, 1);
          const progress = Math.max(0, Math.min(1, -rect.top / distance));
          hero.current.style.setProperty("--hero-p", progress.toFixed(3));
          if (heroImage.current) heroImage.current.style.transform = `scale(${1.04 + progress * 0.12}) translate3d(0, ${progress * 3}%, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { revealObserver.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setAwardIndex((current) => (current + 1) % awards.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <header className="nav">
        <a href="#top" onClick={() => setMenuOpen(false)}><Mark small /></a>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Giới thiệu</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Lĩnh vực</a>
          <a href="/publications" onClick={() => setMenuOpen(false)}>Ấn phẩm</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Liên hệ</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu"><i /><i /></button>
      </header>

      <section className="hero" id="top" ref={hero}>
        <div className="hero-stage">
          <div className="hero-image" ref={heroImage} />
          <div className="hero-shade" />

          <div className="hero-fly hero-fly--pillar" aria-hidden="true"><span /></div>
          <div className="hero-fly hero-fly--frame" aria-hidden="true"><i /><i /></div>
          <div className="hero-fly hero-fly--justice" aria-hidden="true">
            <svg viewBox="0 0 120 120"><path d="M60 19v75M31 35h58M42 35 25 65M42 35l17 30M78 35 61 65M78 35l17 30M16 65h20c0 10-4 16-10 16s-10-6-10-16ZM84 65h20c0 10-4 16-10 16s-10-6-10-16ZM42 97h36" /></svg>
            <small>CÔNG BẰNG</small><b>JUSTICE</b>
          </div>
          <div className="hero-fly hero-fly--monogram" aria-hidden="true">V</div>
          <div className="hero-fly hero-fly--line" aria-hidden="true"><span>INTEGRITY</span><i /></div>

          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span />Integritas Vu Legal</div>
            <h1>Trí tuệ dẫn lối.<br /><em>Công bằng</em> làm kim chỉ nam.</h1>
            <p>Giải pháp pháp lý chiến lược, được xây dựng trên sự chính trực và thấu hiểu.</p>
            <a className="round-link" href="#about"><span>Khám phá</span><b>↘</b></a>
          </div>
          <div className="scroll-cue">CUỘN ĐỂ KHÁM PHÁ <i /></div>
          <div className="hero-progress" aria-hidden="true"><i /></div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="orb orb-one" />
        <div className="section-label reveal">VỀ CHÚNG TÔI</div>
        <div className="manifesto-grid">
          <p className="lead reveal">Pháp luật không chỉ là khuôn khổ.<br />Đó là <em>đòn bẩy</em> cho những quyết định đúng.</p>
          <div className="about-copy reveal delay"><p>Chúng tôi kết hợp chuyên môn sâu với tư duy kinh doanh để tìm ra con đường hiệu quả nhất cho mỗi khách hàng.</p><a href="#contact">Hồ sơ năng lực <b>→</b></a></div>
        </div>
        <div className="awards-showcase reveal">
          <div className="awards-head">
            <div><span>GIẢI THƯỞNG & CHỨNG NHẬN</span><small>Vuốt để khám phá</small></div>
            <div className="award-controls">
              <button onClick={() => setAwardIndex((awardIndex - 1 + awards.length) % awards.length)} aria-label="Giải thưởng trước">←</button>
              <button onClick={() => setAwardIndex((awardIndex + 1) % awards.length)} aria-label="Giải thưởng tiếp theo">→</button>
            </div>
          </div>
          <div
            className="award-viewport"
            onPointerDown={(event) => { dragStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }}
            onPointerUp={(event) => {
              const distance = event.clientX - dragStart.current;
              if (Math.abs(distance) > 45) setAwardIndex((current) => distance < 0 ? (current + 1) % awards.length : (current - 1 + awards.length) % awards.length);
            }}
          >
            <div className="award-track" style={{ transform: `translate3d(-${awardIndex * 100}%,0,0)` }}>
              {awards.map((award) => (
                <article className="award-slide" key={`${award.type}-${award.year}`}>
                  <div className="award-medal"><span>{award.mark}</span><i /></div>
                  <div className="award-copy"><small>{award.type} · {award.year}</small><h3>{award.title}</h3><p>{award.note}</p></div>
                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
          <div className="award-dots" aria-label="Chọn giải thưởng">
            {awards.map((award, index) => <button key={award.mark} className={awardIndex === index ? "is-active" : ""} onClick={() => setAwardIndex(index)} aria-label={`Xem ${award.type}`} />)}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="expertise-head reveal">
          <div className="section-label">LĨNH VỰC CHUYÊN MÔN</div>
          <h2>Chuyên môn <em>cốt lõi.</em></h2>
          <p>Chúng tôi cung cấp giải pháp rõ ràng cho những vấn đề pháp lý phức tạp, kết hợp tư duy chiến lược với kinh nghiệm thực tiễn.</p>
        </div>
        <div className="expertise-tabs reveal" role="tablist" aria-label="Lĩnh vực chuyên môn">
          {services.map((service, index) => <button key={service.title} className={activeService === index ? "is-active" : ""} onClick={() => setActiveService(index)} role="tab" aria-selected={activeService === index}>{service.short}</button>)}
        </div>
        <div className="expertise-content reveal" role="tabpanel">
          <div className="expertise-current"><span>Đang xem</span><strong>{services[activeService].title}</strong></div>
          <div className="expertise-grid" key={activeService}>
            {services[activeService].areas.map((area) => <a href="#contact" className="expertise-item" key={area}><span>{area}</span><i>+</i></a>)}
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="statement-image" />
        <div className="statement-overlay" />
        <div className="statement-copy reveal">
          <span>CHIẾN LƯỢC · TẬN TÂM · HIỆU QUẢ</span>
          <blockquote>“Mỗi vụ việc là một trách nhiệm.<br />Mỗi giải pháp là một <em>cam kết</em>.”</blockquote>
        </div>
        <div className="seal" aria-hidden="true"><span>IVL</span><i>INTEGRITAS · VU LEGAL ·</i></div>
      </section>

      <section className="insights" id="insights">
        <div className="insights-head reveal"><div><div className="section-label">GÓC NHÌN</div><h2>Kiến thức tạo nên<br /><em>lợi thế.</em></h2></div><a href="/publications">Xem tất cả <b>→</b></a></div>
        <div className="article-grid">
          {articles.map((article, i) => (
            <a className="article reveal" href="/publications" key={article.title} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`article-art art-${i + 1}`}><span>{article.tag}</span><b>↗</b></div>
              <time>{article.date}</time><h3>{article.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main reveal"><div><div className="section-label">LIÊN HỆ</div><h2>Cùng bắt đầu một<br />cuộc <em>đối thoại.</em></h2></div><a className="contact-circle" href="mailto:hello@integritasvulegal.com"><span>Liên hệ ngay</span><b>↗</b></a></div>
        <div className="footer-bottom"><Mark /><div><span>TP. Hồ Chí Minh, Việt Nam</span><a href="mailto:hello@integritasvulegal.com">hello@integritasvulegal.com</a></div><span>© 2026 IVL</span></div>
      </footer>
    </main>
  );
}
