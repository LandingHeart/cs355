import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import AddQuestions from "./component/AddQuestions";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact"></Route>
      </Switch>
        asdlfkj
      <AddQuestions />
    </div>
  );
}

export default App;
