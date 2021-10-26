import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "../../component/FE/Grid";
import { FaMedal, FaHandshake } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { ImTablet } from "react-icons/im";
import { BsMouseFill, BsFillKeyboardFill, BsThreeDots } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { CgAppleWatch, CgScreen } from "react-icons/cg";
import { RiHeadphoneFill } from "react-icons/ri";
import { GiCharging, GiPaperBagFolded, GiAppleSeeds } from "react-icons/gi";
import { SiApple, SiAppletv } from "react-icons/si";

const dataAccesApple = [
  {
    id: "1",
    images: <FaMedal />,
    title: "Sản phẩm nổi bật",
  },
  {
    id: "2",
    images: <MdOutlinePhoneIphone />,
    title: "iPhone",
  },
  {
    id: "3",
    images: <ImTablet />,
    title: "iPad",
  },
  {
    id: "4",
    images: <BsLaptop />,
    title: "Macbook",
  },
  {
    id: "5",
    images: <CgAppleWatch />,
    title: "Watch",
  },
  {
    id: "6",
    images: <RiHeadphoneFill />,
    title: "Tai nghe",
  },
  {
    id: "7",
    images: <CgScreen />,
    title: "iMac",
  },
  {
    id: "8",
    images: <GiCharging />,
    title: "Sạc & Cáp",
  },
  {
    id: "9",
    images: <GiPaperBagFolded />,
    title: "Ốp lưng & Bao da",
  },
  {
    id: "10",
    images: <SiApple />,
    title: "Mac Mini",
  },
  {
    id: "11",
    images: <SiAppletv />,
    title: "TV",
  },
  {
    id: "12",
    images: <BsMouseFill />,
    title: "Chuột & Trackpad",
  },
  {
    id: "12",
    images: <BsFillKeyboardFill />,
    title: "Bàn phím",
  },
  {
    id: "12",
    images: <GiAppleSeeds />,
    title: "Air Tag",
  },
  {
    id: "12",
    images: <FaHandshake />,
    title: "Hàng dự án",
  },
  {
    id: "12",
    images: <BsThreeDots />,
    title: "Khác",
  },
];

const AccessoryApple = () => {
  return (
    <div className="accessory">
      <div className="container">
        <Grid col={8} mdCol={4} smCol={3} gap={10}>
          {dataAccesApple.map(item => (
            <div className="accessory_items">
              <div className="accessory_item" key={item.id} id="hover__items">
                <div className="accessory_item_icons">
                  <Link>
                    <span>{item.images}</span>
                  </Link>
                </div>
                <div className="accessory_item_title" id="hover__color">
                  <p>
                    <Link>{item.title}</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};
/* Bước 1*/
AccessoryApple.propTypes = {
  icons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default AccessoryApple;
