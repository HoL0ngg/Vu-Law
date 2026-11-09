# Đăng bài Insights tự động từ Google Drive

Bỏ bài vào một folder Google Drive, web tự đăng lên trang Insights. Không cần ai sửa code.

```
Drive: IVL Insights / 2026-11-09 / (VN).docx, (EN).docx, ảnh bìa
   │  Apps Script kiểm tra mỗi 5 phút, thấy thay đổi thì báo GitHub
   ▼
GitHub Actions "Drive sync": đọc folder, chuyển Word thành bài, tự kiểm tra
   ├─ đạt  → đưa lên web (Vercel deploy, thường 2–10 phút)
   └─ lỗi  → KHÔNG đăng, mở một Issue trên GitHub ghi lý do (GitHub gửi email)
```

Tổng thời gian từ lúc upload xong đến lúc bài lên web: khoảng **10–20 phút**.

---

## Phần 1: Quy ước cho người đăng bài

### Mỗi bài là một folder con, đặt tên theo ngày đăng
Trong folder gốc (ví dụ `IVL Insights`), tạo folder con tên là **ngày đăng**:
- `2026-11-09` hoặc `09.11.2026` (có thể thêm chữ phía sau, ví dụ `2026-11-09 Cong no cuoi nam`).

Trong folder đó để:
- File Word bản tiếng Việt, tên có **`(VN)`**, ví dụ `Cong no cuoi nam (VN).docx`.
- File Word bản tiếng Anh, tên có **`(EN)`**. Có thể chỉ có một bản; bài sẽ chỉ hiện ở ngôn ngữ đó.
- **Một** ảnh bìa (`.jpg`, `.png` hoặc `.webp`). Không có ảnh thì thẻ bài dùng hình nền mặc định.
- Google Docs cũng được, hệ thống tự chuyển sang Word.

### File Word cần soạn theo mẫu các bài đã đăng
- **Dòng đầu tiên là tiêu đề bài.** Có thể có dòng nhãn phía trên (ví dụ `INTEGRITAS VŨ LEGAL | LEGAL INSIGHTS`, `CHUYÊN ĐỀ … • TẬP 1/2`).
- Dòng `CHỦ ĐỀ 02: …` / `TOPIC 02: …` hiện thành nhãn dưới tiêu đề.
- Một câu dẫn ngắn (dưới ~250 ký tự) ngay sau tiêu đề hiện thành phụ đề in nghiêng.
- Tiêu đề mục: `01 | …` hoặc dòng viết hoa toàn bộ. Tiêu đề con: `4.1. …`.
- Gạch đầu dòng và bảng của Word được giữ nguyên.
- Nguồn tham khảo viết thành dòng `[1] …`, `[2] …` (không dùng footnote của Word).
- **Cuối bài bắt buộc có** `THÔNG BÁO PHÁP LÝ VÀ QUYỀN TÁC GIẢ` (hoặc `LEGAL NOTICE AND COPYRIGHT`).
- Không chèn ảnh hay text box vào trong file Word.

### Các thao tác thường gặp
| Muốn | Làm |
|---|---|
| Đăng bài | Tạo folder ngày hôm nay (hoặc trước đó) và bỏ file vào |
| **Hẹn giờ** đăng | Đặt tên folder là ngày trong tương lai; đến ngày đó bài tự lên (trong vòng 1 giờ sau 0h) |
| Sửa bài đã đăng | Thay file trong folder; đường dẫn bài giữ nguyên |
| Gỡ bài khỏi web | Đổi tên folder, thêm dấu `_` ở đầu: `_2026-11-09`. Bỏ dấu `_` để hiện lại |
| Làm nháp | Đặt tên folder không bắt đầu bằng ngày (ví dụ `Nhap - bai thue`) |

Xoá folder **không** tự gỡ bài (tránh mất bài do lỡ tay). Muốn gỡ, dùng dấu `_`.

### Khi bài không lên web
GitHub tạo một Issue tên "Không đăng được bài trong folder Drive …" kèm lý do, ví dụ thiếu phần thông báo pháp lý, hai file cùng là `(VN)`, có ảnh chèn trong Word. Sửa file trong folder, vài phút sau hệ thống tự thử lại.

