import React from "react";
import IconDisplay from "./IconDisplay";

export default class SkillsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { img: "/images/React.png", title: "React" },
        { img: "/images/html.png", title: "HTML5" },
        { img: "/images/css.png", title: "CSS6" },
        { img: "/images/git.png", title: "Git" },
        { img: "/images/javascript.png", title: "Javascript" },
        { img: "/images/node.png", title: "Node" },
        { img: "/images/postgresql.png", title: "PostgreSQL" },
        { img: "/images/express.png", title: "Express" },
        { img: "/images/socket-io.svg", title: "Socket.io" },
        { img: "/images/redux.png", title: "Redux" },
        { img: "/images/RegEx.png", title: "RegEx" }
      ]
    };
  }
  render() {
    return (
      <div className="project-inner-lower">
        {this.state.skills.map((val, i) => {
          return <IconDisplay key={i} img={val.img} title={val.title} />;
        })}
      </div>
    );
  }
}
