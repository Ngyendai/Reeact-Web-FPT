import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "../../component/FE/Grid";
import { FaMedal, FaSimCard } from "react-icons/fa";
import { RiPhoneCameraFill } from "react-icons/ri";
import { GiBatteryPack } from "react-icons/gi";
import { AiFillApple, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { IoIosWater } from "react-icons/io";
import { BsSpeakerFill } from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";
import { MdOutlineEarbudsBattery, MdBackpack } from "react-icons/md";
import {
  BsFillMouseFill,
  BsFillKeyboardFill,
  BsThreeDots,
} from "react-icons/bs";

const dataAcces = [
  {
    id: "1",
    images: <FaMedal />,
    title: "Điện thoại",
  },
  {
    id: "2",
    images: <RiPhoneCameraFill />,
    title: "Laptop",
  },
  {
    id: "3",
    images: <GiBatteryPack />,
    title: "Apple",
  },
  {
    id: "4",
    images: <FaSimCard />,
    title: "Samsung",
  },
  {
    id: "5",
    images: <AiFillApple />,
    title: "Đồng hồ thông minh",
  },
  {
    id: "6",
    images: <BsFillPhoneFill />,
    title: "Xiaomi",
  },
  {
    id: "7",
    images: <ImHeadphones />,
    title: "Máy cũ",
  },
  {
    id: "8",
    images: <IoIosWater />,
    title: "Tablet",
  },
  {
    id: "9",
    images: <BsSpeakerFill />,
    title: "Điện Gia Dụng",
  },
  {
    id: "10",
    images: <CgCreditCard />,
    title: "Đồng hồ thời trang",
  },
  {
    id: "11",
    images: <MdOutlineEarbudsBattery />,
    title: "Máy tính để bàn",
  },
  {
    id: "12",
    images: <BsFillMouseFill />,
    title: "Máy in",
  },
  {
    id: "12",
    images: <BsFillKeyboardFill />,
    title: "Máy in",
  },
  {
    id: "12",
    images: <MdBackpack />,
    title: "Máy in",
  },
];

const PCAccessory = () => {
  return (
    <div className="accessory">
      <div className="container">
        <Grid col={8} mdCol={4} smCol={3} gap={10}>
          {dataAcces.map(item => (
            <div className="accessory_items">
              <div className="accessory_item" key={item.id}>
                <div className="accessory_item_icons">
                  <Link>
                    <span>{item.images}</span>
                  </Link>
                </div>
                <div className="accessory_item_title">
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
PCAccessory.propTypes = {
  icons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default PCAccessory;
