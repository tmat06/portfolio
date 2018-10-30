import React from "react";
import { Motion, spring } from "react-motion";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navBarAnim: false,
      hamHover: false
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
          hamHover: this.state.hamHover
            ? spring(0.6, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 }),
          iconHover: this.state.iconHover
            ? spring(0.8, { stiffness: 125, damping: 15 })
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
                  backgroundColor: "rgb(75, 70, 70)",
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
                  style={{ marginLeft: 10, cursor: "pointer" }}
                  onMouseEnter={() => this.setState({ iconHover: true })}
                  onMouseLeave={() => this.setState({ iconHover: false })}
                >
                  <img
                    alt="Tim Matthews Icon"
                    src="/duckHead.PNG"
                    style={{ height: mot.navHeight, opacity: mot.iconHover }}
                  />
                </div>
                <div
                  style={{ marginRight: 10, cursor: "pointer" }}
                  onMouseEnter={() => this.setState({ hamHover: true })}
                  onMouseLeave={() => this.setState({ hamHover: false })}
                >
                  <img
                    alt="Hamburger Menu Icon"
                    src="/hamburger.PNG"
                    style={{ height: mot.navHeight, opacity: mot.hamHover }}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
