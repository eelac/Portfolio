import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavbarLinkedIn = () => {
  return (
    <div>
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/eltonlac/", "_blank")
        }
      >
        <FontAwesomeIcon icon={faLinkedin} className="LinkedInIcon" />
      </div>
    </div>
  );
};

export default NavbarLinkedIn;
