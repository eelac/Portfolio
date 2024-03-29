import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavbarGithub = () => {
  return (
    <div onClick={() => window.open("https://github.com/eelac", "_blank")}>
      <FontAwesomeIcon icon={faGithub} className="GithubIcon" />
    </div>
  );
};

export default NavbarGithub;
