import React from "react";
import IconDisplay from "./IconDisplay";

export default function SkillsDisplay(props) {
  return (
    <div className="project-inner-lower">
      <IconDisplay img="/images/React.png" title="React" />
      <IconDisplay img="/images/html.png" title="HTML5" />
      <IconDisplay img="/images/css.png" title="CSS6" />
      <IconDisplay img="/images/git.png" title="Git" />
      <IconDisplay img="/images/javascript.png" title="Javascript" />
      <IconDisplay img="/images/node.png" title="Node" />
      <IconDisplay img="/images/postgresql.png" title="PostgreSQL" />
      <IconDisplay img="/images/express.png" title="Express" />
      <IconDisplay img="/images/socket-io.svg" title="Socket.io" />
    </div>
  );
}
