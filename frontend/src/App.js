import React from "react";
import Home from "./container/Home";
import Navbar from "./component/Navbar";
import "./container/home.css";
import Routes from "./Routes";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
