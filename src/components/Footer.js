import React from "react";

export default function Footer() {
  return (
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="footer-text">
          <div>timmy.a.matthews@gmail.com</div>
          <div>(801) 919-6330</div>
          <div>Provo, Utah USA</div>
        </div>
      </div>
    </div>
  );
}
