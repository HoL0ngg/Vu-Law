#!/usr/bin/env python3
"""Check that client-approved copy appears on a rendered page.

Reads every line inside ```text fences of one or more reference markdown files
and verifies each appears in the page's visible text.

Comparison is deliberately tolerant, because the site may split a sentence
across tags, uppercase it with CSS, or use curly quotes:
  * HTML tags, <script>, <style>, comments are removed; entities are decoded
  * Unicode is normalised to NFC
  * curly quotes and en/em dashes are folded to straight ones
  * all whitespace is ignored and case is ignored

Usage:
  check_copy.py --source http://localhost:3000/ --reference phase-1-homepage.md
  check_copy.py --source dist/index.html --reference a.md --reference b.md

Exit code 0 = everything found, 1 = something missing, 2 = usage/IO problem.
"""
import argparse
import html
import pathlib
import re
import sys
import unicodedata
import urllib.request


def required_lines(md_path):
    text = pathlib.Path(md_path).read_text(encoding="utf-8")
    blocks = re.findall(r"```text[ \t]*\n(.*?)```", text, flags=re.S)
    lines = []
    for block in blocks:
        for line in block.splitlines():
            line = line.strip()
            if line:
                lines.append(line)
    return lines


def fold(s):
    s = unicodedata.normalize("NFC", s)
    for a, b in {"\u2019": "'", "\u2018": "'", "\u201c": '"', "\u201d": '"',
                 "\u2013": "-", "\u2014": "-", "\u00a0": " "}.items():
        s = s.replace(a, b)
    return re.sub(r"\s+", "", s).lower()


def visible_text(source):
    if re.match(r"https?://", source):
        req = urllib.request.Request(source, headers={"User-Agent": "ivl-copy-check"})
        raw = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", "replace")
    else:
        raw = pathlib.Path(source).read_text(encoding="utf-8")
    raw = re.sub(r"<(script|style|noscript)\b.*?</\1>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<!--.*?-->", " ", raw, flags=re.S)
    raw = re.sub(r"<[^>]+>", " ", raw)
    return html.unescape(raw)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--source", required=True, help="URL or saved .html file of the rendered page")
    ap.add_argument("--reference", action="append", required=True, help="reference .md file (repeatable)")
    args = ap.parse_args()

    try:
        text = visible_text(args.source)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: cannot read source: {exc}", file=sys.stderr)
        return 2

    page = fold(text)
    if len(page) < 200:
        print("WARNING: very little text found. The page may render on the client only; "
              "save the rendered DOM from a headless browser and pass that file.", file=sys.stderr)

    missing, total = [], 0
    for ref in args.reference:
        try:
            lines = required_lines(ref)
        except Exception as exc:  # noqa: BLE001
            print(f"ERROR: cannot read reference {ref}: {exc}", file=sys.stderr)
            return 2
        for line in lines:
            total += 1
            if fold(line) not in page:
                missing.append((pathlib.Path(ref).name, line))

    print(f"Checked {total} strings, {len(missing)} missing.")
    for ref, line in missing:
        print(f"  MISSING [{ref}] {line}")
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
