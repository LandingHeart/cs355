import React, { Component } from "react";
import Course from "../component/Course";

export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: []
    };
  }
  componentDidMount() {
    fetch("/courses")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log("error");
        }
      })
      .then(coursename => this.setState({ coursename }))
      .catch(err => console.log(err));
  }
  render() {
    const names = this.state.coursename.map(item => {
      return (
        <Course
          key={item.courseid}
          courseid={item.coursename}
          coursename={item.coursename}
        />
      );
    });

    return <div>{names}</div>;
  }
}
