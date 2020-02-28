import React, { Component } from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import AddQuestions from "./component/AddQuestions";
import DisplayQuestion from "./component/DisplayQuestions";
import { Switch, Route } from "react-router-dom";
import Home from "./container/Home";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/addQuestion" component={AddQuestions} />
          <Route exact path="/questions" component={DisplayQuestion}></Route>
        </Switch>
      </div>
    );
  }
}
