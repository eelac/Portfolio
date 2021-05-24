import React, { Component } from "react";
import WeatherDashboard from "../Images/WeatherDashboard.png";

export default class Card1 extends Component {
  render() {
    return (
      <div className="card" style={{ width: "20rem" }}>
        <img src={WeatherDashboard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            An app that allows you to search up the weather and humidity in your
            desired city. Also includes a 5 day forecast.
          </p>
          <a
            href="https://github.com/eelac/Weather-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginRight: "1rem" }}
          >
            Github
          </a>
          <a
            href="https://eelac.github.io/Weather-Dashboard/"
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
