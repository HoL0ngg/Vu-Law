"""Export the text of the website to two Word files, one English and one Vietnamese.

  python scripts/export-docx/export.py                 # reads the live site, writes exports/
  python scripts/export-docx/export.py --base http://localhost:3000 --out exports

The text comes from the rendered pages (what a visitor sees, in the order a visitor sees it),
not from app/i18n, so the Vietnamese file already contains the English fallback where the Client
has not supplied Vietnamese. Those paragraphs are highlighted yellow in the Vietnamese file.
Nothing is edited, shortened or translated: this only re-writes the page text into Word.
Standard library only; the .docx is written by hand (zipfile), so no package is needed.
"""

import argparse
import re
import sys
import subprocess
import unicodedata
import zipfile
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from xml.sax.saxutils import escape

# (path, label used only for the Word table of contents when the page has no <title>)
PAGES = [
    "",
    "about",
    "expertise",
    "people",
    "people/nguyen-ha-thanh-vu",
    "people/truc-nguyen",
    "contact",
    "insights",
    "careers",
]
# Pages that carry only a label ("noindex" placeholders): not exported, listed in the note.
SKIPPED = ["experience", "terms-of-use", "privacy-policy", "legal-disclaimer"]

VOID = {"br", "img", "input", "meta", "link", "hr", "source", "wbr", "area", "base", "col", "embed", "track"}
SKIP_TAGS = {"script", "style", "svg", "noscript", "template", "head", "title"}
BLOCK = {
    "p", "div", "section", "article", "header", "footer", "nav", "main", "ul", "ol", "li", "h1", "h2", "h3", "h4",
    "h5", "h6", "summary", "details", "figure", "figcaption", "blockquote", "form", "label", "fieldset", "tr", "td",
    "th", "table", "thead", "tbody", "address", "dl", "dt", "dd", "select", "option", "button", "legend", "aside",
    "textarea",
}
HEADING = {"h1": "h1", "h2": "h2", "h3": "h3", "h4": "h3", "h5": "h3", "h6": "h3"}
BOLD = {"strong", "b"}
ITALIC = {"em", "i"}


