import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ value }) => {
  return (
    <div className="circular-progress-bar">
      <CircularProgressbarWithChildren value={value}>
        <h3>{value}%</h3>
        <span className="note">Goal Completed</span>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressBar;
