import React, { Component } from "react";
import { Link } from "react-scroll";
import NavbarResume from "./NavbarResume";
import NavbarLinkedIn from "./NavbarLinkedIn";
import NavbarGithub from "./NavbarGithub";
import NavbarEmail from "./NavbarEmail";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar sticky-top navbar-light bg-light justify-content-between">
        <div className="navbar-brand">
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={150}
            style={{ marginRight: "2rem" }}
          >
            Intro
          </Link>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-50}
            duration={150}
            style={{ marginRight: "2rem" }}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-45}
            duration={150}
          >
            Projects
          </Link>
        </div>
        <NavbarEmail />
        <NavbarResume />
        <NavbarLinkedIn />
        <NavbarGithub />
      </div>
    );
  }
}
