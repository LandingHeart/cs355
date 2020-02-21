import React, { Component } from "react";

export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
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
  componentDidUpdate() {}

  componentDidMount() {
    // setInterval(this.fetchData(), 1000);
    let intervalId = setInterval(() => this.fetchData(), 3000);
    this.setState({
      intervalId: intervalId
    });
  }
  async fetchData() {
    fetch("/questions")
      .then(response => {
        if (response.status === 200) {
          //   const json = await response.json();
          //   console.log(json);
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .then(questions => this.setState({ questions }))
      .catch(err => console.log(err));
    this.setState({
      count: this.state.id
    });
    console.log(this.state);
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
        <div className="form-content">
          <form className="submit" type="submit" onSubmit={this.handlSubmit}>
            <div className="container">
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
        {this.state.questions.map(item => (
          <div key={item.id}>
            <div
              className="card container"
              style={{
                width: "80%",
                justifyContent: "center",
                marginTop: "20px"
              }}
            >
              <div style={{}}>
                <div className="card-body">
                  <h5 className="card-title">
                    {item.id}. {item.title}
                  </h5>
                  <p className="cart-text">A {item.a}</p>
                  <p className="cart-text">B {item.b}</p>
                  <p className="cart-text"> C {item.c}</p>
                  <p className="cart-text"> D {item.d}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {console.log(this.state.questions)}
      </div>
    );
  }
}
