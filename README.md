# Quản lý tồn tại lưới điện

Giao diện web 1.12.1 dành cho việc ghi nhận và theo dõi tồn tại lưới điện theo tài khoản, vai trò và phạm vi được cấp.

[Cài Android hoặc iPhone](https://dlthoibinh.github.io/qltt-luoi-dien/install.html) · [Mở ứng dụng](https://dlthoibinh.github.io/qltt-luoi-dien/).

## Cập nhật Android

Từ APK 2.15.0, ứng dụng tự kiểm tra bản mới ở nền và tải sẵn khi có Wi-Fi phù hợp. Người dùng xác nhận cài đặt khi sẵn sàng; không cần gỡ bản cũ. Muốn kiểm tra ngay, chọn **Menu → Cập nhật ứng dụng**. Các bản 2.14.0 trở về trước cần tải và cài đè bản mới từ trang cài đặt một lần.

Mỗi lần phát hành phải đưa lên cùng bộ: APK mới trong `downloads/`, `install.html` và `android-update.json`. Chỉ tải APK lên thì ứng dụng chưa thể nhận biết phiên bản mới. Thông báo cập nhật ghi đúng phiên bản, dung lượng và mã SHA-256 của APK đã ký; không chứa thông tin đăng nhập. Giữ nguyên chữ ký ứng dụng giữa các bản để cài đè được.

## Dùng trên iPhone

Mở đường dẫn bằng Safari, bấm **Chia sẻ → Thêm vào Màn hình chính → Thêm**. Nếu Safari dùng thanh gọn, mở menu của trang để tìm Chia sẻ. Nếu xuất hiện lựa chọn mở dưới dạng ứng dụng web, bật lựa chọn đó.

Mở biểu tượng **Tồn tại lưới điện** ngoài màn hình chính rồi đăng nhập bằng tài khoản do đơn vị cấp. Safari và bản ngoài màn hình chính có thể cần đăng nhập riêng. Hướng dẫn thao tác có ngay ở trang đăng nhập và mục Hướng dẫn của ứng dụng.

Nhân viên ghi nhận bằng iPhone hoặc ứng dụng Android. Trên máy tính, chỉ quản trị hệ thống được tạo mới để kiểm thử; các vai trò khác vẫn xem và thực hiện công việc theo quyền được cấp.

Cần có mạng để tải hoặc gửi hồ sơ. Phần giao diện có thể mở khi mất mạng, nhưng hồ sơ chưa gửi không được tự lưu thành công hay tự gửi nền. Bản iPhone này có hộp thông báo khi mở ứng dụng, chưa có thông báo đẩy khi đã đóng.

## Nội dung kho này

Kho chứa giao diện công khai đã biên dịch, biểu tượng, cấu hình cài màn hình chính và APK Android dùng thử đã ký. Dữ liệu nghiệp vụ và quyền truy cập được xử lý ở hệ thống Google của chủ ứng dụng; tài khoản, mật khẩu, ảnh và khóa dịch vụ không nằm trong kho này.

Service worker chỉ lưu tệp giao diện công khai thuộc ứng dụng. Không lưu hồ sơ hoặc ảnh riêng vào bộ nhớ ngoại tuyến.

Các thư viện đi kèm và thông báo bản quyền nằm trong [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt). Nền bản đồ do OpenStreetMap cung cấp, có ghi nguồn trên bản đồ.
