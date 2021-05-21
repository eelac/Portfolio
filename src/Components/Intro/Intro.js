import React from "react";
import HTML5 from "../../images/HTML5.png";
import CSS from "../../images/CSS.png";
import JS from "../../images/Javascript.png";
import Node from "../../images/Node.png";
import ReactImg from "../../images/React.png";
import Mongo from "../../images/Mongo.png";
import "./Intro.css";

export default function Intro({id}) {
  return (
    <div className="backgroundIntro">
      <div className="section-content" id={id}>
        <p className="pIntro">Hello! My name is</p>
        <h1 className="h1Intro">Elton Lac</h1>
        <p className="pIntro">I am a full stack web developer</p>
        <p>
          <img src={HTML5} alt="HTML5 logo" className="logo_html" />
          <img src={CSS} alt="CSS logo" className="logo_css" />
          <img src={JS} alt="Javascript logo" className="logo_js" />
          <img src={Node} alt="Node logo" className="logo_node" />
          <img src={ReactImg} alt="React logo" className="logo_react" />
          <img src={Mongo} alt="Mongo logo" className="logo_mongo" />
        </p>
      </div>
    </div>
  );
}
