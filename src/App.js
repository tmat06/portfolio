import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ParallaxDisplay from "./components/ParallaxDisplay";
import ProjectsDisplay from "./components/ProjectsDisplay";

import ReallySmoothScroll from "really-smooth-scroll";

ReallySmoothScroll.shim();

class App extends Component {
  constructor() {
    super();
    this.state = {
      navbar: false
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ParallaxDisplay
          img={"/parallaxFront.jpg"}
          heightSize={"100vh"}
          textColor={"white"}
        />
        <div className="introduction-section">
          <p
            style={{
              textAlign: "center"
            }}
          >
            TBone does things that others are too scared to do...
          </p>
        </div>
        <ProjectsDisplay />
      </div>
    );
  }
}

export default App;
