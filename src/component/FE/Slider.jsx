import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnSlider from "./BtnSlider";
import dataSlider from "../../assets/fake-data/data-slider";
import banner1 from "../../assets/images/slider6.jpg";
import banner2 from "../../assets/images/slider7.jpg";
import img1 from "../../assets/images/slider8.png";
import img2 from "../../assets/images/slider9.png";
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="container_slider">
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/Imgs/slider${index + 1}.jpg`}
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
      <div className="slider_right">
        <div className="slider_right_img">
          <img src={banner1} />
          <img src={banner2} />
        </div>
        <div className="slider_right_products">
          <div className="slider_right_products_title">
            <h4>Thông tin nổi bật</h4>
            <Link>Xem tất cả</Link>
          </div>
          <div className="slider_right_product">
            <div className="slider_right_product_box">
              <div className="slider_right_product_box_img">
                <Link>
                  <img src={img1} />
                </Link>
              </div>
              <div className="slider_right_product_box_des">
                <p>
                  <Link>iPhone 12 Series giảm đến 5 triệu</Link>
                </p>
              </div>
            </div>
            <div className="slider_right_product_box">
              <div className="slider_right_product_box_img">
                <Link>
                  <img src={img2} />
                </Link>
              </div>
              <div className="slider_right_product_box_des">
                <p>
                  <Link>OPPO Reno6 5G tặng loa bluetooth</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
