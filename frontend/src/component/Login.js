import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./form.css";
export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div
            className="container"
            style={{
              width: "30%",
              height: "400px",
              boxShadow: "3px 3px 5px 6px #ccc",
              marginTop: "50px",
              padding: "30px"
            }}
          >
            <h1 className="">Login</h1>
            <div className="form-group" style={{ marginTop: "50px" }}>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/register"> Register </Link>
          </div>
        </form>
      </div>
    );
  }
}
