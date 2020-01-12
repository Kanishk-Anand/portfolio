import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default () => {
  return (
    <div className="footerWrapper">
      <a
        href="/kanishk_anand_resume.pdf"
        download="kanishkAnandResume.pdf"
        className="footerWrapper__btn"
      >
        Download CV
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
};
