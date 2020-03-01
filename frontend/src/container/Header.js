import React from "react";

export default function Header() {
  return (
    <div>
      <header
        style={{
          textAlign: "right",
          backgroundColor: "#38556a",
          paddingRight: "10px",
          color: "black"
        }}
      >
        <a href="/" className="nav-link">
          Student
        </a>
      </header>
      <div
        className="header-content"
        style={{
          height: "280px",
          width: "vw100",
          backgroundColor: "#38556a",
          paddingTop: "150px"
        }}
      >
        <div className="container">
          <h1 className="text"> Your Courses</h1>
          <h2>Queens College</h2>
        </div>
      </div>
    </div>
  );
}
