import React, { Component } from "react";
import Scheduler from "../Images/Scheduler.png";
import "./Project.css";

export default class Card4 extends Component {
  render() {
    return (
      <div className="card">
        <img src={Scheduler} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <p className="card-text">
            A simple calendar app that lets you schedule your plans and events
            for the day locally. It gives you the current date and time.
          </p>
          <a
            href="https://github.com/eelac/Homework5-Scheduler"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginRight: "1rem" }}
          >
            Github
          </a>
          <a
            href="https://eelac.github.io/Homework5-Scheduler/"
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
