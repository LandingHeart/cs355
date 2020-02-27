import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import DisplayQuestionContainer from "./container/DisplayQuestionContainer";
import AddQuestions from "./component/AddQuestions";
import Home from "./container/Home";
import Login from "./component/Login";
import Register from "./component/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/questions" component={DisplayQuestionContainer}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/addQuestions" component={AddQuestions}></Route>
        <Route path="/contact"></Route>
      </Switch>
    </div>
  );
}

export default App;
