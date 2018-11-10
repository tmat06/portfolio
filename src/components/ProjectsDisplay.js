import React from "react";
import { Motion, spring } from "react-motion";
import ProjectTile from "./ProjectTile";

export default class ProjectsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      viewAllHover: false,
      projectHeader: "My Latest Works",
      projectSubHeader: "Take a look at some of my projects I've worked on",
      projects: [
        { name: "Restaurant Roulette", img: "/RR.PNG" },
        { name: "MooMoo Farms Delivery", img: "/moomoocow.jpg" },
        { name: "Trivia", img: "" },
        { name: "RoboRace", img: "/Roborace.jpg" }
      ]
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
                <div className="project-header">{this.state.projectHeader}</div>
                <p className="project-sub-header">
                  {this.state.projectSubHeader}
                </p>
              </div>
              {/* Collage */}
              <div className="project-inner-lower">
                {this.state.projects.map((val, i) => {
                  return <ProjectTile key={i} name={val.name} img={val.img} />;
                })}
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
