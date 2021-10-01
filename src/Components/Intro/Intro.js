import React from "react";
import "./Intro.css";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Intro({ id }) {
  return (
    <div className="backgroundIntro">
      <div className="section-content" id={id}>
        <p className="pIntro">Hello! My name is</p>
        <h1 className="h1Intro">Elton Lac</h1>
        <p className="pInfo">I am a full stack web developer</p>
        <div className="icons">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJsSquare} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faDatabase} />
        </div>
      </div>
    </div>
  );
}
