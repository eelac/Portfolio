import React, { Component } from "react";
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
          <h1>Hello react</h1>
          <div onClick={this.handleHide}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="EmailIcon" />
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
