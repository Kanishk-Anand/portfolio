import React from "react";
import "./index.scss";

export default props => {
  const { name, highLight = 0 } = props;
  if (!name) {
    return null;
  }
  return (
    <div className="progressBar">
      <div className="progressBar__name">{name}</div>
      <div className="progressBar__bar">
        {highLight && (
          <div
            className="progressBar__bar--highlight"
            style={{ width: `${highLight}%` }}
          />
        )}
      </div>
    </div>
  );
};
