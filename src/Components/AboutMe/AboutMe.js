import React from "react";
import aboutMeText from "./AboutMeText";
import "./AboutMe.css";
import profile from "../Images/Profile.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="backgroundAbout">
      <div className="section-content" id={id}>
        <h1 className="h1About">About Me</h1>
        <img src={profile} className="profile" alt="profile" />
        <p className="aboutMe">{aboutMeText}</p>
        <hr className="hrLong" />
        <div className="skills">
          <p className="textHeader text">Skills</p>
          <p className="textHeader text">Languages</p>
          <hr className="hrShort" />
          <p className="text">Javascript, HTML, CSS, mySQL, MongoDB, Python</p>
          <p className="textHeader text">Frameworks</p>
          <hr className="hrShort" />
          <p className="text" style={{ paddingBottom: "15%" }}>
            Bootstrap, jQuery, Node.js, Express.js, React.js
          </p>
        </div>
      </div>
    </div>
  );
}
