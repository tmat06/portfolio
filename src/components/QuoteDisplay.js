import React from "react";

export default function QuoteDisplay(props) {
  return (
    <div className="introduction-section">
      <p
        style={{
          textAlign: "center"
        }}
      >
        {props.quote}
      </p>
    </div>
  );
}
