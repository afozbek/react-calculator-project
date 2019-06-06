import React from "react";

import "./App.css";

const Result = props => {
  return (
    <div className="result-container">
      <div id="display" className="head">
        {props.head}
      </div>
      <div className="result">{props.result}</div>
    </div>
  );
};

export default Result;
