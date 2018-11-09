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
                <div className="project-header">My Latest Works</div>
                <p className="project-sub-header">
                  Take a look at some of my projects I've worked on
                </p>
              </div>
              {/* Collage */}
              <div className="project-inner-lower">
                <ProjectTile name={"Restaurant Roulette"} img={"/RR.PNG"} />
                <ProjectTile
                  name={"MooMoo Farms Delivery"}
                  img={"/moomoocow.jpg"}
                />
                <ProjectTile name={"Trivia"} img={""} />
                <ProjectTile name={"RoboRace"} img={"/Roborace.jpg"} />
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
