import React, { Component } from "react";
import "./addQuestion.css";
export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      user: null,
      title: "",
      a: "",
      b: "",
      c: "",
      d: "",
      ans: "",
      id: 3,
      count: 0,
      intervalId: ""
    };
  }


  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  handlSubmit = e => {
    e.preventDefault();
    this.addNewQuestions();
  };
  async addNewQuestions() {
    const obj = {
      title: this.state.title,
      a: this.state.a,
      b: this.state.b,
      c: this.state.c,
      d: this.state.d,
      ans: this.state.ans,
      id: this.state.count
    };
    fetch("/questions/add", {
      method: "POST",
      body: JSON.stringify(obj), //add the obj
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        let json = resp.json();
        alert("success");
        console.log(json);
      })
      .catch(err => console.log(err));
  }
  catch(err) {
    console.log(err);
  }

  render() {
    let { title, a, b, c, d, ans } = this.state;
    return (
      <div>
        <div className="container">
          <form type="submit" onSubmit={this.handlSubmit}>
            <div >
              <div className="form-group">
                <label> Enter questions</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Enter answer A</label>
                <input
                  className="form-control"
                  type="text"
                  name="a"
                  value={a}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Enter answer B</label>
                <input
                  className="form-control"
                  type="text"
                  name="b"
                  value={b}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Enter answer C</label>
                <input
                  className="form-control"
                  type="text"
                  name="c"
                  value={c}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Enter answer D</label>
                <input
                  className="form-control"
                  type="text"
                  name="d"
                  value={d}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Enter answer </label>
                <input
                  className="form-control"
                  type="text"
                  name="ans"
                  value={ans}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
       

        {console.log(this.state.questions)}
      </div>
    );
  }
}
