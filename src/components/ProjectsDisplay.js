import React from "react";
import { Motion, spring } from "react-motion";

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
          // Outer Container
          return (
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                height: "70vh",
                justifyContent: "center",
                width: "100%"
              }}
            >
              {/* Inner Container */}
              <div style={{ width: "50%" }}>
                {/* Upper Titles */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "20vh"
                  }}
                >
                  <div>
                    <p>LatestWorks</p>
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
                <div style={{ height: "60vh" }}>Collage</div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
