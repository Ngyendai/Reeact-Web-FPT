import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/moblet/item1.jpg";
import img2 from "../../images/moblet/item2.jpg";
import img3 from "../../images/moblet/item3.jpg";
import img4 from "../../images/moblet/item4.jpg";
import img5 from "../../images/moblet/item5.jpg";
import img6 from "../../images/moblet/item6.jpg";
import img7 from "../../images/moblet/item7.jpg";
import img8 from "../../images/moblet/item8.jpg";
import img9 from "../../images/moblet/item9.jpg";
export default class SliderMoblet extends Component {
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
        </Slider>
      </div>
    );
  }
}
