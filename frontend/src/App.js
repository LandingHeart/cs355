import React from "react";
import Navbar from "./component/Navbar";
import "./container/home.css";
import Routes from "./Routes";
import "./component/questionDisplay.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
