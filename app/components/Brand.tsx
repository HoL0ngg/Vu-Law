/**
 * Bộ nhận diện Integritas Vu Legal.
 *
 * Emblem dựng theo hồ sơ thương hiệu: khiên bảo vệ, cột La Mã (trí tuệ),
 * cán cân công lý (công bằng), chữ V (Luật sư Vũ) và hai chữ I · L bằng bạc.
 * Thứ tự vẽ có chủ đích — cán cân nằm dưới cùng để khiên, chữ V và cột lần lượt
 * che đòn cân đi ngang qua giữa, đúng như bản dựng gốc.
 *
 * Gradient vàng/bạc khai báo một lần trong layout (`<BrandDefs />`) nên
 * component này không cần hook — dùng được ở cả server và client component.
 */

export function BrandDefs() {
  return (
    <svg className="ivl-defs" aria-hidden="true" focusable="false" width="0" height="0">
      <defs>
        <linearGradient id="ivl-gold" x1="6%" y1="0%" x2="94%" y2="100%">
          <stop offset="0%" stopColor="#f8e9b6" />
          <stop offset="20%" stopColor="#dcbb63" />
          <stop offset="44%" stopColor="#a87e20" />
          <stop offset="60%" stopColor="#efd68d" />
          <stop offset="80%" stopColor="#c39a34" />
          <stop offset="100%" stopColor="#8b6714" />
        </linearGradient>
        <linearGradient id="ivl-silver" x1="0%" y1="0%" x2="18%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#d7dbde" />
          <stop offset="72%" stopColor="#a2abb1" />
          <stop offset="100%" stopColor="#e6eaec" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrandEmblem() {
  return (
    <svg className="ivl-emblem" viewBox="0 0 260 210" aria-hidden="true" focusable="false">
      {/* Cán cân công lý — đòn cân vắt ngang phía sau khiên, hai đĩa nhô ra ngoài */}
      <g className="ivl-scales">
        <path d="M46 74Q130 62 214 74" />
        <path d="M46 79 22 94M46 79 70 94M214 79 190 94M214 79 238 94" />
        <path d="M20 94h52M188 94h52" />
        <path d="M20 94c3 18 13 27 26 27s23-9 26-27M188 94c3 18 13 27 26 27s23-9 26-27" />
      </g>
      <circle className="ivl-pivot" cx="46" cy="74" r="5.5" />
      <circle className="ivl-pivot" cx="214" cy="74" r="5.5" />

      {/* Khiên bảo vệ — viền kép */}
      <path className="ivl-shield" d="M74 46h38l9-18h18l9 18h38v64c0 38-26 64-56 80-30-16-56-42-56-80V46Z" />
      <path className="ivl-shield-inner" d="M82 54h34l8-16h12l8 16h34v56c0 33-23 56-48 69-25-13-48-36-48-69V54Z" />

      {/* Chữ V — Luật sư Vũ */}
      <path className="ivl-v" d="M80 58 130 164 180 58h-25l-25 64-25-64H80Z" />

      {/* Cột La Mã — trí tuệ pháp lý */}
      <g className="ivl-column">
        <path d="M112 48h36v10h-36z" />
        <path d="M116 59h28v21h-28z" />
        <path d="M121 80h18l2 58h-22z" />
        <path d="M116 138h28v10h-28z" />
        <path d="M111 148h38v10h-38z" />
      </g>
      <circle className="ivl-volute" cx="121" cy="69" r="5" />
      <circle className="ivl-volute" cx="139" cy="69" r="5" />
      <circle className="ivl-volute-eye" cx="121" cy="69" r="1.5" />
      <circle className="ivl-volute-eye" cx="139" cy="69" r="1.5" />
      <path className="ivl-flute" d="M126 86v46M130 86v46M134 86v46" />

      {/* I · L bằng bạc */}
      <path className="ivl-letter" d="M25 132h34v10H48v30h11v10H25v-10h11v-30H25z" />
      <path className="ivl-letter" d="M201 132h34v10h-11v30h29v10h-52v-10h11v-30h-11z" />
    </svg>
  );
}

export default function Brand({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span className={`mark mark--${size}`}>
      <BrandEmblem />
      <span className="mark-text">
        <b>INTEGRITAS VU LEGAL</b>
        {size === "lg" && <i className="mark-rule" aria-hidden="true" />}
        <span>INTEGRITY. STRATEGY. RESULTS.</span>
      </span>
    </span>
  );
}
