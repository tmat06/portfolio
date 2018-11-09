import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
          <div
            style={{
              width: "100%",
              fontSize: "40px",
              borderBottom: "1px solid #6a6a6a"
            }}
          >
            <div>{this.props.name}</div>
            {/* <div>{this.props.description}</div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
