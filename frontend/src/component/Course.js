import React, { Component } from "react";
import "./course.css";
import { Link } from "react-router-dom";
export default class Course extends Component {
  render() {
    return (
      <div>
        <div
          className="cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "spaceAround"
          }}
        >
          <div
            className="card"
            style={{
              width: "20rem",
              margin: "10px",
              textAlign: "center",
              fontSize: "30px"
            }}
          >
            <h3 className="card-title">Course: {this.props.coursename}</h3>
            <Link to="/questions"> {this.props.coursename} </Link>
          </div>
        </div>
      </div>
    );
  }
}
