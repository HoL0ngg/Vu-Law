"""Turn one of the Client's Word documents into the article data the website renders.

The rules below are the ones that were applied by hand to the first seven Legal Insights,
gathered in one place so new articles can be published without anyone retyping them. The
Client's wording is never rewritten: every line of the document is kept as written, apart
from the fixed list in `corrections.json`, and `check_complete` refuses an article if any
line of the document did not make it into the result.

Only the Python standard library is used here, so this file also runs on a plain laptop.
"""

from __future__ import annotations

import json
import re
import unicodedata
import zipfile
from dataclasses import dataclass, field
from pathlib import Path
from xml.etree import ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
HERE = Path(__file__).resolve().parent

NOTICE_HEADINGS = ("THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ", "LEGAL NOTICE AND COPYRIGHT")
TOPIC_PREFIX = re.compile(r"^(CHỦ ĐỀ|TOPIC)\s*\d+", re.IGNORECASE)
NUMBERED_HEADING = re.compile(r"^\d{1,2}\s*\|\s*\S")
SUB_HEADING = re.compile(r"^\d+\.\d+\.\s")
DIVIDER = re.compile(r"^[_\-–—=*·.\s]{5,}$")
FOOTNOTE = re.compile(r"^\[\d+\]\s")
# Words the site owner asked to be corrected wherever they appear; see corrections.json.
CORRECTIONS: list[tuple[str, str]] = [
    (unicodedata.normalize("NFC", a), unicodedata.normalize("NFC", b))
    for a, b in json.loads((HERE / "corrections.json").read_text(encoding="utf-8"))["replace"]
]


class ConversionError(Exception):
    """The document cannot be published as it is; the message says why, in plain words."""


@dataclass
class Converted:
    title: str
    blocks: list[dict]
    subtitle: str | None = None
    topic: str | None = None
    kicker: list[str] = field(default_factory=list)
    corrections: list[str] = field(default_factory=list)
    source_lines: list[str] = field(default_factory=list)

    def as_locale(self) -> dict:
        out: dict = {"title": self.title}
        if self.subtitle:
            out["subtitle"] = self.subtitle
        if self.kicker:
            out["kicker"] = self.kicker
        if self.topic:
            out["topic"] = self.topic
        out["blocks"] = self.blocks
        return out


# --------------------------------------------------------------------------------------
# Reading the document
# --------------------------------------------------------------------------------------

def _text(element) -> str:
    return "".join(node.text or "" for node in element.iter(W + "t")).strip()


def _fix(text: str, applied: list[str]) -> str:
    text = unicodedata.normalize("NFC", text)
    for wrong, right in CORRECTIONS:
        if wrong in text:
            text = text.replace(wrong, right)
            applied.append(f"{wrong} -> {right}")
    return text


def read_items(docx: Path | bytes) -> tuple[list[tuple], list[str]]:
    """The document body in order: ("p", text), ("li", text) for a bullet, ("table", head, rows)."""
    archive = zipfile.ZipFile(docx if isinstance(docx, Path) else __import__("io").BytesIO(docx))
    names = archive.namelist()
    xml = archive.read("word/document.xml").decode("utf-8")
    problems = []
    # A real picture, not the horizontal rule Word draws as a `<w:pict>` rectangle.
    if "<w:drawing" in xml or "<v:imagedata" in xml or any(n.startswith("word/media/") for n in names):
        problems.append("file Word có ảnh chèn trong bài; hãy xoá ảnh khỏi file Word và để ảnh bìa thành một file riêng trong folder")
    if "<w:txbxContent" in xml:
        problems.append("file Word có khung chữ (text box) mà web không hiển thị được; hãy chuyển chữ trong khung thành đoạn văn thường")
    if "word/footnotes.xml" in names:
        notes = archive.read("word/footnotes.xml").decode("utf-8")
        if len(re.findall(r"<w:footnote [^>]*w:id=\"[1-9]", notes)) > 0:
            problems.append("file Word dùng chú thích cuối trang (footnote) của Word; hãy viết nguồn thành các dòng [1], [2]... ở cuối bài")
    if problems:
        raise ConversionError("; ".join(problems))

    body = ET.fromstring(xml).find(W + "body")
    applied: list[str] = []
    items: list[tuple] = []
    for child in body:
        if child.tag == W + "p":
            text = _text(child)
            if not text:
                continue
            kind = "li" if child.find(f"{W}pPr/{W}numPr") is not None else "p"
            items.append((kind, _fix(text, applied)))
        elif child.tag == W + "tbl":
            rows = []
            for tr in child.findall(W + "tr"):
                cells = [" ".join(t for t in (_text(p) for p in tc.findall(W + "p")) if t) for tc in tr.findall(W + "tc")]
                rows.append([_fix(c, applied).strip() for c in cells])
            rows = [r for r in rows if any(r)]
            if len(rows) < 2:
                raise ConversionError("có một bảng không có dòng nào dưới dòng tiêu đề")
            items.append(("table", rows[0], rows[1:]))
    return items, sorted(set(applied))


