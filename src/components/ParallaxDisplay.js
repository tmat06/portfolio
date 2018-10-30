import React from "react";
import { Parallax } from "react-parallax";

export default function ParallaxDisplay(props) {
  return (
    <Parallax
      strength={700}
      bgImage={props.img}
      bgImageAlt="Pic for Parallax"
      style={{
        color: props.textColor,
        display: "flex",
        height: props.heightSize,
        justifyContent: "center",
        width: "100%"
      }}
    >
      <div
        style={{
          height: props.heightSize,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Tbone
      </div>
    </Parallax>
  );
}
