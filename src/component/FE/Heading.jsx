import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "./Grid";
import img1 from "../../images/hd1.png";
import img2 from "../../images/hd2.png";
import img3 from "../../images/hd3.png";
import img4 from "../../images/hd4.png";
import img5 from "../../images/hd5.png";
import img6 from "../../images/hd6.png";
import img7 from "../../images/hd7.png";
import img8 from "../../images/hd8.png";
import img9 from "../../images/hd9.png";
import img10 from "../../images/hd10.png";
import img11 from "../../images/hd11.png";
import img12 from "../../images/hd12.png";

const dataHeading = [
  {
    id: "1",
    images: img1,
    title: "Điện thoại",
  },
  {
    id: "2",
    images: img2,
    title: "Laptop",
  },
  {
    id: "3",
    images: img3,
    title: "Apple",
  },
  {
    id: "4",
    images: img4,
    title: "Samsung",
  },
  {
    id: "5",
    images: img5,
    title: "Đồng hồ thông minh",
  },
  {
    id: "6",
    images: img6,
    title: "Xiaomi",
  },
  {
    id: "7",
    images: img7,
    title: "Máy cũ",
  },
  {
    id: "8",
    images: img8,
    title: "Tablet",
  },
  {
    id: "9",
    images: img9,
    title: "Điện Gia Dụng",
  },
  {
    id: "10",
    images: img10,
    title: "Đồng hồ thời trang",
  },
  {
    id: "11",
    images: img11,
    title: "Máy tính để bàn",
  },
  {
    id: "12",
    images: img12,
    title: "Máy in",
  },
];

const Heading = () => {
  return (
    <div className="heading">
      <div className="container">
        <Grid col={6} mdCol={3} smCol={3} gap={10}>
          {dataHeading.map(item => (
            <div className="heading_items">
              <div className="heading_item" key={item.id}>
                <div className="heading_item_img">
                  <Link>
                    <img src={item.images} />
                  </Link>
                </div>
                <div className="heading_item_title">
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
Heading.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Heading;
