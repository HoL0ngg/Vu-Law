"""Publish Legal Insights from a Google Drive folder.

Each sub-folder of the Drive folder is one article, named by its publication date
(`2026-11-09`, or `09.11.2026`), holding the Word file(s) — `(VN)` and/or `(EN)` in the
name — and one cover picture. A folder whose date is still in the future waits; a folder
renamed with a leading `_` takes its article off the site; other folders are ignored.

  python sync.py --drive                      # in GitHub Actions (needs GDRIVE_SA_KEY, GDRIVE_FOLDER_ID)
  python sync.py --source-dir <folder>        # same rules on a local folder, for testing
  python sync.py ... --report report.json     # what happened, for the workflow
  python sync.py --record-failure report.json # after a failed build: remember those folders as failed

Nothing here deploys: the workflow commits the files this writes, and Vercel deploys the commit.
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import io
import json
import os
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Callable

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
sys.path.insert(0, str(HERE))
from convert import ConversionError, article_ts, check_complete, convert, detect_language, slugify, ts_identifier  # noqa: E402

CONTENT_DIR = ROOT / "app" / "content" / "insights"
DRIVE_DIR = CONTENT_DIR / "drive"
IMAGE_DIR = ROOT / "public" / "images" / "blog"
STATE_FILE = HERE / "state.json"
VN_TZ = dt.timezone(dt.timedelta(hours=7))
# A file changed this recently may still be uploading; wait for the next run.
SETTLE_MINUTES = 4

DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
GDOC_MIME = "application/vnd.google-apps.document"
FOLDER_MIME = "application/vnd.google-apps.folder"
IMAGE_EXT = (".jpg", ".jpeg", ".png", ".webp")


@dataclass
class SourceFile:
    name: str
    kind: str  # "docx" | "image" | "other"
    fingerprint: str
    modified: dt.datetime | None
    fetch: Callable[[], bytes]


@dataclass
class SourceFolder:
    id: str
    name: str
    files: Callable[[], list[SourceFile]]


# --------------------------------------------------------------------------------------
# Sources: Google Drive, or a local folder with the same layout
# --------------------------------------------------------------------------------------

def drive_source(folder_id: str) -> list[SourceFolder]:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaIoBaseDownload

    info = json.loads(os.environ["GDRIVE_SA_KEY"])
    creds = service_account.Credentials.from_service_account_info(info, scopes=["https://www.googleapis.com/auth/drive.readonly"])
    api = build("drive", "v3", credentials=creds, cache_discovery=False)

    def children(parent: str) -> list[dict]:
        out, token = [], None
        while True:
            resp = api.files().list(
                q=f"'{parent}' in parents and trashed = false",
                fields="nextPageToken, files(id, name, mimeType, md5Checksum, modifiedTime)",
                pageSize=200, pageToken=token, supportsAllDrives=True, includeItemsFromAllDrives=True,
            ).execute()
            out += resp.get("files", [])
            token = resp.get("nextPageToken")
            if not token:
                return out

    def download(request) -> bytes:
        buf = io.BytesIO()
        downloader = MediaIoBaseDownload(buf, request)
        done = False
        while not done:
            _, done = downloader.next_chunk()
        return buf.getvalue()

    def files_of(fid: str) -> list[SourceFile]:
        result = []
        for f in children(fid):
            name, mime = f["name"], f["mimeType"]
            modified = dt.datetime.fromisoformat(f["modifiedTime"].replace("Z", "+00:00"))
            if mime == DOCX_MIME or name.lower().endswith(".docx"):
                kind, fetch = "docx", (lambda i=f["id"]: download(api.files().get_media(fileId=i)))
            elif mime == GDOC_MIME:
                kind, fetch = "docx", (lambda i=f["id"]: download(api.files().export_media(fileId=i, mimeType=DOCX_MIME)))
                name += ".docx"
            elif mime.startswith("image/") or name.lower().endswith(IMAGE_EXT):
                kind, fetch = "image", (lambda i=f["id"]: download(api.files().get_media(fileId=i)))
            else:
                kind, fetch = "other", (lambda: b"")
            fingerprint = f"{f['id']}:{f.get('md5Checksum') or f['modifiedTime']}"
            result.append(SourceFile(name, kind, fingerprint, modified, fetch))
        return result

    return [SourceFolder(f["id"], f["name"], (lambda i=f["id"]: files_of(i)))
            for f in children(folder_id) if f["mimeType"] == FOLDER_MIME]


def local_source(directory: Path) -> list[SourceFolder]:
    def files_of(path: Path) -> list[SourceFile]:
        out = []
        for p in sorted(path.iterdir()):
            if not p.is_file():
                continue
            data = p.read_bytes()
            low = p.name.lower()
            kind = "docx" if low.endswith(".docx") else "image" if low.endswith(IMAGE_EXT) else "other"
            out.append(SourceFile(p.name, kind, hashlib.sha256(data).hexdigest()[:16], None, (lambda d=data: d)))
        return out

    # Like a Drive folder id, the id survives a rename that only adds or removes the leading "_".
    return [SourceFolder(f"local:{p.name.lstrip('_')}", p.name, (lambda p=p: files_of(p))) for p in sorted(directory.iterdir()) if p.is_dir()]


# --------------------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------------------

def parse_date(name: str) -> dt.date | None:
    name = name.strip()
    for pattern, order in ((r"^(\d{4})[-.](\d{1,2})[-.](\d{1,2})", "ymd"), (r"^(\d{1,2})[-.](\d{1,2})[-.](\d{4})", "dmy"), (r"^(\d{1,2})[-.](\d{1,2})[-.](\d{2})(?!\d)", "dmy2")):
        m = re.match(pattern, name)
        if m:
            a, b, c = (int(x) for x in m.groups())
            try:
                if order == "ymd":
                    return dt.date(a, b, c)
                return dt.date(2000 + c if order == "dmy2" else c, b, a)
            except ValueError:
                return None
    return None


def existing_hand_made_slugs() -> set[str]:
    slugs = set()
    for p in CONTENT_DIR.glob("*.ts"):
        slugs.update(re.findall(r'^\s*slug:\s*"([^"]+)"', p.read_text(encoding="utf-8"), flags=re.M))
    return slugs


def save_cover(data: bytes, slug: str) -> str:
    from PIL import Image

    image = Image.open(io.BytesIO(data))
    if image.mode in ("RGBA", "LA", "P"):
        rgba = image.convert("RGBA")
        background = Image.new("RGB", rgba.size, (255, 255, 255))
        background.paste(rgba, mask=rgba.split()[-1])
        image = background
    else:
        image = image.convert("RGB")
    if image.width > 1600:
        image = image.resize((1600, round(image.height * 1600 / image.width)), Image.LANCZOS)
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    image.save(IMAGE_DIR / f"{slug}.jpg", "JPEG", quality=82, optimize=True, progressive=True)
    return f"/images/blog/{slug}.jpg"


def write_index(state: dict) -> None:
    published = sorted(
        (v for v in state["folders"].values() if v.get("status") == "published"),
        key=lambda v: (v["date"], v["slug"]),
    )
    lines = [
        'import type { Article } from "../types";',
        *[f'import {{ {ts_identifier(v["slug"])} }} from "./{v["slug"]}";' for v in published],
        "",
        "/** Generated by scripts/drive-sync: every article currently published from Google Drive. */",
        "export const driveArticles: readonly Article[] = [" + ", ".join(ts_identifier(v["slug"]) for v in published) + "];",
    ]
    DRIVE_DIR.mkdir(parents=True, exist_ok=True)
    (DRIVE_DIR / "index.ts").write_text("\n".join(lines) + "\n", encoding="utf-8")


# --------------------------------------------------------------------------------------
# One folder
# --------------------------------------------------------------------------------------

def publish_folder(folder: SourceFolder, files: list[SourceFile], entry: dict, taken: set[str], date: dt.date) -> dict:
    docs = [f for f in files if f.kind == "docx" and not f.name.startswith("~$")]
    images = [f for f in files if f.kind == "image"]
    if not docs:
        raise ConversionError("folder không có file Word")
    if len(images) > 1:
        raise ConversionError("folder có nhiều hơn một ảnh; chỉ để lại một ảnh bìa")

    locales: dict[str, dict] = {}
    corrections: list[str] = []
    for doc in docs:
        converted = convert(doc.fetch())
        check_complete(converted)
        lang = detect_language(doc.name, converted)
        if lang in locales:
            raise ConversionError(f"có hai file Word cùng là {'tiếng Việt' if lang == 'vi' else 'tiếng Anh'}; hãy đặt tên có (VN) và (EN)")
        locales[lang] = converted.as_locale()
        corrections += converted.corrections

    slug = entry.get("slug")
    if not slug:
        base = locales.get("vi", locales.get("en"))["title"]
        slug = slugify(base)
        if not slug or slug in taken:
            raise ConversionError(f"đường dẫn '{slug}' đã thuộc về một bài khác trên web; hãy đổi tiêu đề")
    cover = save_cover(images[0].fetch(), slug) if images else None

    DRIVE_DIR.mkdir(parents=True, exist_ok=True)
    (DRIVE_DIR / f"{slug}.ts").write_text(article_ts(slug, date.isoformat(), locales, cover, folder.name), encoding="utf-8")
    return {"slug": slug, "languages": sorted(locales), "corrections": sorted(set(corrections)), "cover": bool(cover)}


def run(folders: list[SourceFolder], report_path: Path | None, today: dt.date, now: dt.datetime) -> int:
    state = json.loads(STATE_FILE.read_text(encoding="utf-8")) if STATE_FILE.exists() else {"folders": {}}
    report = {"published": [], "updated": [], "hidden": [], "failed": [], "waiting": []}
    hand_made = existing_hand_made_slugs()
    taken = hand_made | {v["slug"] for v in state["folders"].values() if v.get("slug")}

    for folder in folders:
        hidden = folder.name.startswith("_")
        date = parse_date(folder.name.lstrip("_"))
        if date is None:
            continue
        if hidden and folder.id not in state["folders"]:
            continue  # never published, nothing to take down
        if not hidden and date > today and state["folders"].get(folder.id, {}).get("status") != "published":
            report["waiting"].append({"folder": folder.name, "reason": "scheduled"})
            continue
        entry = state["folders"].setdefault(folder.id, {})
        entry["name"] = folder.name

        if hidden:
            if entry.get("status") == "published":
                (DRIVE_DIR / f"{entry['slug']}.ts").unlink(missing_ok=True)
                entry["status"] = "hidden"
                report["hidden"].append({"folder": folder.name, "slug": entry["slug"]})
            continue
        if date > today:
            report["waiting"].append({"folder": folder.name, "reason": "scheduled"})
            continue

        files = folder.files()
        fingerprint = hashlib.sha256("|".join(sorted(f.fingerprint for f in files)).encode()).hexdigest()[:20]
        if entry.get("fingerprint") == fingerprint and entry.get("status") in ("published", "failed") and entry.get("date") == date.isoformat():
            continue  # nothing changed since the last run (a failure is reported once, not every hour)
        if any(f.modified and now - f.modified < dt.timedelta(minutes=SETTLE_MINUTES) for f in files):
            report["waiting"].append({"folder": folder.name, "reason": "uploading"})
            continue

        was_published = entry.get("status") == "published"
        try:
            own_taken = taken - ({entry["slug"]} if entry.get("slug") else set())
            result = publish_folder(folder, files, entry, own_taken, date)
        except ConversionError as error:
            entry.update({"status": "failed", "fingerprint": fingerprint, "date": date.isoformat(), "error": str(error)})
            report["failed"].append({"folder": folder.name, "folder_id": folder.id, "error": str(error)})
            continue
        except Exception as error:  # an unreadable file is a failed article, not a failed run
            entry.update({"status": "failed", "fingerprint": fingerprint, "date": date.isoformat(), "error": f"không đọc được file: {error}"})
            report["failed"].append({"folder": folder.name, "folder_id": folder.id, "error": f"không đọc được file: {error}"})
            continue
        entry.update({"status": "published", "fingerprint": fingerprint, "date": date.isoformat(), "slug": result["slug"]})
        entry.pop("error", None)
        taken.add(result["slug"])
        report["updated" if was_published else "published"].append({"folder": folder.name, "folder_id": folder.id, **result})

    write_index(state)
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if report_path:
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({k: len(v) for k, v in report.items()}))
    return 0


def record_failure(report_path: Path, reason: str) -> int:
    """After a failed build: keep the previous files, but remember these folders as failed."""
    report = json.loads(report_path.read_text(encoding="utf-8"))
    state = json.loads(STATE_FILE.read_text(encoding="utf-8")) if STATE_FILE.exists() else {"folders": {}}
    for item in report["published"] + report["updated"]:
        entry = state["folders"].get(item["folder_id"])
        if entry is not None:
            entry["status"] = "failed"
            entry["error"] = reason
    for item in report["hidden"]:  # the workflow put the article file back, so it is still live
        for entry in state["folders"].values():
            if entry.get("slug") == item["slug"]:
                entry["status"] = "published"
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--drive", action="store_true")
    ap.add_argument("--source-dir", type=Path)
    ap.add_argument("--report", type=Path)
    ap.add_argument("--today", help="override today's date (YYYY-MM-DD), for testing")
    ap.add_argument("--record-failure", type=Path)
    ap.add_argument("--reason", default="web không build được khi có bài này")
    args = ap.parse_args()

    if args.record_failure:
        return record_failure(args.record_failure, args.reason)
    now = dt.datetime.now(dt.timezone.utc)
    today = dt.date.fromisoformat(args.today) if args.today else now.astimezone(VN_TZ).date()
    if args.drive:
        folders = drive_source(os.environ["GDRIVE_FOLDER_ID"])
    elif args.source_dir:
        folders = local_source(args.source_dir)
    else:
        ap.error("give --drive or --source-dir")
    return run(folders, args.report, today, now)


if __name__ == "__main__":
    sys.exit(main())
