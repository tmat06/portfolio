import React from "react";

export default function QuoteDisplay(props) {
  return (
    <div className="introduction-section">
      <p className="introduction-section-inner">{props.quote}</p>
    </div>
  );
}