class Page(HTMLParser):
    """Collects the visible text of one page into blocks, split by region (header / main / footer)."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.regions = {"header": [], "main": [], "footer": []}
        self.region = None
        self.region_tag = None
        self.stack = []  # (tag, skipping, pushed_kind)
        self.kinds = ["p"]
        self.runs = []
        self.bold = 0
        self.italic = 0
        self.table = None
        self.row = None
        self.cell = None
        self.in_title = False
        self.last_end = None  # tag closed most recently, until visible text follows

    # -- helpers
    @property
    def skipping(self):
        return any(skip for _, skip, _ in self.stack)

    def add_text(self, text):
        if self.region is None or self.skipping:
            return
        text = re.sub(r"\s+", " ", text)
        if text:
            self.runs.append([text, bool(self.bold), bool(self.italic)])

    def flush(self):
        runs = self.runs
        self.runs = []
        if not runs:
            return
        # trim the block, merge neighbouring runs with the same formatting
        runs[0][0] = runs[0][0].lstrip()
        runs[-1][0] = runs[-1][0].rstrip()
        merged = []
        for text, bold, italic in runs:
            if text == "\n":
                merged.append(["\n", False, False])
                continue
            if merged and merged[-1][0] != "\n" and merged[-1][1:] == [bold, italic]:
                merged[-1][0] += text
            else:
                merged.append([text, bold, italic])
        merged = [r for r in merged if r[0] != ""]
        if not any(r[0].strip() for r in merged):
            return
        if self.cell is not None:
            self.cell.append(merged)
        elif self.region:
            self.regions[self.region].append({"kind": self.kinds[-1], "runs": merged})

    # -- parser events
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag in VOID:
            if tag == "br" and self.region and not self.skipping:
                self.runs.append(["\n", False, False])
            return
        skip = tag in SKIP_TAGS or a.get("aria-hidden") == "true" or "hidden" in a
        kind = None
        if not skip:
            if self.region is None and tag in ("header", "main", "footer"):
                self.region, self.region_tag = tag, tag
                kind = "region"
            if tag in BLOCK:
                self.flush()
                if tag in HEADING:
                    self.kinds.append(HEADING[tag])
                elif tag == "li":
                    self.kinds.append("li")
                elif tag in ("p", "div", "span", "summary", "label", "button") and self.kinds[-1] in ("li", "h1", "h2", "h3"):
                    self.kinds.append(self.kinds[-1])
                else:
                    self.kinds.append("p")
                kind = (kind or "") + "block"
                if tag == "table":
                    self.table = []
                elif tag == "tr" and self.table is not None:
                    self.row = []
                elif tag in ("td", "th") and self.row is not None:
                    self.cell = []
            if tag == "a" and self.last_end == "a":
                self.flush()  # sibling links (menu, CTA rows) are separate lines
            if tag in ("span", "time") and self.runs and not self.runs[-1][0].endswith((" ", "\n")):
                # neighbouring spans are laid out side by side (e.g. category and date): keep them apart
                self.runs.append([" ", False, False])
            if tag in BOLD:
                self.bold += 1
                kind = (kind or "") + "bold"
            if tag in ITALIC:
                self.italic += 1
                kind = (kind or "") + "italic"
        self.stack.append((tag, skip, kind))

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag in VOID:
            return
        self.last_end = tag
        # close up to the matching open tag
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                break
        else:
            return
        while len(self.stack) > i:
            t, skip, kind = self.stack.pop()
            if skip or not kind:
                continue
            if "block" in kind:
                self.flush()
                if t in ("td", "th") and self.cell is not None:
                    self.row.append(self.cell)
                    self.cell = None
                elif t == "tr" and self.row is not None:
                    self.table.append(self.row)
                    self.row = None
                elif t == "table" and self.table is not None:
                    if self.region:
                        self.regions[self.region].append({"kind": "table", "rows": self.table})
                    self.table = None
                if len(self.kinds) > 1:
                    self.kinds.pop()
            if "bold" in kind:
                self.bold -= 1
            if "italic" in kind:
                self.italic -= 1
            if "region" in kind and t == self.region_tag:
                self.flush()
                self.region = self.region_tag = None

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        else:
            if data.strip():
                self.last_end = None
            self.add_text(data)


def fetch(url: str) -> str:
    # curl rather than urllib: some Python builds (MSYS2 on Windows) ship without a CA bundle.
    result = subprocess.run(
        ["curl", "-sSfL", "--max-time", "60", "-A", "ivl-export-docx/1.0", url], capture_output=True, check=True
    )
    return result.stdout.decode("utf-8")


def parse(html: str) -> Page:
    page = Page()
    page.feed(html)
    page.close()
    page.title = unescape(page.title).strip()
    return page


# ---------------------------------------------------------------------------------------------
# Block helpers

def block_text(block) -> str:
    if block["kind"] == "table":
        return "\t".join(" ".join(block_text({"kind": "p", "runs": r}) for c in row for r in c) for row in block["rows"])
    return "".join(("\n" if r[0] == "\n" else r[0]) for r in block["runs"])


def norm(text: str) -> str:
    return re.sub(r"\s+", " ", unicodedata.normalize("NFC", text)).strip().casefold()


def has_vietnamese(text: str) -> bool:
    for ch in unicodedata.normalize("NFD", text):
        if unicodedata.combining(ch) or ch in "đĐ":
            return True
    return False


# Words and labels that are the same in both languages: never a missing translation.
SAME_IN_BOTH = {"envi", "email", "email:", "linkedin:", "[linkedin profile]"}


def is_fallback(text: str, english_texts) -> bool:
    """True when a Vietnamese-page paragraph is the English text, i.e. no Vietnamese was supplied."""
    if english_texts is None or has_vietnamese(text):
        return False
    key = norm(text)
    if key not in english_texts or key in SAME_IN_BOTH or "@" in text or not re.search(r"[A-Za-z]{4}", text):
        return False
    words = text.split()
    return len(words) >= 2 or re.fullmatch(r"[A-Za-z]{4,}", text) is not None


def dedupe(blocks):
    seen, out = set(), []
    for b in blocks:
        key = (b["kind"], block_text(b))
        if key in seen:
            continue
        seen.add(key)
        out.append(b)
    return out


# ---------------------------------------------------------------------------------------------
# Word writer

NS = (
    'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"'
)


def run_xml(text, bold=False, italic=False, highlight=False, color=None, size=None):
    props = ""
    if bold:
        props += "<w:b/>"
    if italic:
        props += "<w:i/>"
    if color:
        props += f'<w:color w:val="{color}"/>'
    if size:
        props += f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>'
    if highlight:
        props += '<w:highlight w:val="yellow"/>'
    rpr = f"<w:rPr>{props}</w:rPr>" if props else ""
    parts = text.split("\n")
    xml = ""
    for i, part in enumerate(parts):
        if i:
            xml += f"<w:r>{rpr}<w:br/></w:r>"
        if part:
            xml += f'<w:r>{rpr}<w:t xml:space="preserve">{escape(part)}</w:t></w:r>'
    return xml


def runs_xml(runs, highlight=False, force_bold=False):
    xml = ""
    for text, bold, italic in runs:
        xml += run_xml(text, bold or force_bold, italic, highlight)
    return xml


def para(style, inner):
    return f'<w:p><w:pPr><w:pStyle w:val="{style}"/></w:pPr>{inner}</w:p>'


class Doc:
    def __init__(self):
        self.body = []
        self.highlighted = 0
        self.paragraphs = 0
        self.tables = 0

    def heading(self, level, text):
        self.body.append(para(f"Heading{level}", run_xml(text)))

    def note(self, text):
        self.body.append(para("Note", run_xml(text)))

    def block(self, block, highlight_set=None, stats=None):
        if block["kind"] == "table":
            self.table(block, highlight_set, stats)
            return
        text = block_text(block)
        hl = False
        if highlight_set is not None:
            hl = is_fallback(text, highlight_set)
        style = {"h1": "Heading2", "h2": "Heading2", "h3": "Heading3", "li": "ListBullet"}.get(block["kind"], "Normal")
        self.body.append(para(style, runs_xml(block["runs"], hl)))
        self.paragraphs += 1
        if hl:
            self.highlighted += 1
            if stats is not None:
                stats.append(text)

    def table(self, block, highlight_set, stats):
        rows = block["rows"]
        width = max(len(r) for r in rows)
        xml = (
            '<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="0" w:type="auto"/>'
            '<w:tblBorders>'
            + "".join(f'<w:{s} w:val="single" w:sz="4" w:space="0" w:color="999999"/>' for s in ("top", "left", "bottom", "right", "insideH", "insideV"))
            + "</w:tblBorders></w:tblPr><w:tblGrid>"
            + "".join('<w:gridCol w:w="2400"/>' for _ in range(width))
            + "</w:tblGrid>"
        )
        for ri, row in enumerate(rows):
            xml += "<w:tr>"
            for cell in row:
                inner = ""
                for runs in cell:
                    text = "".join(r[0] for r in runs)
                    hl = is_fallback(text, highlight_set)
                    inner += para("Normal", runs_xml(runs, hl, force_bold=(ri == 0)))
                    if hl:
                        self.highlighted += 1
                        if stats is not None:
                            stats.append(text)
                xml += f'<w:tc><w:tcPr><w:tcW w:w="2400" w:type="dxa"/></w:tcPr>{inner or para("Normal", "")}</w:tc>'
            xml += "</w:tr>"
        xml += "</w:tbl>" + para("Normal", "")
        self.body.append(xml)
        self.tables += 1

    def save(self, path: Path, title: str):
        document = (
            f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document {NS}><w:body>'
            + "".join(self.body)
            + '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr>'
            "</w:body></w:document>"
        )
        styles = (
            f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles {NS}>'
            '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/>'
            '<w:sz w:val="23"/><w:szCs w:val="23"/><w:lang w:val="en-GB" w:eastAsia="en-GB" w:bidi="ar-SA"/></w:rPr></w:rPrDefault>'
            '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>'
            '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>'
            '<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:color w:val="14213D"/><w:sz w:val="44"/><w:szCs w:val="44"/></w:rPr></w:style>'
            '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:pageBreakBefore/><w:spacing w:before="0" w:after="60"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="14213D"/><w:sz w:val="36"/><w:szCs w:val="36"/></w:rPr></w:style>'
            '<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:color w:val="14213D"/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:style>'
            '<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="200" w:after="80"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:i/><w:sz w:val="25"/><w:szCs w:val="25"/></w:rPr></w:style>'
            '<w:style w:type="paragraph" w:styleId="ListBullet"><w:name w:val="List Bullet"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr><w:spacing w:after="60"/><w:ind w:left="567" w:hanging="283"/></w:pPr></w:style>'
            '<w:style w:type="paragraph" w:styleId="Note"><w:name w:val="Note"/><w:basedOn w:val="Normal"/><w:qFormat/><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:style>'
            '<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style>'
            '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:basedOn w:val="TableNormal"/></w:style>'
            "</w:styles>"
        )
        numbering = (
            f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:numbering {NS}>'
            '<w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/>'
            '<w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="&#8226;"/><w:lvlJc w:val="left"/>'
            '<w:pPr><w:ind w:left="567" w:hanging="283"/></w:pPr><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/></w:rPr></w:lvl>'
            '</w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>'
        )
        content_types = (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
            '<Default Extension="xml" ContentType="application/xml"/>'
            '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
            '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>'
            '<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>'
            '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>'
            "</Types>"
        )
        rels = (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>'
            "</Relationships>"
        )
        doc_rels = (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>'
            "</Relationships>"
        )
        core = (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" '
            'xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>' + escape(title) + "</dc:title></cp:coreProperties>"
        )
        path.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr("[Content_Types].xml", content_types)
            z.writestr("_rels/.rels", rels)
            z.writestr("word/document.xml", document)
            z.writestr("word/styles.xml", styles)
            z.writestr("word/numbering.xml", numbering)
            z.writestr("word/_rels/document.xml.rels", doc_rels)
            z.writestr("docProps/core.xml", core)


# ---------------------------------------------------------------------------------------------

LABELS = {
    "en": {
        "title": "Integritas Vu Legal - Website content (English)",
        "intro": "Text of the website {base}/ exported on {date}. Each section is one page, in the order of the site map; the menu and the footer are shown once. Nothing has been edited or translated.",
        "menu": "Menu (header)",
        "footer": "Footer",
        "skipped": "Not exported (pages that only show their title): {pages}.",
        "url": "Page address",
    },
    "vi": {
        "title": "Integritas Vũ Legal - Nội dung website (Tiếng Việt)",
        "intro": "Nội dung chữ của website {base}/vi, xuất ngày {date}. Mỗi mục là một trang, theo thứ tự sơ đồ trang; menu và chân trang chỉ ghi một lần. Không chỉnh sửa hay dịch thêm chữ nào.",
        "menu": "Menu (đầu trang)",
        "footer": "Chân trang",
        "skipped": "Không xuất (các trang chỉ có tiêu đề): {pages}.",
        "url": "Địa chỉ trang",
        "highlight": "Phần TÔ VÀNG là chỗ web đang hiện tiếng Anh vì chưa có bản tiếng Việt từ Client.",
    },
}


def build(lang: str, base: str, pages: dict, english_texts: set, date: str, out: Path):
    L = LABELS[lang]
    doc = Doc()
    doc.body.append(para("Title", run_xml(L["title"])))
    doc.note(L["intro"].format(base=base, date=date))
    doc.note(L["skipped"].format(pages=", ".join("/" + p for p in SKIPPED)))
    highlight_set = None
    stats = None
    if lang == "vi":
        doc.note(L["highlight"])
        highlight_set = english_texts
        stats = []
    per_page_hl = {}

    first = pages[PAGES[0]]
    doc.heading(1, L["menu"])
    for block in dedupe(first.regions["header"]):
        doc.block(block, highlight_set, stats)

    for path in PAGES:
        page = pages[path]
        before = doc.highlighted
        doc.heading(1, page.title or ("/" + path))
        url = f"{base}/{'vi/' if lang == 'vi' else ''}{path}".rstrip("/")
        if path == "" and lang == "en":
            url = base + "/"
        doc.note(f'{L["url"]}: {url}')
        for block in page.regions["main"]:
            doc.block(block, highlight_set, stats)
        per_page_hl["/" + path] = doc.highlighted - before

    doc.heading(1, L["footer"])
    before = doc.highlighted
    for block in dedupe(first.regions["footer"]):
        doc.block(block, highlight_set, stats)
    per_page_hl["footer"] = doc.highlighted - before
    doc.save(out, L["title"])
    return doc, per_page_hl, stats


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base", default="https://www.integritasvulegal.com")
    parser.add_argument("--out", default="exports")
    parser.add_argument("--date", default=None)
    args = parser.parse_args()
    base = args.base.rstrip("/")
    date = args.date or __import__("datetime").date.today().isoformat()
    out = Path(args.out)

    pages = {"en": {}, "vi": {}}
    for lang in ("en", "vi"):
        for path in PAGES:
            prefix = "/vi" if lang == "vi" else ""
            url = f"{base}{prefix}/{path}".rstrip("/") or base
            if lang == "en" and path == "":
                url = base + "/"
            pages[lang][path] = parse(fetch(url))
            print(f"{lang} /{path}: {sum(len(v) for v in pages[lang][path].regions.values())} blocks", file=sys.stderr)

    english_texts = set()
    for page in pages["en"].values():
        for blocks in page.regions.values():
            for b in blocks:
                if b["kind"] == "table":
                    for row in b["rows"]:
                        for cell in row:
                            for runs in cell:
                                english_texts.add(norm("".join(r[0] for r in runs)))
                else:
                    english_texts.add(norm(block_text(b)))

    for lang, name in (("en", "IVL-website-EN.docx"), ("vi", "IVL-website-VN.docx")):
        doc, per_page, stats = build(lang, base, pages[lang], english_texts, date, out / name)
        print(f"{name}: {doc.paragraphs} paragraphs, {doc.tables} tables, {doc.highlighted} highlighted")
        if lang == "vi":
            for key, count in per_page.items():
                print(f"  highlighted on {key}: {count}")
            for text in stats:
                print("   -", text[:110])


if __name__ == "__main__":
    main()
