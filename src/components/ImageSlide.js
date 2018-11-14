import React from "react";
import Arrow from "./Arrow";

export default function ImageSlide(props) {
  return (
    <div
      className="image-slider"
      style={{
        backgroundImage: `url(${props.url})`
      }}
    >
      <Arrow
        direction="right"
        clickFunction={props.previousSlide}
        arrow={"/before-white.png"}
      />
      <Arrow
        direction="left"
        clickFunction={props.nextSlide}
        arrow={"/next-white.png"}
      />
    </div>
  );
}
