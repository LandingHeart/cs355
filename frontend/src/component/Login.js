import React, { Component } from "react";
import Form from "./Form";

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
            <div class="form-group" style={{ marginTop: "50px" }}>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
