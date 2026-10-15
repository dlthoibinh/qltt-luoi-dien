# Quản lý tồn tại lưới điện

Giao diện web 1.21.0 dành cho việc ghi nhận và theo dõi tồn tại lưới điện theo tài khoản, vai trò và phạm vi được cấp.

[Cài Android hoặc iPhone](https://dlthoibinh.github.io/qltt-luoi-dien/install.html) · [Mở ứng dụng](https://dlthoibinh.github.io/qltt-luoi-dien/).

## Cập nhật Android

Từ Android **2.30.0**, mở **Nháp / Chờ gửi** để quản lý nhiều bản ghi trên máy theo tài khoản. **Ghi điểm mới** giữ nháp trước để tiếp tục ghi nhận, kể cả khi lần gửi trước chưa rõ kết quả. Khi có mạng, mở từng nháp và bấm gửi tiếp; giữ nguyên nội dung, ảnh và mã yêu cầu để tránh tạo trùng. Nháp cũ được chuyển sang cách lưu mới khi cài đè. Không tự gửi khi app đóng.

Từ Android 2.29.0 và web 1.21.0, quản trị viên có **Thùng rác** để tìm, xem lý do xóa và khôi phục hồ sơ trong phạm vi quản lý. Khôi phục giữ trạng thái, ảnh và lịch sử, yêu cầu lý do và xác nhận. Hồ sơ đã xóa được chuyển khỏi bảng dữ liệu chính trong lần bảo trì tiếp theo sau khi bản lưu được đối chiếu, kể cả hồ sơ chưa hoàn thành.

Bản Android 2.28.0 và web 1.20.0 giữ nội dung admin đang nhập khi có người khác cập nhật hồ sơ. Phần chưa sửa nhận dữ liệu mới; phần hai người cùng sửa cần được đối chiếu và chọn trước khi lưu. Đóng màn hình có thay đổi chưa lưu sẽ hỏi tiếp tục chỉnh hoặc bỏ thay đổi. Nội dung đang sửa chưa được gửi tự động lên máy chủ.

Từ bản 2.27.0, admin được sửa/xóa tồn tại trong phạm vi được cấp, có xác nhận và lịch sử thao tác. Android và web cùng ghi nhớ tên đăng nhập sau khi đăng nhập thành công; tên vẫn được điền sẵn sau khi đăng xuất hoặc mở lại. Mật khẩu không được lưu cùng tên đăng nhập.

Từ APK 2.15.0, ứng dụng tự kiểm tra bản mới ở nền và tải sẵn khi có Wi-Fi phù hợp. Người dùng xác nhận cài đặt khi sẵn sàng; không cần gỡ bản cũ. Muốn kiểm tra ngay, chọn **Menu → Cập nhật ứng dụng**. Các bản 2.14.0 trở về trước cần tải và cài đè bản mới từ trang cài đặt một lần.

Mỗi lần phát hành phải đưa lên cùng bộ: APK mới trong `downloads/`, `install.html` và `android-update.json`. Chỉ tải APK lên thì ứng dụng chưa thể nhận biết phiên bản mới. Thông báo cập nhật ghi đúng phiên bản, dung lượng và mã SHA-256 của APK đã ký; không chứa thông tin đăng nhập. Giữ nguyên chữ ký ứng dụng giữa các bản để cài đè được.

### Âm thông báo QLTT từ Android 2.25.1

Mở **Chức năng → Trạng thái kết nối → Thông báo trên điện thoại → Dùng âm QLTT**. Có nút **Nghe thử âm QLTT** để nghe mẫu. Máy cài mới mặc định dùng âm QLTT; máy đã cài app giữ âm cũ tới khi chọn. Các nhóm đã tắt hoặc im lặng vẫn được giữ; Android tiếp tục áp dụng âm lượng và Không làm phiền. Âm đã có trong APK, không cần tải hay chép tệp riêng. Web/iPhone không thêm âm thông báo nền.

## Dùng trên iPhone

Mở đường dẫn bằng Safari, bấm **Chia sẻ → Thêm vào Màn hình chính → Thêm**. Nếu Safari dùng thanh gọn, mở menu của trang để tìm Chia sẻ. Nếu xuất hiện lựa chọn mở dưới dạng ứng dụng web, bật lựa chọn đó.

Mở biểu tượng **Tồn tại lưới điện** ngoài màn hình chính rồi đăng nhập bằng tài khoản do đơn vị cấp. Safari và bản ngoài màn hình chính có thể cần đăng nhập riêng. Hướng dẫn thao tác có ngay ở trang đăng nhập và mục Hướng dẫn của ứng dụng.

Nhân viên ghi nhận bằng iPhone hoặc ứng dụng Android. Trên máy tính, chỉ quản trị hệ thống được tạo mới để kiểm thử; các vai trò khác vẫn xem và thực hiện công việc theo quyền được cấp.

Khi mạng yếu, web/iPhone lưu một bản ghi mới đang làm và ảnh đã chuẩn bị riêng theo tài khoản trên thiết bị. Chờ **Đã lưu trên máy** trước khi đóng. Có mạng lại, mở đúng tài khoản rồi bấm **Gửi tiếp / Thử lại**; chỉ **Đã xác nhận trên hệ thống** mới là máy chủ đã nhận. Lần đăng nhập đầu, dữ liệu máy chủ mới và nền bản đồ mới vẫn cần mạng. Web/iPhone chưa có nhiều nháp như Android 2.30.0. Không tự gửi nền. Cài đè bản cập nhật; gỡ app hoặc xóa dữ liệu trình duyệt có thể mất phần chưa gửi. Bản iPhone có hộp thông báo khi mở ứng dụng, chưa có thông báo đẩy khi đã đóng.

## Nội dung kho này

Kho chứa giao diện công khai đã biên dịch, biểu tượng, cấu hình cài màn hình chính và APK Android dùng thử đã ký. Dữ liệu nghiệp vụ và quyền truy cập được xử lý ở hệ thống Google của chủ ứng dụng; tài khoản, mật khẩu, ảnh và khóa dịch vụ không nằm trong kho này.

Service worker chỉ lưu tệp giao diện công khai. Bản nháp và ảnh chưa gửi được lưu riêng trong IndexedDB theo điểm kết nối và tài khoản; không nằm trong bộ nhớ đệm công khai của service worker.

Các thư viện đi kèm và thông báo bản quyền nằm trong [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt). Nền bản đồ do OpenStreetMap cung cấp, có ghi nguồn trên bản đồ.
