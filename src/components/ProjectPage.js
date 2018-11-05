import React from "react";
import NavBar from "./NavBar";

export default class ProjectPage extends React.Component {
  render() {
    console.log(this.props);
    // const { projectName } = this.props.match.params;
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>Header Nav</div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>{this.props.name}</div>
          <div>{this.props.description}</div>
        </div>
        <div
          style={{
            height: "10vh",
            width: "100%",
            marginTop: "15px",
            backgroundColor: "lightgrey",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          Footer
        </div>
      </div>
    );
  }
}
