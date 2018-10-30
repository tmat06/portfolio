import React from "react";
import { Motion, spring } from "react-motion";
import ProjectTile from "./ProjectTile";

export default class ProjectsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      viewAllHover: false
    };
  }
  render() {
    return (
      <Motion
        initialStyle={{ viewAllOpacity: 1 }}
        style={{
          viewAllOpacity: this.state.viewAllHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 })
        }}
      >
        {mot => {
          return (
            // Outer Container
            <div className="project-outer-container">
              {/* Inner Container */}
              <div className="project-inner-upper">
                {/* Upper Titles */}
                <div>
                  <div style={{ fontSize: "40px" }}>My Latest Works</div>
                  <p>Here's my jazz</p>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => this.setState({ viewAllHover: true })}
                  onMouseLeave={() => this.setState({ viewAllHover: false })}
                >
                  <img
                    src={"/view-all-icon.png"}
                    alt="view all icon"
                    style={{ opacity: mot.viewAllOpacity }}
                  />
                </div>
              </div>
              {/* Collage */}
              <div className="project-inner-lower">
                <ProjectTile name={"Restaurant Roulette"} img={""} />
                <ProjectTile name={"Trivia"} img={""} />
                <ProjectTile name={"RoboRace"} img={""} />
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
