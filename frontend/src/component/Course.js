import React, { Component } from "react";
import "./course.css";
import { Link } from "react-router-dom";
export default class Course extends Component {
  render() {
    return (
      <div className="row">
        <div className="centered">
          <section className="cards">
            <article className="card">
              <h3 className="card-title">{this.props.course}</h3>
              <Link to="/questions"> CS 355 </Link>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
