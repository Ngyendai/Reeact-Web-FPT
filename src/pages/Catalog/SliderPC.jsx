import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/pc/item1.jpg";
import img2 from "../../images/pc/item2.jpg";
import img3 from "../../images/pc/item3.jpg";
import img4 from "../../images/pc/item4.jpg";
import img5 from "../../images/pc/item5.jpg";

export default class SliderPC extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
        };
        return (
            <div className="slider__items">
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

                </Slider>
            </div>
        );
    }
}
