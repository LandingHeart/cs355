import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import AddQuestions from "./component/AddQuestions";
import DisplayQuestionContainer from "./container/DisplayQuestionContainer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/questions" component = {DisplayQuestionContainer}></Route>
        <Route path="/contact"></Route>
      </Switch>
      <AddQuestions />
    </div>
  );
}

export default App;
