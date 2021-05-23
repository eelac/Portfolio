import React from "react";
import aboutMeText from "./AboutMeText";
import "./AboutMe.css";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe({ id }) {
  return (
    <div className="backgroundAbout">
      <div className="section-content" id={id}>
        <h1 className="h1About">About Me</h1>
        <FontAwesomeIcon icon={faUserAlt} className="profile" />
        <p className="aboutMe">{aboutMeText}</p>
        <hr style={{ height: "2px", color: "black" }} />
        <div className="skills">
          <p className="textHeader text">Skills</p>
          <p className="textHeader text">Languages</p>
          <hr
            style={{
              height: "2px",
              color: "black",
              width: "30%",
              margin: "auto",
            }}
          />
          <p className="text">Javascript, HTML, CSS, mySQL, MongoDB</p>
          <p className="textHeader text">Frameworks</p>
          <hr
            style={{
              height: "2px",
              color: "black",
              width: "30%",
              margin: "auto",
            }}
          />
          <p className="text" style={{ paddingBottom: "15%" }}>
            Bootstrap, jQuery, Node.js, Express.js, React.js
          </p>
        </div>
      </div>
    </div>
  );
}
