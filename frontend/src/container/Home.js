import React, { Component } from "react";
import "./home.css";
import Routes from "../Routes";
import Navbar from "../component/Navbar";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Routes />
      </div>
    );
  }
}
