import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ParallaxDisplay from "./components/ParallaxDisplay";
import QuoteDisplay from "./components/QuoteDisplay";
import ProjectsDisplay from "./components/ProjectsDisplay";
import SkillsDisplay from "./components/SkillsDisplay";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
        <QuoteDisplay quote="TBone does things that others are too scared to do..." />

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
              <SkillsDisplay />
            </div>
          }
        />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default App;
