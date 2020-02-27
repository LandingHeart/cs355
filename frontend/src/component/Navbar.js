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
                <Link className="navbar-brand" href="#" to="/">
                  HOME
                </Link>
                <Link className="nav-link" to="/questions">
                  TOPIQ
                </Link>
                <Link className="nav-link" to="/addQuestions">
                  Add Questions
                </Link>
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
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        window.open("https://www.zybooks.com/", "_blank")
                      }
                    >
                      ZyBook
                    </Link>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        window.open("http://www.tophat.com", "_blank")
                      }
                    >
                      TopHat
                    </Link>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1co7vzY9_75cCiuNTHXCGf3pKbpf_TTwC",
                          "_blank"
                        )
                      }
                    >
                      Course Google Drive
                    </Link>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        window.open("https://www.w3schools.com", "_blank")
                      }
                    >
                      W3School
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/about"
                  >
                    About
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/about" className="dropdown-item" href="#">
                      About Developer
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Contact
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Browser
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" href="#">
                      Navigator
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Window
                    </Link>
                    <div className="dropdown-item"></div>
                    <Link className="dropdown-item" href="#">
                      Screen
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Location
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Geolocation
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Search
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" href="#">
                      From File
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Course Google Drive
                    </Link>
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
