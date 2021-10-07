import React, { Component } from "react";
import { Link } from "react-scroll";
import NavbarResume from "./NavbarResume";
import NavbarLinkedIn from "./NavbarLinkedIn";
import NavbarGithub from "./NavbarGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

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
        <div className="form-inline">
          <div
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1rRqiVPEn4KLUxdXwWwPF807MjmMOuEHkeX_SKV3URI4/edit?usp=sharing",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="EmailIcon" />
          </div>
        </div>
        <NavbarResume />
        <NavbarLinkedIn />
        <NavbarGithub />
      </div>
    );
  }
}
