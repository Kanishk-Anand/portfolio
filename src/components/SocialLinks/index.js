import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

export default (props) => {
  return (
    <div className="socialLinks">
      <a
        href="https://www.linkedin.com/in/kanishk-anand/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://github.com/kanishk-anand-oyo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/10867662/kanishk-anand/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faStackOverflow}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
      <a
        href="https://medium.com/@kanishk.kanishk.anand/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faMedium}
          className="socialLinks__icons"
          size="1x"
        />
      </a>
    </div>
  );
};
