import React, { Component } from "react";
import "./NavbarEmail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

class NavbarEmail extends Component {
  state = {
    isActive: false,
  };

  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <div className="form-inline">
          <div onClick={this.handleHide}>
            <p className="email">Email: lacelton1@gmail.com</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-inline">
          <div onClick={this.handleShow}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="EmailIcon" />
          </div>
        </div>
      );
    }
  }
}

export default NavbarEmail;
