import React, { Component } from "react";
import EmployeeDirectory from "../Images/EmployeeDirectory.png";
import "./Project.css";

export default class Card3 extends Component {
  render() {
    return (
      <div className="card">
        <img src={EmployeeDirectory} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <p className="card-text">
            An app that generates a random image, name, phone number, email, and
            date of birth. You can search by any of the tags and can sort by
            alphabetical order.
          </p>
          <a
            href="https://github.com/eelac/Employee-Directory"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginRight: "1rem" }}
          >
            Github
          </a>
          <a
            href="https://glacial-brushlands-68655.herokuapp.com/"
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
