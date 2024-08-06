import React from "react";
import "./DashboardActivities.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const DashboardActivities = ({ title, backgroundColor, iconColor, icon }) => {
  return (
    <div className="dashboard-activities">
      <div className="activity-icon-and-title">
        <div
          className="activity-icon"
          style={{ backgroundColor: backgroundColor, color: iconColor }}
        >
          {icon}
        </div>
        <span className="activity-title">{title}</span>
      </div>
      <div className="expand-btn">
        <KeyboardArrowRightOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default DashboardActivities;
