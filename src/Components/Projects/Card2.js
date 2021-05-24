import React, { Component } from "react";
import Worda from "../Images/Worda.png";

export default class Card2 extends Component {
  render() {
    return (
      <div className="card" style={{ width: "20rem" }}>
        <img src={Worda} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">The Legend of Worda</h5>
          <p className="card-text">
            A dictionary app that also gives you the origination date,
            etymology, and synonyms. It also generates random words from
            their origin. Warning: music automatically plays.
          </p>
          <a
            href="https://github.com/eelac/word-force"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginRight: "1rem" }}
          >
            Github
          </a>
          <a
            href="https://sksmejn.github.io/word-force/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Website
          </a>
        </div>
      </div>
    );
  }
}
