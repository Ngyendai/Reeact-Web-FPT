import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer_row">
          <div className="footer_column">
            <Link className="footer_links">Gioi thiệu về công ty</Link>
            <Link className="footer_links">Câu hỏi thường gặp mua hàng</Link>
            <Link className="footer_links">Hướng dẫn đặt hàng</Link>
            <Link className="footer_links">Chính sách bảo mật</Link>
            <Link className="footer_links">Quy chế hoạt động</Link>
            <Link className="footer_links">Kiểm tra hóa đơn điện tử</Link>
            <Link className="footer_links">Tra cứu thông tin bảo hành</Link>
          </div>
          <div className="footer_column">
            <Link className="footer_links">Tin tuyển dụng</Link>
            <Link className="footer_links">Tin khuyến mãi</Link>
            <Link className="footer_links">Hướng dẫn mua online</Link>
            <Link className="footer_links">Hướng dẫn mua trả góp</Link>
            <Link className="footer_links">Ưu đãi doanh nghiệp</Link>
            <Link className="footer_links">Chính sách trả góp</Link>
          </div>
          <div className="footer_column">
            <Link className="footer_links">Hệ thông của hàng</Link>
            <Link className="footer_links">Hệ thống bảo hành</Link>
            <Link className="footer_links">Bán hàng doanh nghiệp</Link>
            <Link className="footer_links">Kiểm tra hàng Apple chính hãng</Link>
            <Link className="footer_links">Gioi thiệu máy đổi trả</Link>
            <Link className="footer_links">Chính sách đổi trả</Link>
          </div>
          <div className="footer_column mt">
            <div className="footer_title">Tư vấn mua hàng (miễn phí)</div>
            <Link className="footer_links red">1800 6601 (Nhánh 1)</Link>
            <div className="footer_title">Hỗ trợ kỹ thuật</div>
            <Link className="footer_links red">1800 6601 (Nhánh 2)</Link>
          </div>
          <div className="footer_column mt">
            <div className="footer_title">
              Góp ý, khiếu nại dịch vụ (8h00 - 22h00)
            </div>
            <Link className="footer_links red">1800 6601 (Nhánh 2)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