# --------------------------------------------------------------------------------------
# Classifying the lines
# --------------------------------------------------------------------------------------

def _is_upper(text: str) -> bool:
    letters = [c for c in text if c.isalpha()]
    return bool(letters) and all(not c.islower() for c in letters)


def _is_kicker(text: str) -> bool:
    upper = text.upper()
    return _is_upper(text) and len(text) < 90 and ("LEGAL INSIGHTS" in upper or "•" in text)


def convert(docx: Path | bytes) -> Converted:
    items, applied = read_items(docx)
    if not items or items[0][0] != "p" and items[0][0] != "li":
        raise ConversionError("file Word không bắt đầu bằng tiêu đề bài")

    lines = [it for it in items]
    pos = 0
    kicker: list[str] = []
    while pos < len(lines) and lines[pos][0] == "p" and _is_kicker(lines[pos][1]):
        kicker.append(lines[pos][1])
        pos += 1
    if pos >= len(lines) or lines[pos][0] != "p":
        raise ConversionError("không tìm thấy dòng tiêu đề")
    title = lines[pos][1]
    pos += 1
    if len(title) > 220:
        raise ConversionError("dòng đầu tiên quá dài để là tiêu đề; tiêu đề phải là dòng đầu tiên của file Word")

    # Everything before the first section heading is the opening of the article.
    opening: list[tuple] = []
    while pos < len(lines):
        kind = lines[pos][0]
        text = lines[pos][1] if kind != "table" else ""
        if kind == "p" and (NUMBERED_HEADING.match(text) or (_is_upper(text) and not TOPIC_PREFIX.match(text) and len(text) < 130)):
            break
        opening.append(lines[pos])
        pos += 1

    topic = None
    for i, it in enumerate(opening):
        if it[0] == "p" and TOPIC_PREFIX.match(it[1]):
            topic = it[1]
            del opening[i]
            break

    subtitle = None
    if opening and opening[0][0] == "p" and len(opening[0][1]) <= 250 and not FOOTNOTE.match(opening[0][1]):
        subtitle = opening.pop(0)[1]

    blocks: list[dict] = []
    pending_list: list[str] = []
    notice = False

    def flush():
        nonlocal pending_list
        if pending_list:
            blocks.append({"type": "list", "items": pending_list})
            pending_list = []

    def add(item: tuple, in_opening: bool):
        nonlocal notice
        kind = item[0]
        if kind == "li":
            pending_list.append(item[1])
            return
        flush()
        if kind == "table":
            blocks.append({"type": "table", "head": item[1], "rows": item[2]})
            return
        text = item[1]
        if DIVIDER.match(text):
            return
        if text in NOTICE_HEADINGS:
            notice = True
            blocks.append({"type": "h2", "text": text})
        elif not in_opening and not notice and (NUMBERED_HEADING.match(text) or (_is_upper(text) and len(text) < 130)):
            blocks.append({"type": "h2", "text": text})
        elif not notice and SUB_HEADING.match(text):
            blocks.append({"type": "h3", "text": text})
        elif notice or FOOTNOTE.match(text):
            blocks.append({"type": "note", "text": text})
        else:
            blocks.append({"type": "p", "text": text})

    for it in opening:
        add(it, True)
    for it in lines[pos:]:
        add(it, False)
    flush()

    source = []
    for it in items:
        if it[0] == "table":
            source += list(it[1]) + [c for row in it[2] for c in row]
        elif not DIVIDER.match(it[1]):
            source.append(it[1])
    return Converted(title=title, blocks=blocks, subtitle=subtitle, topic=topic, kicker=kicker,
                     corrections=applied, source_lines=source)


# --------------------------------------------------------------------------------------
# The automatic checks that stand in for a human review
# --------------------------------------------------------------------------------------

def _fold(text: str) -> str:
    text = unicodedata.normalize("NFC", text).replace("**", "")
    for a, b in {"’": "'", "‘": "'", "“": '"', "”": '"', "–": "-", "—": "-", " ": " "}.items():
        text = text.replace(a, b)
    return re.sub(r"\s+", "", text).lower()


