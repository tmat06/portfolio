import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion";

import Carousel from "./Carousel";

export default class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectNav: true,
      homeIcon: "/home.png"
    };
  }

  render() {
    return (
      <div className="project-page-container">
        <NavBar
          projectNav={this.state.projectNav}
          homeIcon={this.state.homeIcon}
        />
        <div
          className="project-inner-upper"
          style={{
            marginTop: "50px",
            // marginBottom: "-55px",
            textAlign: "left"
          }}
        >
          <div className="project-page-container-upper">
            <div className="project-page-title">{this.props.name}</div>
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
          </div>
          {/* //////////////////////////////////////// */}
        </div>
        <Carousel images={this.props.images} />
        <div className="project-page-description-container">
          <div className="project-page-description-display">
            <div className="project-page-description-skills">
              {this.props.skills}
            </div>
            <div>{this.props.description}</div>
          </div>
          <Motion
            initialStyle={{ siteHover: 1, githubHover: 1 }}
            style={{
              siteHover: this.state.siteHover ? spring(0.6) : spring(1),
              githubHover: this.state.githubHover ? spring(0.6) : spring(1)
            }}
          >
            {mot => {
              return (
                <div className="project-page-icons">
                  <div
                    onMouseEnter={() => this.setState({ siteHover: true })}
                    onMouseLeave={() => this.setState({ siteHover: false })}
                    style={{
                      cursor: "pointer",
                      height: "50px",
                      width: "50px",
                      opacity: mot.siteHover
                    }}
                  >
                    <a
                      href={this.props.siteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={"/site.png"}
                        alt="world wide web icon"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </a>
                  </div>
                  <div
                    onMouseEnter={() => this.setState({ githubHover: true })}
                    onMouseLeave={() => this.setState({ githubHover: false })}
                    style={{
                      cursor: "pointer",
                      height: "50px",
                      width: "50px",
                      opacity: mot.githubHover,
                      margin: "30px 0"
                    }}
                  >
                    <a
                      href={this.props.githubRepoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={"/github.svg"}
                        alt="github icon"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </a>
                  </div>
                </div>
              );
            }}
          </Motion>
        </div>
        <Footer />
      </div>
    );
  }
}
