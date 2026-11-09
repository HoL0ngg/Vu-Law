"""Turn the sync report into a commit message and one GitHub issue body per failed folder.

  python report.py commit-message report.json > msg.txt
  python report.py issues report.json <out-dir>     # writes <n>.title and <n>.md per failure
  python report.py changed-content report.json      # prints "true" when articles were added, updated or hidden
"""

import json
import sys
from pathlib import Path


def load(path: str) -> dict:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def commit_message(report: dict) -> str:
    published, updated, hidden, failed = (report[k] for k in ("published", "updated", "hidden", "failed"))
    parts = []
    if published:
        parts.append(f"publish {len(published)}")
    if updated:
        parts.append(f"update {len(updated)}")
    if hidden:
        parts.append(f"hide {len(hidden)}")
    head = "Drive sync: " + (", ".join(parts) if parts else "record failed folders")
    lines = [head, ""]
    for label, items in (("Published", published), ("Updated", updated)):
        for item in items:
            lines.append(f"{label}: {item['folder']} -> /insights/{item['slug']} ({', '.join(item['languages'])}{', cover' if item['cover'] else ''})")
            for fix in item.get("corrections", []):
                lines.append(f"  correction applied: {fix}")
    for item in hidden:
        lines.append(f"Hidden: {item['folder']} -> /insights/{item['slug']}")
    for item in failed:
        lines.append(f"Not published: {item['folder']}: {item['error']}")
    return "\n".join(lines) + "\n"


def issues(report: dict, out: Path) -> None:
    out.mkdir(parents=True, exist_ok=True)
    for n, item in enumerate(report["failed"], 1):
        (out / f"{n}.title").write_text(f"Không đăng được bài trong folder Drive \"{item['folder']}\"", encoding="utf-8")
        (out / f"{n}.md").write_text(
            "Bộ đồng bộ Drive đã **không đăng** bài trong folder này, nên trên web không có gì thay đổi.\n\n"
            f"**Folder:** `{item['folder']}`\n\n"
            f"**Lý do:** {item['error']}\n\n"
            "**Cách xử lý:** sửa file trong folder theo lý do trên. Lần đồng bộ sau (trong vài phút) sẽ tự thử lại; "
            "nếu đạt, bài tự lên web và issue này có thể đóng.\n\n"
            "Hướng dẫn quy ước folder: `scripts/drive-sync/README.md`.\n",
            encoding="utf-8",
        )


if __name__ == "__main__":
    command, path = sys.argv[1], sys.argv[2]
    data = load(path)
    if command == "commit-message":
        sys.stdout.write(commit_message(data))
    elif command == "issues":
        issues(data, Path(sys.argv[3]))
    elif command == "changed-content":
        print("true" if data["published"] or data["updated"] or data["hidden"] else "false")
    else:
        raise SystemExit(f"unknown command {command}")
