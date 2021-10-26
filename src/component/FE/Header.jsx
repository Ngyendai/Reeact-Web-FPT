import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../../images/logo.png";
import { BiSearch } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiWaterDrop } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Grid col={3} mdCol={2} smCol={1} gap={10}>
          <div className="header_logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header_search">
            <input
              type="text"
              id=""
              placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
            />
            <BiSearch className="header_icons_search" />
          </div>
          <div className="header_text">
            <Grid col={3} mdCol={2} smCol={1} gap={10}>
              <div className="header_text-left">
                <p>
                  <AiFillFileText className="header_icons header_icons_left" />
                  <br></br>
                  <Link>Thông tin hay</Link>
                </p>
              </div>
              <div className="header_text-center">
                <p>
                  <HiOutlineLightBulb className="header_icons" />
                  <GiWaterDrop className="header_icons_size" />
                  <br></br>
                  <Link>Thu hộ điện, nước</Link>
                </p>
              </div>
              <div className="header_text-right">
                <p>
                  <IoIosCart className="header_icons" id="header_icons_left" />
                  <br></br>
                  <Link to="/cart">Gio hàng</Link>
                </p>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
