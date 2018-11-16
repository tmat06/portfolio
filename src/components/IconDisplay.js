import React from "react";
import { Motion, spring } from "react-motion";

export default class IconDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      iconHover: false
    };
  }

  render() {
    return (
      <Motion
        initialStyle={{ iconOpacity: 1, titleOpacity: 0 }}
        style={{
          iconOpacity: this.state.iconHover ? spring(0.5) : spring(1),
          titleOpacity: this.state.iconHover ? spring(0.75) : spring(0)
        }}
      >
        {mot => {
          return (
            <div
              onMouseEnter={() => this.setState({ iconHover: true })}
              onMouseLeave={() => this.setState({ iconHover: false })}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px"
              }}
            >
              <img
                src={this.props.img}
                alt={`${this.props.img} icon`}
                style={{
                  height: "150px",
                  width: "150px",
                  opacity: mot.iconOpacity
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  opacity: mot.titleOpacity,
                  fontSize: "25px"
                }}
              >
                {this.props.title}
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
