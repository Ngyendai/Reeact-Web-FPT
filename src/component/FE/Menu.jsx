import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineSmartphone,
  MdLaptopChromebook,
  MdMapsHomeWork,
  MdOutlineTablet,
  MdSimCard,
  MdPayments,
} from "react-icons/md";
import { AiOutlineApple } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import imgmenu1 from "../../images/mn1.jpg";
import imgmenu2 from "../../images/mn2.jpg";
import imgmenu3 from "../../images/mn3.jpg";
import imgmenu4 from "../../images/mn4.jpg";
import imgmenu5 from "../../images/mn5.jpg";
import imgmenu6 from "../../images/mn6.jpg";
import imgmenu7 from "../../images/mn7.jpg";
import imgmenu8 from "../../images/mn8.jpg";
import bannermenu1 from "../../images/bnmenu1.jpg";
import bannermenu2 from "../../images/bnmenu2.jpg";
import bannermenu3 from "../../images/bnmenu3.jpg";
import bannermenu4 from "../../images/bnmenu4.jpg";
import { FaTimes, FaBars } from "react-icons/fa";
const Menu = () => {
  const [click, setClick] = React.useState();
  const handlerClick = () => {
    setClick(!click);
  };
  return (
    <nav className="nav">
      <div className="container">
        <div className="hamburger" onClick={handlerClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav_list active" : "nav_list"}>
          <li>
            <Link title="ĐIỆN THOẠI" to="/dien-thoai-di-dong">
              <MdOutlineSmartphone className="nav_icons" />
              ĐIỆN THOẠI
            </Link>
            <div className="nav_mega_menu">
              <div className="mega_menu_row">
                <div className="mega_menu_column">
                  <header>HÃNG SẢN XUẤT</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Apple (iPhone)</Link>
                    </li>
                    <li>
                      <Link>Samsung</Link>
                    </li>
                    <li>
                      <Link>OPPO</Link>
                    </li>
                    <li>
                      <Link>Xiaomi</Link>
                    </li>
                    <li>
                      <Link>Vivo</Link>
                    </li>
                    <li>
                      <Link>Realme</Link>
                    </li>
                    <li>
                      <Link>Vsmart</Link>
                    </li>
                    <li>
                      <Link>Nokia</Link>
                    </li>
                    <li>
                      <Link>Masstel</Link>
                    </li>
                  </ul>
                  <header>HÃNG SẢN XUẤT</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Apple (iPhone)</Link>
                    </li>
                    <li>
                      <Link>Samsung</Link>
                    </li>
                    <li>
                      <Link>OPPO</Link>
                    </li>
                    <li>
                      <Link>Xiaomi</Link>
                    </li>
                    <li>
                      <Link>Vivo</Link>
                    </li>
                    <li>
                      <Link>Realme</Link>
                    </li>
                    <li>
                      <Link>Vsmart</Link>
                    </li>
                    <li>
                      <Link>Nokia</Link>
                    </li>
                    <li>
                      <Link>Masstel</Link>
                    </li>
                  </ul>
                </div>

                <div className="mega_menu_column">
                  <header>MỨC GIÁ</header>
                  <ul>
                    <li>
                      <Link>Dưới 2 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 2 - 4 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 4 - 7 triệu</Link>
                    </li>

                    <li>
                      <Link>Từ 7 - 13 triệu</Link>
                    </li>
                    <li>
                      <Link>Trên 13 triệu</Link>
                    </li>
                  </ul>
                </div>
                <div className="mega_menu_column">
                  <header>BÁN CHẠY NHẤT</header>

                  <div className="mega_menu_column-products">
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu1} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>Samsung GalaxyA22 5G</Link>
                        </p>
                        <span>5.899.000đ</span>
                      </div>
                    </div>
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu2} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>Xiaomi POCO X3 Pro NFC 8GB-256GB</Link>
                        </p>
                        <span>7.290.000 ₫</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega_menu_column">
                  <div className="mega_menu_column-img">
                    <Link>
                      <img src={bannermenu1} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link title="LAPTOP" to="/Laptop">
              <MdLaptopChromebook className="nav_icons" />
              LAPTOP
            </Link>

            <div className="nav_mega_menu" id="marigin-left">
              <div className="mega_menu_row">
                <div className="mega_menu_column" id="width__mega__menu">
                  <header>HÃNG SẢN XUẤT</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Apple (iPhone)</Link>
                    </li>
                    <li>
                      <Link>Asus</Link>
                    </li>
                    <li>
                      <Link>Dell</Link>
                    </li>
                    <li>
                      <Link>Acer</Link>
                    </li>
                    <li>
                      <Link>HP</Link>
                    </li>
                    <li>
                      <Link>Lenovo</Link>
                    </li>
                    <li>
                      <Link>Microsoft</Link>
                    </li>
                    <li>
                      <Link>MSI</Link>
                    </li>
                    <li>
                      <Link>Avita</Link>
                    </li>
                    <li>
                      <Link>Gigabyte</Link>
                    </li>
                    <li>
                      <Link>Fujitsu</Link>
                    </li>
                  </ul>
                  <header>PHẦN MỀM</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Diệt Virus</Link>
                    </li>
                    <li>
                      <Link>Microsoft Office</Link>
                    </li>
                    <li>
                      <Link>Windows</Link>
                    </li>
                    <li>
                      <Link>Phần mềm khác</Link>
                    </li>
                  </ul>
                  <header>MÁY IN</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>HP</Link>
                    </li>
                    <li>
                      <Link>Canon</Link>
                    </li>
                    <li>
                      <Link>Brother</Link>
                    </li>
                  </ul>
                </div>
                <div className="mega_menu_column">
                  <header>MỨC GIÁ</header>
                  <ul>
                    <li>
                      <Link>Dưới 5 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 5 - 10 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 10 - 15 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 15 - 20 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 20 - 25 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 25 - 30 triệu</Link>
                    </li>
                    <li>
                      <Link>Trên 30 triệu</Link>
                    </li>
                  </ul>
                </div>

                <div className="mega_menu_column" id="border__none">
                  <div className="mega_menu_column-img1">
                    <Link>
                      <img src={bannermenu2} width="100%" height="100%" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link title="APPLE" to="/apple">
              <AiOutlineApple className="nav_icons" />
              APPLE
            </Link>

            <div className="nav_mega_menu" id="marigin-left1">
              <div className="mega_menu_row">
                <div className="mega_menu_column" id="width__mega__menu1">
                  <header>CÁC SẢN PHẨM APPLE</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>iPhone</Link>
                    </li>
                    <li>
                      <Link>iPad</Link>
                    </li>
                    <li>
                      <Link>Macbook</Link>
                    </li>
                    <li>
                      <Link>Apple Watch</Link>
                    </li>
                    <li>
                      <Link>Apple Tai nghe</Link>
                    </li>
                    <li>
                      <Link>iMac</Link>
                    </li>
                    <li>
                      <Link>Mac Mini</Link>
                    </li>
                    <li>
                      <Link>Sạc & Cáp</Link>
                    </li>
                    <li>
                      <Link>Ốp lưng & Bao da</Link>
                    </li>
                    <li>
                      <Link>Apple TV</Link>
                    </li>
                    <li>
                      <Link>Chuột & Trackpad</Link>
                    </li>
                    <li>
                      <Link>Bàn phím</Link>
                    </li>
                    <li>
                      <Link>Air Tag</Link>
                    </li>
                    <li>
                      <Link>Hàng dự án</Link>
                    </li>
                  </ul>
                </div>

                <div className="mega_menu_column" id="width__mega__menu2">
                  <header>BÁN CHẠY NHẤT</header>
                  <div className="mega_menu_column-products">
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu3} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>iPhone 12 64 GB</Link>
                        </p>
                        <span>5.899.000đ</span>
                      </div>
                    </div>
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu4} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>iPhone 12 Pro Max 128GB</Link>
                        </p>
                        <span>7.290.000 ₫</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega_menu_column" id="border__none">
                  <div className="mega_menu_column-img">
                    <Link>
                      <img src={bannermenu1} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link title="HÀNG GIA DỤNG" to="/pc">
              <MdMapsHomeWork className="nav_icons" />
              PC - LINH KIỆN
            </Link>
            <div className="nav_dropdown_menu">
              <ul>
                <li>
                  <Link>PC</Link>
                </li>
                <li>
                  <Link>Phụ kiện</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link title="PHỤ KIỆN" to="/phu-kien">
              <FaHeadphones className="nav_icons" />
              PHỤ KIỆN
            </Link>

            <div className="nav_mega_menu" id="marigin-left2">
              <div className="mega_menu_row">
                <div className="mega_menu_column" id="width__mega__menu1">
                  <header>HÃNG SẢN XUẤT</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Router</Link>
                    </li>
                    <li>
                      <Link>Bao da ốp lưng</Link>
                    </li>
                    <li>
                      <Link>Sạc dự phòng</Link>
                    </li>
                    <li>
                      <Link>Thẻ nhớ</Link>
                    </li>
                    <li>
                      <Link>Phụ kiện Apple</Link>
                    </li>
                    <li>
                      <Link>Miếng dán màn hình</Link>
                    </li>
                    <li>
                      <Link>Loa</Link>
                    </li>
                    <li>
                      <Link>USB - Ổ cứng</Link>
                    </li>
                    <li>
                      <Link>Sạc cáp</Link>
                    </li>
                    <li>
                      <Link>Tai nghe</Link>
                    </li>
                    <li>
                      <Link>Chuột</Link>
                    </li>
                    <li>
                      <Link>Balo - Túi xách</Link>
                    </li>
                    <li>
                      <Link>TV Box</Link>
                    </li>
                    <li>
                      <Link>Phụ kiện khác</Link>
                    </li>
                    <li>
                      <Link>Phụ kiện khẩu trang lọc khí</Link>
                    </li>
                    <li>
                      <Link>Bàn phím</Link>
                    </li>
                  </ul>
                </div>

                <div className="mega_menu_column" id="width__mega__menu3">
                  <header>BÁN CHẠY NHẤT</header>
                  <div className="mega_menu_column-products">
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu5} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>
                            Compo Loa Bluetooth Karaoke i.value F12-65N Nhựa đen
                            + Mic không dây
                          </Link>
                        </p>
                        <span>1.953.000đ</span>
                      </div>
                    </div>
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu6} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>
                            Pin xạc dự phòng Qick Charge Li-polymer 10000mAH
                            UMETRAVAL TRIP 10000
                          </Link>
                        </p>
                        <span>799.000 ₫</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega_menu_column" id="border__none">
                  <div className="mega_menu_column-img1">
                    <Link>
                      <img src={bannermenu3} width="100%" height="100%" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link title="MÁY CŨ RẺ" to="/may-cu-gia-re">
              <BiReset className="nav_icons" />
              MÁY CŨ GIÁ RẺ
            </Link>
          </li>
          <li>
            <Link title="TABLET" to="/may-tinh-bang">
              <MdOutlineTablet className="nav_icons" />
              TABLET
            </Link>

            <div className="nav_mega_menu" id="margin-left3">
              <div className="mega_menu_row">
                <div className="mega_menu_column">
                  <header>HÃNG SẢN XUẤT</header>
                  <ul className="mega_menu">
                    <li>
                      <Link>Apple (iPad)</Link>
                    </li>
                    <li>
                      <Link>Samsung</Link>
                    </li>
                    <li>
                      <Link>Masstel</Link>
                    </li>
                    <li>
                      <Link>Lenovo</Link>
                    </li>
                    <li>
                      <Link>Xiaomi</Link>
                    </li>
                  </ul>
                </div>
                <div className="mega_menu_column">
                  <header>MỨC GIÁ</header>
                  <ul>
                    <li>
                      <Link>Dưới 2 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 2 - 5 triệu</Link>
                    </li>
                    <li>
                      <Link>Từ 5 - 8 triệu</Link>
                    </li>

                    <li>
                      <Link>Trên 8 triệu</Link>
                    </li>
                  </ul>
                </div>
                <div className="mega_menu_column">
                  <header>BÁN CHẠY NHẤT</header>
                  <div className="mega_menu_column-products">
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu7} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>iPad Mini5 7.9 Wifi 64 GB</Link>
                        </p>
                        <span>10.999.000đ</span>
                      </div>
                    </div>
                    <div className="mega_menu_column-product">
                      <div className="mega_menu_column_product-img">
                        <Link>
                          <img src={imgmenu8} />
                        </Link>
                      </div>
                      <div className="mega_menu_column-product-infomation">
                        <p>
                          <Link>Samsung Galaxy Tab S5 FE</Link>
                        </p>
                        <span>13.990.000 ₫</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega_menu_column">
                  <div className="mega_menu_column-img">
                    <Link>
                      <img src={bannermenu4} width="100%" height="100%" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link title="SIM & THẺ" to="/sim-so-dep">
              <MdSimCard className="nav_icons" />
              SIM & THẺ
            </Link>
          </li>
          <li>
            <Link title="KHUYẾN MÃI" to="/khuyen-mai">
              <BsGearWide className="nav_icons" />
              KHUYẾN MÃI
            </Link>
            <div className="nav_dropdown_menu">
              <ul>
                <li>
                  <Link>Thông tin trao thưởng</Link>
                </li>
                <li>
                  <Link>Tất cả khuyến mãi</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link title="TRẢ GÓP 0%" to="/tra-gop-uu-dai">
              <MdPayments className="nav_icons" />
              TRẢ GÓP 0%
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
