import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Developer extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          width: "350px",
          height: "600px",
          marginTop: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div style={{ padding: "30px" }}>
          <div className="">
            <p>
              I am Shinan Liu, I study computer science and I learn many
              different web framworks or rather library to build a website. It
              is really fun
            </p>
            <p>
              This is an email link: contact me
              <a
                href="mailto:shinan0123@gmail.com.com?Subject=Hello%20again"
                target="_top"
              >
                Send Mail
              </a>
            </p>
          </div>
          <form onSumit={this.handleSubmit}>
            <h3 style={{ paddingBottom: "20px" }}> Group Member</h3>
            <div className="form-group">
              <label>Shinan </label>
            </div>
            <div className="form-group">
              <label>Jiahao Chen</label>
            </div>

            <div className="form-group">
              <label>Zifei Song</label>
            </div>

            <div className="form-group">
              <label>Guolong Luo</label>
            </div>

            <Link to="/"> Back </Link>
          </form>
        </div>
      </div>
    );
  }
}
