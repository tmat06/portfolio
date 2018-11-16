import React from "react";
import { Motion, spring } from "react-motion";

export default class Arrow extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }
  render() {
    return (
      <Motion
        initialStyle={{ arrowOpacity: 0.2 }}
        style={{ arrowOpacity: this.state.hover ? spring(0.6) : spring(0.3) }}
      >
        {mot => {
          return (
            <div
              className={`slide-arrow ${this.props.direction}`}
              onClick={this.props.clickFunction}
              style={{
                opacity: mot.arrowOpacity,
                backgroundImage: `linear-gradient(to ${
                  this.props.direction
                }, black, transparent)`
              }}
              onMouseEnter={() => this.setState({ hover: true })}
              onMouseLeave={() => this.setState({ hover: false })}
            >
              <img
                src={this.props.arrow}
                alt="arrow indicating direction"
                style={{ height: "60px", width: "60px" }}
              />
            </div>
          );
        }}
      </Motion>
    );
  }
}
