import React from "react";
import { Motion, spring } from "react-motion";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navBarAnim: false,
      emailHover: false,
      githubHover: false,
      linkedInHover: false,
      facebookHover: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    // console.log("trigger top", event.target.scrollingElement.scrollTop);

    // Tracks the scroll of the page
    if (event.target.scrollingElement.scrollTop > 200) {
      this.setState({ navBarAnim: true });
    } else {
      this.setState({ navBarAnim: false });
    }
  };

  render() {
    return (
      <Motion
        initialStyle={{
          navHeight: 100,
          navOpacity: 0,
          hamHover: 1,
          iconHover: 1
        }}
        style={{
          navHeight: this.state.navBarAnim
            ? spring(80, { stiffness: 60, damping: 15 })
            : spring(100, { stiffness: 60, damping: 15 }),
          navOpacity: this.state.navBarAnim
            ? spring(1, { stiffness: 60, damping: 15 })
            : spring(0, { stiffness: 60, damping: 15 }),
          emailHover: this.state.emailHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 }),
          githubHover: this.state.githubHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 }),
          linkedInHover: this.state.linkedInHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 }),
          facebookHover: this.state.facebookHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 })
        }}
      >
        {mot => {
          return (
            <div
              className="nav-container"
              style={{ height: mot.navHeight, zIndex: 2 }}
            >
              <div
                style={{
                  opacity: mot.navOpacity,
                  backgroundColor: "#191919",
                  height: "100%",
                  width: "100%"
                }}
              />
              <div
                style={{
                  position: "relative",
                  top: -mot.navHeight,
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => this.setState({ emailHover: true })}
                  onMouseLeave={() => this.setState({ emailHover: false })}
                >
                  <img
                    alt="Email Menu Icon"
                    src="/email.PNG"
                    style={{ height: mot.navHeight, opacity: mot.emailHover }}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => this.setState({ facebookHover: true })}
                    onMouseLeave={() => this.setState({ facebookHover: false })}
                  >
                    <a
                      href="https://www.facebook.com/timmy.matthews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Facebook Icon"
                        src="/facebook.png"
                        style={{
                          height: mot.navHeight,
                          opacity: mot.facebookHover
                        }}
                      />
                    </a>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => this.setState({ githubHover: true })}
                    onMouseLeave={() => this.setState({ githubHover: false })}
                  >
                    <a
                      href="https://github.com/tmat06"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Github Menu Icon"
                        src="/github.PNG"
                        style={{
                          height: mot.navHeight,
                          opacity: mot.githubHover
                        }}
                      />
                    </a>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => this.setState({ linkedInHover: true })}
                    onMouseLeave={() => this.setState({ linkedInHover: false })}
                  >
                    <a
                      href="https://www.linkedin.com/in/timmy-matthews/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="LinkedIn Menu Icon"
                        src="/linkedin.PNG"
                        style={{
                          height: mot.navHeight,
                          opacity: mot.linkedInHover
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}