def rendered_strings(c: Converted) -> list[str]:
    out = [c.title] + c.kicker + ([c.topic] if c.topic else []) + ([c.subtitle] if c.subtitle else [])
    for b in c.blocks:
        if b["type"] == "list":
            out += b["items"]
        elif b["type"] == "table":
            out += list(b["head"]) + [cell for row in b["rows"] for cell in row]
        else:
            out.append(b["text"])
    return out


def check_complete(c: Converted) -> None:
    """Every line of the document must reach the page; structure must look like an article."""
    have = _fold("\n".join(rendered_strings(c)))
    missing = [line for line in c.source_lines if _fold(line) not in have]
    if missing:
        raise ConversionError("một số dòng trong file Word sẽ không hiện lên trang: " + " | ".join(m[:80] for m in missing[:3]))
    headings = [b for b in c.blocks if b["type"] == "h2" and b["text"] not in NOTICE_HEADINGS]
    if not headings:
        raise ConversionError("không tìm thấy tiêu đề mục nào (ví dụ dòng '01 | ...')")
    if not any(b["type"] == "h2" and b["text"] in NOTICE_HEADINGS for b in c.blocks):
        raise ConversionError("thiếu phần 'THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ' / 'LEGAL NOTICE AND COPYRIGHT' ở cuối bài")
    if not any(b["type"] == "p" for b in c.blocks):
        raise ConversionError("bài không có đoạn nội dung nào")


# --------------------------------------------------------------------------------------
# Language, slug and the TypeScript data file
# --------------------------------------------------------------------------------------

VI_LETTERS = set("ăâđêôơưáàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ")


def detect_language(file_name: str, c: Converted | None = None) -> str | None:
    upper = file_name.upper()
    if re.search(r"(\(|\b|_)(VN|VI)(\)|\b|_)", upper):
        return "vi"
    if re.search(r"(\(|\b|_)EN(\)|\b|_)", upper):
        return "en"
    if c is not None:
        text = " ".join(c.source_lines[:20]).lower()
        share = sum(ch in VI_LETTERS for ch in text) / max(1, sum(ch.isalpha() for ch in text))
        return "vi" if share > 0.02 else "en"
    return None


def slugify(title: str, limit: int = 80) -> str:
    head = title.split("?")[0] if len(title.split("?")[0]) >= 20 else title
    text = unicodedata.normalize("NFD", head)
    text = "".join(ch for ch in text if unicodedata.category(ch) != "Mn").replace("đ", "d").replace("Đ", "D")
    text = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    if len(text) > limit:
        text = text[:limit].rsplit("-", 1)[0]
    return text


def ts_identifier(slug: str) -> str:
    parts = re.split(r"[^a-z0-9]+", slug)
    name = parts[0] + "".join(p.capitalize() for p in parts[1:])
    return ("a" + name) if name[:1].isdigit() else name


def article_ts(slug: str, published_at: str, locales: dict[str, dict], cover: str | None, source: str) -> str:
    """The data file for one article, in the same shape as the hand-made ones."""
    lines = [
        'import type { Article } from "../types";',
        "",
        "/**",
        " * Generated by scripts/drive-sync from the Client's Google Drive folder",
        f" * \"{source}\". Do not edit by hand: change the Word file in Drive and the next sync",
        " * rewrites this file. The text is the Client's own, except the fixed corrections in",
        " * scripts/drive-sync/corrections.json.",
        " */",
        f"export const {ts_identifier(slug)}: Article = " + "{",
        f"  slug: {json.dumps(slug)},",
        f"  publishedAt: {json.dumps(published_at)},",
        "  // Legal Insight, like the articles published by hand. TODO(client): confirm.",
        "  category: 1,",
    ]
    if cover:
        lines.append(f"  coverImage: {json.dumps(cover)},")
    for lang in ("vi", "en"):
        if lang in locales:
            body = json.dumps(locales[lang], ensure_ascii=False, indent=2)
            body = "\n".join(("  " + l) if i else l for i, l in enumerate(body.split("\n")))
            lines.append(f"  {lang}: {body},")
    lines.append("};")
    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    import sys

    for arg in sys.argv[1:]:
        result = convert(Path(arg))
        check_complete(result)
        counts: dict[str, int] = {}
        for b in result.blocks:
            counts[b["type"]] = counts.get(b["type"], 0) + 1
        print(arg, "->", detect_language(Path(arg).name, result), "|", result.title[:70], "|", counts, "| corrections:", result.corrections)
