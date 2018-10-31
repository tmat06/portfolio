import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ParallaxDisplay from "./components/ParallaxDisplay";
import ProjectsDisplay from "./components/ProjectsDisplay";
import IconDisplay from "./components/IconDisplay";

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
          title={true}
          titleDescription={"Tbone"}
          subDescription={"The Man with the Plan"}
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
        <ParallaxDisplay
          img={"/parallaxFront2.jpg"}
          heightSize={"auto"}
          textColor={"white"}
          title={true}
          titleDescription={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "70vh"
              }}
            >
              <div>Skills</div>
              <div className="project-inner-lower">
                <IconDisplay img="/images/React.png" title="React" />
                <IconDisplay img="/images/html.png" title="HTML5" />
                <IconDisplay img="/images/css.png" title="CSS6" />
                <IconDisplay img="/images/git.png" title="Git" />
                <IconDisplay img="/images/javascript.png" title="Javascript" />
                <IconDisplay img="/images/node.png" title="Node" />
                <IconDisplay img="/images/postgresql.png" title="PostgreSQL" />
                <IconDisplay img="/images/express.png" title="Express" />
                <IconDisplay img="/images/socket-io.svg" title="Socket.io" />
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
