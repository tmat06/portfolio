import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectNav: true
    };
  }

  render() {
    return (
      <div className="project-page-container">
        <NavBar projectNav={this.state.projectNav} />
        <div
          className="project-inner-upper"
          style={{
            marginTop: "90px",
            marginBottom: "-15px",
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
        </div>
        <Footer />
      </div>
    );
  }
}
