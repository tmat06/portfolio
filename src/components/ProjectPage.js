import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

//React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "./slick-fixes.css";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page-container">
        <NavBar projectNav={true} />
        <div
          className="project-inner-upper"
          style={{
            marginTop: "80px",
            textAlign: "left"
          }}
        >
          <div className="project-page-container-upper">
            <div>{this.props.name}</div>
            <div style={{ display: "flex" }}>
              <Link to={this.props.before}>
                <div style={{ cursor: "pointer" }}>
                  <img src="/before.png" alt="before icon" />
                </div>
              </Link>
              <Link to={this.props.next}>
                <div style={{ cursor: "pointer" }}>
                  <img src="/next.png" alt="next icon" />
                </div>
              </Link>
            </div>
            {/* //////////////////////////////////////// */}

            {/* <div>{this.props.description}</div> */}
          </div>
          <Slider
            centerMode={true}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div
              style={{
                width: "100%"
              }}
            >
              <img
                src="/IMG_0007.PNG"
                alt="dog"
                style={{
                  borderRadius: "500px",
                  width: "60%",
                  margin: "auto"
                }}
              />
            </div>
            <div
              style={{
                width: "100%"
              }}
            >
              <img
                src="/IMG_0008.PNG"
                alt="dog"
                style={{
                  borderRadius: "500px",
                  width: "60%",
                  margin: "auto"
                }}
              />
            </div>
            <div
              style={{
                width: "100%"
              }}
            >
              <img
                src="/IMG_0009.PNG"
                alt="dog"
                style={{
                  borderRadius: "500px",
                  width: "60%",
                  margin: "auto"
                }}
              />
            </div>
          </Slider>
        </div>
        <Footer />
      </div>
    );
  }
}
