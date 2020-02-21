import React, { Component } from "react";

export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount(){
      fetch('/questions')
        .then(res => res.json())
        .then(questions => this.setState({questions}))
        .catch(err => console.log(err));
  }
  render() {
    const data = this.state.questions.map(item => {
      <div className="content" key={item.id}>
        <p>{item.title}</p>
        <p>{item.choiceA}</p>
        <p>{item.choiceB}</p>
        <p>{item.choiceC}</p>
        <p>{item.ans}</p>
      </div>;
    });
    return (
      <div>
        <ul>{data}</ul>
      </div>
    );
  }
}
