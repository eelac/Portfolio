import React from "react";
import Profile from "../../images/Profile.png";
import aboutMeText from "./AboutMeText";
import "./AboutMe.css";

export default function Intro({ id }) {
  return (
    <div className="backgroundAbout">
      <div className="section-content" id={id}>
        <h1
          className="h1About"
          style={{ paddingTop: "20%", paddingBottom: "5%" }}
        >
          About Me
        </h1>
        <img src={Profile} className="profilePic" alt="profile" />
        <p>{aboutMeText}</p>
        <hr style={{ backgroundColor: "black", borderColor: "black" }} />
        <p
          className="textHeader text"
          style={{ fontSize: "2rem", lineHeight: "15%" }}
        >
          Skills
        </p>
        <p className="textHeader text">Languages</p>
        <p className="text">Javascript, HTML, CSS, mySQL, MongoDB</p>
        <p className="textHeader text">Frameworks</p>
        <p className="text" style={{ paddingBottom: "20%" }}>
          Bootstrap, jQuery, Node.js, Express.js, React.js
        </p>
      </div>
    </div>
  );
}
