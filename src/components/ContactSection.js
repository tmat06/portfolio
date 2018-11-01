import React from "react";
import { Motion, spring } from "react-motion";

export default class ContactSection extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-container-upper-header">
          Let's get in Contact
        </div>
        {/* Dog Animation */}
        <div className="dog-frame">
          <div className="dog-head">
            <div className="dog-ears" style={{ transform: "rotate(20deg)" }} />
            <div className="dog-face">
              <div className="dog-head-eyes-row">
                <div className="dog-head-eye">
                  <div className="dog-head-eye-pupil" />
                </div>
                <div className="dog-head-eye">
                  <div className="dog-head-eye-pupil" />
                </div>
              </div>
              <div className="dog-head-mouth">
                <div className="dog-head-nose" />
                <div className="dog-head-mouth-smile" />
              </div>
            </div>
            <div className="dog-ears" style={{ transform: "rotate(-20deg)" }} />
          </div>
          <div className="dog-body">
            <div className="dog-body-collar">
              <div
                className="dog-body-collar-flap"
                style={{
                  WebkitTransform: "skew(-50deg)",
                  MozTransform: "skew(-50deg)",
                  OTransform: "skew(-50deg)",
                  transform: "rotate(30deg)"
                }}
              />
              <div
                className="dog-body-collar-flap"
                style={{
                  WebkitTransform: "skew(50deg)",
                  MozTransform: "skew(50deg)",
                  OTransform: "skew(50deg)",
                  transform: "rotate(-30deg)"
                }}
              />
            </div>
            <div className="dog-body-knot" />
            <div className="dog-body-tie" />
          </div>
          <div
            className="dog-paws"
            style={{
              left: 70,
              bottom: -5,
              transform: "rotate(25deg)"
            }}
          >
            <div className="dog-claw" />
            <div className="dog-claw" />
            <div className="dog-claw" />
          </div>
          <div
            className="dog-paws"
            style={{
              right: 70,
              bottom: -5,
              transform: "rotate(-25deg)"
            }}
          >
            <div className="dog-claw" />
            <div className="dog-claw" />
            <div className="dog-claw" />
          </div>
        </div>
        {/* End of Dog Animation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div>Input</div>
          <div>Input</div>
        </div>
      </div>
    );
  }
}
