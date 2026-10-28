# Trang soạn bài Insights (Sanity Studio)

Đây là nơi đội marketing viết bài, và quản trị viên duyệt rồi bấm đăng. Nó **tách khỏi website**: được deploy lên hosting riêng của Sanity, còn website (Vercel) chỉ đọc các bài **đã Publish**.

```
Marketing viết nháp ──► Quản trị viên xem và bấm Publish ──► Website tự cập nhật trong khoảng 1 phút
```

## 1. Thiết lập một lần (chủ dự án làm)

Cần tài khoản Sanity đứng tên công ty (miễn phí). Bạn là người tạo vì tài khoản này sẽ sở hữu toàn bộ nội dung.

1. Vào https://www.sanity.io/manage, đăng nhập, bấm **Create new project**. Đặt tên `Integritas Vu Legal`, dataset `production`, chế độ dataset **Public** (mặc định). Dataset public chỉ cho đọc bài **đã Publish**. Bản nháp luôn riêng tư.
2. Ghi lại **Project ID** (dãy chữ và số ngắn, hiện ngay trong trang dự án).
3. Trong thư mục `studio/`: sao chép `.env.example` thành `.env` và điền `SANITY_STUDIO_PROJECT_ID=<Project ID>`.
4. Chạy lần lượt (Node 22.12 trở lên):
   ```
   cd studio
   npm install
   npx sanity login
   npm run deploy
   ```
   Tên studio `integritasvulegal` đã đặt sẵn trong `sanity.cli.ts`, nên địa chỉ làm việc sẽ là `https://integritasvulegal.sanity.studio`. Nếu tên đã bị người khác dùng, Sanity sẽ hỏi bạn chọn tên khác.
5. Chuyển bài đang có trong code vào Sanity, để marketing thấy bài mẫu:
   ```
   npx sanity dataset import seed/articles.ndjson production
   ```
6. Trên **Vercel → Project → Settings → Environment Variables** thêm hai biến cho Production (và Preview nếu muốn), rồi **Redeploy**:
   - `SANITY_PROJECT_ID` = Project ID ở bước 2
   - `SANITY_DATASET` = `production`
7. Mời người dùng ở https://www.sanity.io/manage → dự án → **Members**:
   - Tài khoản chung của marketing: vai trò **Editor**.
   - Tài khoản quản trị viên duyệt bài: vai trò **Administrator**.

Chưa đặt hai biến ở bước 6 thì website vẫn chạy bình thường, chỉ dùng bài đang nằm trong code.

## 2. Dành cho marketing (vai trò Editor)

1. Mở `https://integritasvulegal.sanity.studio`, đăng nhập bằng tài khoản chung.
2. Bấm **Bài viết Insights → dấu cộng** để tạo bài mới.
3. Điền ba tab:
   - **Thông tin chung**: đường dẫn (bấm *Generate*), chuyên mục, ngày đăng, ảnh chia sẻ.
   - **English** và **Tiếng Việt**: tiêu đề, câu dẫn, nội dung. **Cả hai ngôn ngữ đều bắt buộc**, thiếu một bên thì bài sẽ không hiện trên web.
   - Ô *Tiêu đề hiển thị trên Google* và *Mô tả hiển thị trên Google* nên điền: tiêu đề dưới 60 ký tự, mô tả 120 đến 160 ký tự. Đây là chữ người dùng thấy trên Google.
4. Khi soạn xong, tích **Đã soạn xong, chờ quản trị viên duyệt** và báo quản trị viên.

Tài khoản Editor **không có nút Publish**, nên bài không thể lên web trước khi được duyệt. Mọi thay đổi tự lưu thành bản nháp.

Nội dung chỉ có các kiểu mà website hiển thị được: đoạn văn, tiêu đề mục, dòng gợi ý chủ đề tiếp theo (chữ nghiêng) và ghi chú pháp lý (chữ nghiêng). Ảnh đại diện (tab *Thông tin chung*) hiện ở thẻ bài và đầu bài viết. Chưa có in đậm, link, danh sách hay ảnh nằm giữa thân bài. Cần thì báo để bổ sung.

## 3. Dành cho quản trị viên (vai trò Administrator)

1. Mở bài đang chờ duyệt, đọc cả hai bản, **kiểm tra kỹ các trích dẫn điều luật**.
2. Bấm **Publish**. Website cập nhật trong khoảng 1 phút, kèm đường dẫn `sitemap.xml` có bài mới cho Google.
3. Gỡ bài: **Unpublish** (bài biến mất khỏi web, bản nháp vẫn còn). Xóa hẳn: **Delete**.
4. Sửa bài đã đăng: sửa rồi bấm **Publish** lại. Nên điền *Ngày cập nhật gần nhất*.

Chỉ cấp vai trò Administrator cho một hai người, vì quyền hạn chế nút Publish chỉ có tác dụng trên màn hình Studio.

## Chạy thử trên máy

```
cd studio
npm run dev      # mở http://localhost:3333
```

Cần thêm `localhost:3333` vào CORS của dự án nếu Sanity yêu cầu (manage → API → CORS origins).

## Ghi chú kỹ thuật

- Website đọc bài bằng `fetch` thẳng tới API công khai của Sanity (`app/content/insights/sanity.ts`), nên website không có thư viện Sanity nào. Chỉ thư mục `studio/` có `sanity`, và thư mục này bị loại khỏi typecheck của website.
- Giá trị `category` trong `schemaTypes/article.ts` phải khớp `CATEGORY_KEYS` trong `app/content/insights/sanity.ts`.
- Bài trong Sanity thay thế bài trong code khi trùng slug. Sau khi đã import, có thể xóa file bài đó khỏi `app/content/insights/`.
