import React, { Component } from "react";
import "./form.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      fname: "",
      lname: ""
    };
  }
  handleSubmit = e => {
    e.preventDefualt();
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
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
              <h1 className="">Register</h1>
              <div className="form-group">
                <label for="exampleInputPassword1">username</label>
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
