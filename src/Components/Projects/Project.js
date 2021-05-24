import React from "react";
import "./Project.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function Project({ id }) {
  return (
    <div className="backgroundProject">
      <div className="section-content" id={id}>
        <h1 className="title">Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <Card1 />
          </div>
          <div className="col">
            <Card2 />
          </div>
          <div className="col">
            <Card3 />
          </div>
          <div className="col">
            <Card4 />
          </div>
        </div>
      </div>
    </div>
  );
}
