import React, { Component } from "react";

export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      user: "me"
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

    console.log(this.state);
  }
  render() {
    let { questions } = this.state;
    return (
      <div>
        {questions.map(item => (
          <div
            key={item.id}
            className="container"
            style={{ color: "black", backgroundColor: "gray" }}
          >
            <p>{item.title}</p>
            <p>A {item.a}</p>
            <p>B {item.b}</p>
            <p>C {item.c}</p>
            <p>D {item.d}</p>
          </div>
        ))}
        <p>{this.state.user}</p>

        {console.log(this.state.questions)}
      </div>
    );
  }
}
