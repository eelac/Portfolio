import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const NavbarEmail = () => {
  return (
    <div
      className="form-inline"
      onClick={() =>
        window.open(
          "https://docs.google.com/document/d/1rRqiVPEn4KLUxdXwWwPF807MjmMOuEHkeX_SKV3URI4/edit?usp=sharing",
          "_blank"
        )
      }
    >
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="EmailIcon" />
    </div>
  );
};

export default NavbarEmail;
