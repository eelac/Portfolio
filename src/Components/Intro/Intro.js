import React from "react";
import HTML5 from "../../images/HTML5.png";
import CSS from "../../images/CSS.png";
import JS from "../../images/Javascript.png";
import Node from "../../images/Node.png";
import ReactImg from "../../images/React.png";
import Mongo from "../../images/Mongo.png";
import "./Intro.css";

export default function Intro({ id }) {
  return (
    <div className="backgroundIntro">
      <div className="section-content" id={id}>
        <p className="pIntro" style={{ paddingTop: "20%" }}>
          Hello! My name is
        </p>
        <h1 className="h1Intro">Elton Lac</h1>
        <p className="pIntro" style={{ paddingBottom: "5%" }}>
          I am a full stack web developer
        </p>
        <p className="logoContainer" style={{ paddingBottom: "20%" }}>
          <img src={HTML5} className="logo_html" alt="HTML5 logo" />
          <img src={CSS} className="logo_css" alt="CSS logo" />
          <img src={JS} className="logo_js" alt="Javascript logo" />
          <img src={Node} className="logo_node" alt="Node logo" />
          <img src={ReactImg} className="logo_react" alt="React logo" />
          <img src={Mongo} className="logo_mongo" alt="Mongo logo" />
        </p>
      </div>
    </div>
  );
}
