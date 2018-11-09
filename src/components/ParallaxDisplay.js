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
        className="parallax-title-container"
        style={{
          height: props.heightSize
        }}
      >
        <div
          style={{
            fontSize: props.title ? "55px" : "25px",
            textShadow: props.title ? "2px 2px 2px #333" : "0px #333",
            fontWeight: props.title ? "bold" : "normal",
            letterSpacing: "3px"
          }}
        >
          {props.titleDescription}
        </div>
        <p style={{ fontWeight: "normal", fontSize: "25px", opacity: 0.85 }}>
          {props.subDescription}
        </p>
      </div>
    </Parallax>
  );
}
