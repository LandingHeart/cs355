import React, { Component } from "react";
import "./form.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      email: "",
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    fetch("/register");
  }
  onSubmit = event => {
    event.preventDefault();

    fetch("/customers")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(data => {
        const size = data.length;

        const obj = {
          id: this.size,
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          password: this.state.password
        };

        fetch("/customers/api/register", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            this.props.setUser(obj);
            this.props.history.push("/");
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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
                height: "450px",
                boxShadow: "3px 3px 5px 6px #ccc",
                marginTop: "20px",
                padding: "30px",
                backgroundColor: "white"
              }}
            >
              <h1 className="">Register</h1>
              <div class="form-group">
                <input
                  type="firstname"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="firstname"
                  placeholder="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="lastname"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="lastname"
                  placeholder="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <div class="form-group">
                <input
                  type="password"
                  placeholder="password"
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
