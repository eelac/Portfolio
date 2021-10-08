import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const NavbarResume = () => {
  return (
    
          <div
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1rRqiVPEn4KLUxdXwWwPF807MjmMOuEHkeX_SKV3URI4/edit?usp=sharing",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faFileAlt} className="ResumeIcon" />
          </div>
        
  );
};

export default NavbarResume;
