import React, { Component } from "react";
import Course from "../component/Course";

export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      coursename: []
    };
  }
componentDidMount(){
    fetch('/courses')
        .then()
}
  render() {
    return (
      <div>
        <Course course={this.state.coursename} />
      </div>
    );
  }
}
