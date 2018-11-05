import React from "react";
import { Motion, spring } from "react-motion";
import { Link } from "react-router-dom";

export default class ProjectTile extends React.Component {
  constructor() {
    super();
    this.state = {
      tileHover: false
    };
  }
  render() {
    return (
      <Motion
        initialStyle={{ titleOpacity: 0, imageHover: 100 }}
        style={{
          titleOpacity: this.state.tileHover
            ? spring(1, { stiffness: 125, damping: 15 })
            : spring(0, { stiffness: 125, damping: 15 }),
          imageHover: this.state.tileHover
            ? spring(340, { stiffness: 125, damping: 30 })
            : spring(300, { stiffness: 125, damping: 30 }),
          imageOpacity: this.state.tileHover
            ? spring(0.5, { stiffness: 125, damping: 15 })
            : spring(1, { stiffness: 125, damping: 15 })
        }}
      >
        {mot => {
          return (
            <Link to={`/project/${this.props.name}`}>
              <div
                className="project-outer-tile"
                onMouseEnter={() => this.setState({ tileHover: true })}
                onMouseLeave={() => this.setState({ tileHover: false })}
              >
                <div className="project-inner-tile">
                  <img
                    src={this.props.img ? this.props.img : "/duckHead.PNG"}
                    alt={`${this.props.title} title page`}
                    style={{
                      opacity: mot.imageOpacity,
                      height: `${mot.imageHover}px`,
                      width: `${mot.imageHover}px`
                    }}
                  />
                </div>
                <div
                  className="project-inner-title"
                  style={{
                    opacity: mot.titleOpacity
                  }}
                >
                  {this.props.name}
                </div>
              </div>
            </Link>
          );
        }}
      </Motion>
    );
  }
}
