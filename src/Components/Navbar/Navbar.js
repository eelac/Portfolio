import React, { Component } from "react";
import { Link } from "react-scroll";
import NavbarGithub from "./NavbarGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFileAlt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

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
        <div>
          <div
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1rRqiVPEn4KLUxdXwWwPF807MjmMOuEHkeX_SKV3URI4/edit?usp=sharing",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faFileAlt} className="ResumeIcon" />
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/eltonlac/", "_blank")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} className="LinkedInIcon" />
          </div>
        </div>
        <NavbarGithub />
      </div>
    );
  }
}
