import React, { Component } from "react";
import NavBar from "./NavBar";
import ParallaxDisplay from "./ParallaxDisplay";
import QuoteDisplay from "./QuoteDisplay";
import ProjectsDisplay from "./ProjectsDisplay";
import SkillsDisplay from "./SkillsDisplay";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      navbar: false
    };
  }

  render() {
    return (
      <div className="home-container">
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

export default Home;
