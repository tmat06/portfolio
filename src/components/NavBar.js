import React from "react";
import { Motion, spring } from "react-motion";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navBarAnim: false,
      homeHover: false,
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
          navHeight: 90,
          navOpacity: 0,
          hamHover: 1,
          iconHover: 1
        }}
        style={{
          navHeight: this.state.navBarAnim
            ? spring(70, { stiffness: 60, damping: 15 })
            : spring(80, { stiffness: 60, damping: 15 }),
          navOpacity: this.state.navBarAnim
            ? spring(1, { stiffness: 60, damping: 15 })
            : spring(0, { stiffness: 60, damping: 15 }),
          homeHover: this.state.homeHover
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
                  opacity: this.props.projectNav ? 1 : mot.navOpacity,
                  backgroundColor: "#191919",
                  height: "100%",
                  width: "100%"
                }}
              />
              <div
                className="nav-bar-container"
                style={{
                  top: -mot.navHeight
                }}
              >
                <div style={{ margin: "0 20px" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => this.setState({ homeHover: true })}
                    onMouseLeave={() => this.setState({ homeHover: false })}
                  >
                    <Link to="/">
                      <img
                        alt="Home Icon"
                        src={this.props.homeIcon}
                        style={{
                          height: mot.navHeight,
                          opacity: mot.homeHover
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ margin: "0 20px" }}>
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
                </div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
