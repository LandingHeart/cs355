import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse mr-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <Link className="navbar-brand" to="/">
                  HOME
                </Link>
                <Link className="navbar-item nav-link" to="/questions">
                  TOPIQ
                </Link>
                <li
                  className="navbar-item nav-link"
                  to="/questions"
                  onClick={() =>
                    window.open(
                      "https://ssologin.cuny.edu/cuny.html?resource_url=https%3A%2F%2Fbbhosted.cuny.edu%252Fwebapps%252Flogin%252Fnoportal",
                      "_blank"
                    )
                  }
                >
                  BLACKBOARD
                </li>
                {/* <Link className="navbar-item nav-link" to="/addQuestion">
                  add questions
                </Link> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Course
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      href="/"
                      className="dropdown-item"
                      onClick={() =>
                        window.open("https://www.zybooks.com/", "_blank")
                      }
                    >
                      ZyBook
                    </a>
                    <a
                      href="/"
                      className="dropdown-item"
                      onClick={() =>
                        window.open("http://www.tophat.com", "_blank")
                      }
                    >
                      TopHat
                    </a>
                    <a
                      href="/"
                      className="dropdown-item"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1co7vzY9_75cCiuNTHXCGf3pKbpf_TTwC",
                          "_blank"
                        )
                      }
                    >
                      Course Google Drive
                    </a>
                    <a
                      href="/"
                      className="dropdown-item"
                      onClick={() =>
                        window.open("https://www.w3schools.com", "_blank")
                      }
                    >
                      W3School
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/about"
                  >
                    About
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/developer" className="dropdown-item">
                      About Developer
                    </Link>
                    <Link to="/about" className="dropdown-item">
                      Contact
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Browser
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/">
                      Navigator
                    </a>
                    <a className="dropdown-item" href="/">
                      Window
                    </a>
                    <div className="dropdown-item" href="/"></div>
                    <a className="dropdown-item" href="/">
                      Screen
                    </a>
                    <a className="dropdown-item" href="/">
                      Location
                    </a>
                    <a className="dropdown-item" href="/">
                      Geolocation
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/">
                      From File
                    </a>
                    <a className="dropdown-item" href="/">
                      Course Google Drive
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login" role="button">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
