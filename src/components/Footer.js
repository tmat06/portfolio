import React from "react";
import { Motion, spring } from "react-motion";

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      fbHover: false,
      githubHover: false,
      linkedInHover: false
    };
  }

  render() {
    console.log(this.state);
    return (
      <Motion
        initialStyle={{ fbHover: 1, githubHover: 1, linkedInHover: 1 }}
        style={{
          fbHover: this.state.fbHover ? spring(0.6) : spring(1),
          githubHover: this.state.githubHover ? spring(0.6) : spring(1),
          linkedInHover: this.state.linkedInHover ? spring(0.6) : spring(1)
        }}
      >
        {mot => {
          return (
            <div
              style={{
                height: "10vh",
                width: "100%",
                marginTop: "15px",
                backgroundColor: "lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  onMouseEnter={() => this.setState({ fbHover: true })}
                  onMouseLeave={() => this.setState({ fbHover: false })}
                >
                  <a
                    href="https://www.facebook.com/timmy.matthews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/fb-black.png"
                      alt="facebook black icon"
                      style={{
                        height: "50px",
                        width: "50px",
                        cursor: "pointer",
                        opacity: mot.fbHover
                      }}
                    />
                  </a>
                </div>
                <div
                  onMouseEnter={() => this.setState({ githubHover: true })}
                  onMouseLeave={() => this.setState({ githubHover: false })}
                >
                  <a
                    href="https://github.com/tmat06"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github-black.png"
                      alt="github black icon"
                      style={{
                        height: "50px",
                        width: "50px",
                        cursor: "pointer",
                        opacity: mot.githubHover
                      }}
                    />
                  </a>
                </div>
                <div
                  onMouseEnter={() => this.setState({ linkedInHover: true })}
                  onMouseLeave={() => this.setState({ linkedInHover: false })}
                >
                  <a
                    href="https://www.linkedin.com/in/timmy-matthews/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/linkedin-black.png"
                      alt="linkedin black icon"
                      style={{
                        height: "50px",
                        width: "50px",
                        cursor: "pointer",
                        opacity: mot.linkedInHover
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