### Lưu ý quan trọng
- **Không có bước duyệt tay.** Hệ thống kiểm tra định dạng và đảm bảo không mất chữ nào, nhưng **không** kiểm tra nội dung pháp lý. Bỏ file vào folder có ngày là coi như đăng.
- Danh sách chữ được tự sửa nằm ở `corrections.json` (hiện: "Trách Nhiện Hữu" → "Trách Nhiệm Hữu", "vi ph ạm" → "vi phạm"). Mỗi lần sửa được ghi lại trong lịch sử commit.
- Chuyên mục mặc định là "Nhận định pháp lý / Legal Insight".

---

## Phần 2: Cài đặt một lần (người quản trị, khoảng 20 phút)

### Bước 1: Tài khoản đọc Drive (Google Cloud, miễn phí)
1. Vào https://console.cloud.google.com, tạo project mới (ví dụ `ivl-drive-sync`).
2. **APIs & Services → Library**: tìm **Google Drive API**, bấm **Enable**.
3. **IAM & Admin → Service Accounts → Create service account**, đặt tên `drive-sync`, bỏ qua phần cấp quyền.
4. Mở service account vừa tạo → **Keys → Add key → Create new key → JSON**. Một file `.json` được tải về. Giữ kín file này.
5. Ghi lại email của service account (dạng `drive-sync@…iam.gserviceaccount.com`).

### Bước 2: Chia sẻ folder cho tài khoản đó
1. Trên Drive, tạo folder gốc `IVL Insights`.
2. Bấm **Chia sẻ**, thêm email service account ở bước 1, quyền **Người xem**.
3. Mở folder, copy phần ID trong đường dẫn: `https://drive.google.com/drive/folders/`**`ID_NẰM_Ở_ĐÂY`**.

### Bước 3: Khoá bí mật trên GitHub
Repo `HoL0ngg/Vu-Law` → **Settings → Secrets and variables → Actions → New repository secret**:
- `GDRIVE_SA_KEY`: dán **toàn bộ nội dung** file JSON ở bước 1.
- `GDRIVE_FOLDER_ID`: ID folder ở bước 2.

Rồi **Settings → Actions → General → Workflow permissions**: chọn **Read and write permissions**, Save.

Thử: tab **Actions → Drive sync → Run workflow**. Chạy xong không lỗi là GitHub đã đọc được Drive.

### Bước 4: Báo GitHub ngay khi Drive thay đổi (Apps Script)
1. GitHub → avatar → **Settings → Developer settings → Fine-grained tokens → Generate new token**: chỉ chọn repo `HoL0ngg/Vu-Law`, quyền **Contents: Read and write**. Copy token.
2. Vào https://script.google.com bằng tài khoản sở hữu Drive → **New project**, dán nội dung file `apps-script.gs`.
3. **Project Settings → Script Properties**, thêm:
   - `FOLDER_ID` = ID folder ở bước 2
   - `GITHUB_REPO` = `HoL0ngg/Vu-Law`
   - `GITHUB_TOKEN` = token vừa tạo
4. Chọn hàm `installTrigger`, bấm **Run**, cho phép quyền truy cập Drive. Từ giờ script chạy mỗi 5 phút.

Không làm bước 4 thì web vẫn tự đăng, chỉ chậm hơn (GitHub tự kiểm tra mỗi giờ).

---

## Phần 3: Cho lập trình viên

- `convert.py`: Word → dữ liệu bài (chỉ thư viện chuẩn Python). Chạy thử: `python convert.py <file.docx>`.
- `sync.py`: đọc Drive (`--drive`) hoặc một folder trên máy cùng cấu trúc (`--source-dir`), ghi `app/content/insights/drive/<slug>.ts`, `drive/index.ts`, ảnh `public/images/blog/<slug>.jpg` và `state.json`.
- `report.py`: nội dung commit và Issue cho workflow `.github/workflows/drive-sync.yml`.
- `state.json`: folder Drive ↔ đường dẫn bài, dấu vân tay file. Đừng sửa tay trừ khi muốn buộc đồng bộ lại một folder (xoá dòng của nó).
- File trong `app/content/insights/drive/` do máy sinh, không sửa tay. 7 bài đầu (đăng tay) vẫn nằm ngoài thư mục này.
- Bot đẩy commit lên `main`; trước khi push từ máy mình, nhớ `git pull`.
- Kiểm thử hồi quy: bộ chuyển đổi tái tạo giống hệt 6 bài song ngữ đăng tay (12 bản) từ file Word gốc trong `Blogs/`.
