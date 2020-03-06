import React, { Component } from "react";
import Course from "../component/Course";
import Header from "./Header";

export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: [],
      user: ""
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
    const mycard = this.state.coursename.map(item => {
      return (
        <div
          className="card"
          style={{
            width: "25rem",
            display: "flex",
            flexDirection: "row",
            float: "left",
            margin: "20px"
          }}
        >
          <div>
            <div className="card-body">
              <Course
                key={item.courseid}
                courseid={item.coursename}
                coursename={item.coursename}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Header />
        <div style={{ marginLeft: "55px" }}>
          <hr />
          {mycard}
        </div>
      </div>
    );
  }
}
