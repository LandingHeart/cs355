import React from "react";
import Navbar from "../component/Navbar";
export default function Home() {
  return (
    <div className="body">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="img">
        <div className="welcome-text">
          {" "}
          <p className = "p-text"> WELCOME TO QUIZY</p>
        </div>
      </div>
    </div>
  );
}
