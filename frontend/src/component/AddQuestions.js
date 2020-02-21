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
      count: 0
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/questions")
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
    const obj = {
      title: this.state.title,
      a: this.state.a,
      b: this.state.b,
      c: this.state.c,
      d: this.state.d,
      ans: this.state.ans,
      id: this.state.count
    };
    
  };
  render() {
    let { title, a, b, c, d, ans } = this.state;
    return (
      <div>
        <div className="form-content container">
          <form className="submit" type="submit" onSubmit={this.handlSubmit}>
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
          </form>
        </div>
        {this.state.questions.map(item => (
          <div key={item.id}>
            <div className="card">
              <div className="container">
                <p>
                  {item.id}. {item.title}
                </p>
                <p>A {item.a}</p>
                <p>B {item.b}</p>
                <p>C {item.c}</p>
                <p>D {item.d}</p>
              </div>
            </div>
          </div>
        ))}

        {console.log(this.state.questions)}
      </div>
    );
  }
}
