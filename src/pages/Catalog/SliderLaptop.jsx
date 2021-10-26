import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/laptop/item1.jpg";
import img2 from "../../images/laptop/item2.jpg";
import img3 from "../../images/laptop/item3.jpg";
import img4 from "../../images/laptop/item4.jpg";
import img5 from "../../images/laptop/item5.jpg";
import img6 from "../../images/laptop/item6.jpg";
import img7 from "../../images/laptop/item7.jpg";
import img8 from "../../images/laptop/item8.jpg";
import img9 from "../../images/laptop/item9.jpg";
import img10 from "../../images/laptop/item10.jpg";
import img11 from "../../images/laptop/item11.jpg";
export default class SliderLaptop extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div className="slider__items" className="bg_trans">
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
          <div>
            <img src={img8} />
          </div>
          <div>
            <img src={img9} />
          </div>
          <div>
            <img src={img10} />
          </div>
          <div>
            <img src={img11} />
          </div>
        </Slider>
      </div>
    );
  }
}
