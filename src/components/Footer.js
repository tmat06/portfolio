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
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>timmy.a.matthews@gmail.com</div>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>(801) 919-6330</div>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>Provo, Utah USA</div>
      </div>
    </div>
  );
}
