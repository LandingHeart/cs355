import React, { Component } from "react";
import "./course.css";
import { Link } from "react-router-dom";
export default class Course extends Component {
  render() {
    return (
      <div>
        <h3 className="card-title">Course: {this.props.coursename}</h3>
        <Link to="/questions"> {this.props.coursename} </Link>
      </div>
    );
  }
}
