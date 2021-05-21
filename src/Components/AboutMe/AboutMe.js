import React from "react";
import "./AboutMe.css";

export default function Intro({id}) {
  return (
    <div className="backgroundAbout">
      <div className="section-content" id={id}>
        <h1 className="h1About">About Me</h1>
        <p className="pAbout">Hello!</p>
        <p className="pAbout">
          My name is Elton Lac. I am a full stack web developer
        </p>
      </div>
    </div>
  );
}
