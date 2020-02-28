import React, { Component } from "react";
import "./home.css";
import Routes from "../Routes";
import Navbar from "../component/Navbar";
import DisplayQuestionContainer from "./DisplayQuestionContainer";
import Login from "../component/Login";
import { Switch, Route } from "react-router-dom";
import Register from "../component/Register";
import AddQuestions from "../component/AddQuestions";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Routes />

        <Switch>
          {/* <Route path="/about" component={About}></Route> */}
          <Route path="/questions" component={DisplayQuestionContainer}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/addQuestions" component={AddQuestions}></Route> */}
          <Route path="/contact"></Route>
        </Switch>
      </div>
    );
  }
}
