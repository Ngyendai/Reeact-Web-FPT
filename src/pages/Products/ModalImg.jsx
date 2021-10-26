import React, { useState } from "react";
import datamodalSlider from "../../assets/fake-data/Products/data-modal-img";
import BtnModalSlider from "./BtnModalSlider";

function Modalimg({ setOpenModal }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== datamodalSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === datamodalSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(datamodalSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="container__modal__slider">
          <div className="container__modal__slider__img">
            {datamodalSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1
                      ? "slide__modal active-anim"
                      : "slide__modal"
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + `/Imgs/oppo${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BtnModalSlider moveSlide={nextSlide} direction={"next"} />
            <BtnModalSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots container__modal_dots">
              {Array.from({ length: 22 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalimg;
