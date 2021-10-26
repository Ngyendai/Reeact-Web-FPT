import React from "react";
import leftArrow from "../../icons/left.svg";
import rightArrow from "../../icons/right.svg";

export default function BtnModalSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide1 next1" : "btn-slide1 prev1"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
