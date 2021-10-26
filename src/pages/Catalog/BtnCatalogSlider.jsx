import React from "react";
import leftArrow from "../../icons/left.svg";
import rightArrow from "../../icons/right.svg";

export default function BtnCatalogSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide2 next2" : "btn-slide2 prev2"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
