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
      navbar: false,
      img1: "/parallaxFront.jpg",
      heightSize1: "100vh",
      textColor: "#fafafa",
      title: true,
      titleDescription: "TIMMY MATTHEWS",
      subDescription: "Full Stack Web Developer",
      quote:
        "Timmy Matthews is a Full Stack Web Developer and a Mentor at DevMountain Provo.  He loves to code and is continually learning new technologies to further fulfill his visions of projects.",
      img2: "/parallaxFront2.jpg",
      heightSize2: "auto"
    };
  }

  render() {
    return (
      <div className="home-container">
        <NavBar />
        <ParallaxDisplay
          img={this.state.img1}
          heightSize={this.state.heightSize1}
          textColor={this.state.textColor}
          title={this.state.title}
          titleDescription={this.state.titleDescription}
          subDescription={this.state.subDescription}
        />
        <QuoteDisplay quote={this.state.quote} />

        <ProjectsDisplay />
        <ParallaxDisplay
          img={this.state.img2}
          heightSize={this.state.heightSize2}
          textColor={this.state.textColor}
          title={this.state.title}
          titleDescription={
            <div className="skills-container">
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
