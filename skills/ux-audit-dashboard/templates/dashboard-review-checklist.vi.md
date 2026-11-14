# Checklist rà soát dashboard

## Dữ liệu và provenance
- [ ] Tổng số và trạng thái khớp báo cáo nguồn trong đúng phạm vi.
- [ ] Không thêm finding, ngày, build, owner, môi trường hay kết quả retest không có nguồn.
- [ ] Hypothesis, opportunity, finding đã xác nhận và NOT_TESTED được phân biệt.
- [ ] Mỗi finding có liên kết tới nguồn và bằng chứng tương ứng khi có.

## Nội dung vận hành
- [ ] Có actual/expected, vị trí, bước tái hiện, tác động, đề xuất và acceptance criteria khi dữ liệu nguồn hỗ trợ.
- [ ] Severity, priority, confidence, fix status và retest status không bị gộp.
- [ ] Gaps, giới hạn và ngày audit chưa biết được hiển thị rõ.
- [ ] Không tạo điểm UX tổng hoặc tuyên bố conformance không có căn cứ.

## Giao diện và kỹ thuật
- [ ] Tìm kiếm, lọc, reset, empty state và chi tiết finding hoạt động.
- [ ] Layout đọc được trên desktop, tablet và mobile.
- [ ] Bàn phím, focus, nhãn điều khiển và status không phụ thuộc màu đã được kiểm.
- [ ] Nội dung nguồn được escape; URL an toàn; CSV chống formula injection.
- [ ] Các export giữ provenance và cùng phạm vi dữ liệu.
- [ ] Ghi rõ build/tests đã chạy và browser/AT chưa kiểm.

## Riêng tư và bàn giao
- [ ] Artifact nhạy cảm đã được lọc/che theo quyền chia sẻ.
- [ ] Audience của hosted dashboard được ghi rõ; local file không có authentication.
- [ ] Nêu dashboard là snapshot, cập nhật thủ công hay kết nối dữ liệu thật.
- [ ] Có hướng dẫn mở/chạy và cấu trúc file rõ ràng.
