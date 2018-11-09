import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
                  <img src="/before.png" />
                </div>
              </Link>
              <Link to={this.props.next}>
                <div style={{ cursor: "pointer" }}>
                  <img src="/next.png" />
                </div>
              </Link>
            </div>
            {/* <div>{this.props.description}</div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
