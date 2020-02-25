import React, { Component } from "react";

export default class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
