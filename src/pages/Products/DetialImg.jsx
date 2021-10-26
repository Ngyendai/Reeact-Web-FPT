import React from "react";
import modalMoblet from "../../assets/fake-data/Products/data-Modal-Moblet";
import { Link } from "react-router-dom";
export const Modalimg = ({ modal, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: modal ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: modal ? "1" : "0",
      }}
    >
      <div className="modal_back">
        <div className="modal-content">
          {modalMoblet.map((item, index) => (
            <div>
              {" "}
              <div className="modal-header">
                <h2>Chi tiết thông số kỹ thuât {item.title}</h2>
                <span onClick={close} className="close-modal-btn">
                  x
                </span>
              </div>
              <div className="modal-body">
                <div className="container__modal" key={item.id}>
                  <div className="container__modal__img">
                    <img src={item.images} alt="" />
                  </div>

                  <div className="container__modal__infomation">
                    <div className="container__modal__infomation__product">
                      <header>Thông tin hàng hóa</header>
                      <ul>
                        <li>
                          <span>Thương hiệu:</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Thời gian ra mắt:</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Series:</span> {item.series}
                        </li>
                        <li>
                          <span> Thời gian bảo hành:</span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Xuất xứ:</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>
                    <div className="container__modal__infomation__product">
                      <header>Thiết kế & Trọng lượng</header>
                      <ul>
                        <li>
                          <span>Width (mm):</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Tỷ lệ diện tích sử dụng màn hình: </span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Depth (mm):</span> {item.series}
                        </li>
                        <li>
                          <span>Chuẩn kháng nước/ Bụi bẩn:</span>{" "}
                          {item.timebaohanh}
                        </li>
                        <li>
                          <span>Height (mm):</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Chất liệu:</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Trọng lượng: </span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Bộ xử lý</header>
                      <ul>
                        <li>
                          <span>Phiên bản</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Type</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Số nhân CPU</span> {item.series}
                        </li>
                        <li>
                          <span>Tốc độ tối đa</span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>64 Bits</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Màn hình</header>
                      <ul>
                        <li>
                          <span>Công nghệ màn hình</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Kích thước</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Chuẩn màn hình</span> {item.series}
                        </li>
                        <li>
                          <span>Độ phân giải</span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Màu màn hình</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Chất liệu mặt kính</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Tỷ lệ tương phản</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Loại cảm ứng</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Độ sáng tối đa</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Mật độ điểm ảnh</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Tần số quét</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Độ phủ màu</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Tỷ lệ khung hình</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Graphics</header>
                      <ul>
                        <li>
                          <span>GPU</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Bộ nhớ RAM</header>
                      <ul>
                        <li>
                          <span>RAM </span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>RAM Type</span>
                          {item.timeramat}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>ANTUTU</header>
                      <ul>
                        <li>
                          <span>ANTUTU</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Lưu trữ</header>
                      <ul>
                        <li>
                          <span>Bộ nhớ trong</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Danh bạ lưu trữ </span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Thẻ nhớ ngoài</span> {item.series}
                        </li>
                        <li>
                          <span>Hổ trợ thẻ nhớ tối đa</span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Bộ nhớ còn lại</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Camera sau</header>
                      <div className="container__modal__infomation__product__mega">
                        <p>{item.thuonghieu}</p>
                        <div className="container__modal__infomation__product__mega__item">
                          <ul>
                            <li>
                              <span>Standard</span>
                              <Link>{item.thuonghieu}</Link>
                            </li>
                            <li>
                              <span>Resolution</span>
                              {item.timeramat}
                            </li>
                            <li>
                              <span>Type </span> {item.series}
                            </li>
                            <li>
                              <span> Aperture </span> {item.timebaohanh}
                            </li>
                            <li>
                              <span>Pixel size </span>
                              {item.xuatxu}
                            </li>
                            <li>
                              <span>ISO </span>
                              {item.xuatxu}
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Wide</span>
                              <Link>{item.thuonghieu}</Link>
                            </li>
                            <li>
                              <span>Resolution</span>
                              {item.timeramat}
                            </li>
                            <li>
                              <span>Type </span> {item.series}
                            </li>
                            <li>
                              <span> Aperture </span> {item.timebaohanh}
                            </li>
                            <li>
                              <span>Pixel size </span>
                              {item.xuatxu}
                            </li>
                            <li>
                              <span>ISO </span>
                              {item.xuatxu}
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Macro lens</span>
                              <Link>{item.thuonghieu}</Link>
                            </li>
                            <li>
                              <span>Resolution</span>
                              {item.timeramat}
                            </li>
                            <li>
                              <span>Type </span> {item.series}
                            </li>
                            <li>
                              <span> Aperture </span> {item.timebaohanh}
                            </li>
                            <li>
                              <span>Pixel size </span>
                              {item.xuatxu}
                            </li>
                            <li>
                              <span>ISO </span>
                              {item.xuatxu}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span>Quay phim 4K </span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Quay phim FullHD </span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Quay phim HD</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                      <ul>
                        <li>Thông tin thêm </li>
                        <li>
                          <div className="container__modal__infomation__product__item">
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Selfie</header>
                      <div className="container__modal__infomation__product__mega">
                        <p>{item.thuonghieu}</p>
                        <div className="container__modal__infomation__product__mega__item">
                          <ul>
                            <li>
                              <span>Standard</span>
                              <Link>{item.thuonghieu}</Link>
                            </li>
                            <li>
                              <span>Resolution</span>
                              {item.timeramat}
                            </li>
                            <li>
                              <span>Type </span> {item.series}
                            </li>
                            <li>
                              <span> Aperture </span> {item.timebaohanh}
                            </li>
                            <li>
                              <span>Pixel size </span>
                              {item.xuatxu}
                            </li>
                            <li>
                              <span>ISO </span>
                              {item.xuatxu}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span>Quay phim 4K </span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Quay phim FullHD </span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Quay phim HD</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                      <ul>
                        <li>Thông tin thêm </li>
                        <li>
                          <div className="container__modal__infomation__product__item">
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Cảm biến</header>
                      <ul>
                        <li>
                          <span>Cảm biến tiệm cận:</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Cảm biến la bàn: </span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Con quay hồi chuyển: </span> {item.series}
                        </li>
                        <li>
                          <span>Cảm biến ánh sáng: </span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Cảm biến trọng lực: </span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Hồng ngoại: </span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Bảo mật</header>
                      <ul>
                        <li>
                          <span>Mở khóa vân tay: </span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Nhận diện khuôn mặt:</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Quét mống mắt: </span> {item.series}
                        </li>
                        <li>
                          <span>Cảm biến vân tay dưới màn hình: </span>{" "}
                          {item.timebaohanh}
                        </li>
                        <li>
                          <span>Mở khóa bằng mật mã:</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Others</header>
                      <ul>
                        <li>
                          <span>Làm mát:</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Thông báo LED:</span>
                          {item.timeramat}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Giao tiếp & kết nối</header>
                      <ul>
                        <li>
                          <span>Số khe SIM </span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Loại SIM</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Băng tần 4G </span> {item.series}
                        </li>
                        <li>
                          <span>Băng tần 5G </span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Wi-Fi</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>GPS</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Bluetooth</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Cổng Sạc</span>
                          {item.xuatxu}
                        </li>
                        <li>
                          <span>Audio Jack</span>
                          {item.xuatxu}
                        </li>
                      </ul>
                      <ul>
                        <li>Thông tin thêm </li>
                        <li>
                          <div className="container__modal__infomation__product__item">
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                            <p>{item.thuonghieu}</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Thông tin pin & Sạc</header>
                      <ul>
                        <li>
                          <span>Dung lượng pin</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Loại Pin</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Công nghệ pin </span> {item.series}
                        </li>
                        <li>
                          <span>Khác</span> {item.timebaohanh}
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Hệ điều hành</header>
                      <ul>
                        <li>
                          <span>Version</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="container__modal__infomation__product">
                      <header>Phụ kiện trong hộp</header>
                      <ul>
                        <li>
                          <span>Sách hướng dẫn sử dụng</span>
                          <Link>{item.thuonghieu}</Link>
                        </li>
                        <li>
                          <span>Cáp</span>
                          {item.timeramat}
                        </li>
                        <li>
                          <span>Sạc </span> {item.series}
                        </li>
                        <li>
                          <span>Tai nghe</span> {item.timebaohanh}
                        </li>
                        <li>
                          <span>Ốp lưng</span> {item.timebaohanh}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modalimg;
