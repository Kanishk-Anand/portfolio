import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default () => {
  return (
    <div className="footerWrapper">
      <a
        href={`${process.env.PUBLIC_URL}/kanishk_anand_resume.pdf`}
        download="Kanishk_Anand_Resume.pdf"
        className="footerWrapper__btn"
      >
        Download Resume
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
};
