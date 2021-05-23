import React, { Component } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <ul className="navItems">
          <li className="navHeader">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Intro
            </Link>
          </li>
          <li className="navHeader">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-55}
              duration={200}
            >
              About Me
            </Link>
          </li>
          <li className="navHeader">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-55}
              duration={200}
            >
              Section 3
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse" />

        <div>
          <FontAwesomeIcon icon={faGithub} className="GithubIcon" />
        </div>
      </nav>
    );
  }
}
