"use client";

import { useEffect } from "react";

/**
 * Điều phối toàn bộ chuyển động theo scroll cho một trang:
 * thanh tiến độ, reveal khi phần tử vào khung nhìn, parallax
 * ([data-parallax] nhận biến --p từ -0.5 đến 0.5), thanh điều hướng
 * ẩn/hiện theo hướng cuộn, và tiến độ sân khấu hero ([data-hero]).
 * Chỉ một listener scroll duy nhất, tiết chế bằng requestAnimationFrame.
 */
export default function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-line, .reveal-zoom, .reveal-rule"));
    let observer: IntersectionObserver | undefined;

    if (reduced) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }),
        { threshold: 0, rootMargin: "0px 0px -12% 0px" }
      );
      revealTargets.forEach((el) => observer?.observe(el));
    }

    const nav = document.querySelector<HTMLElement>(".nav");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");
    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    let ticking = false;
    let lastY = window.scrollY;

    const measure = () => {
      ticking = false;
      const viewport = window.innerHeight || 1;
      const y = window.scrollY;
      const travel = root.scrollHeight - viewport;

      root.style.setProperty("--page-p", (travel > 0 ? Math.min(1, y / travel) : 0).toFixed(4));

      if (nav) {
        nav.classList.toggle("is-scrolled", y > 40);
        // Chỉ ẩn khi đã cuộn qua hẳn phần hero đầu trang, tránh giật khi vừa chạm mép.
        nav.classList.toggle("is-hidden", !reduced && y > 320 && y > lastY + 6);
      }
      lastY = y;

      if (!reduced && hero) {
        const rect = hero.getBoundingClientRect();
        const distance = Math.max(rect.height - viewport, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / distance));
        hero.style.setProperty("--hero-p", progress.toFixed(3));
        if (heroImage) {
          heroImage.style.transform = `scale(${(1.05 + progress * 0.13).toFixed(3)}) translate3d(0,${(progress * 3).toFixed(2)}%,0)`;
        }
      }

      if (!reduced) {
        for (const el of parallax) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -240 || rect.top > viewport + 240) continue;
          const passed = (viewport - rect.top) / (viewport + rect.height);
          el.style.setProperty("--p", (passed - 0.5).toFixed(3));
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <i />
    </div>
  );
}
