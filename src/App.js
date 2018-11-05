import React, { Component } from "react";
import "./App.css";
import routes from "./routes.js";

import ReallySmoothScroll from "really-smooth-scroll";

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
