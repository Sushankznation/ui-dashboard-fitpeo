// import React from "react";
// import "./SummarySection.css";

// const SummarySection = (data) => {
//   console.log(data);
//   return (
//     <>
//       <div className="summary-items">
//         <div
//           className="summary-icon"
//           style={{ background: `${data.backgroundColor}` }}
//         ></div>
//         <span className="summary-title"></span>
//         <div className="summary-details"></div>
//       </div>
//     </>
//   );
// };

// export default SummarySection;

import React from "react";
import "./SummarySection.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SummarySection = ({
  title,
  backgroundColor,
  iconColor,
  icon,
  value,
  percentageChange,
  status,
}) => {
  return (
    <div className="summary-items">
      <div
        className="summary-icon"
        style={{ backgroundColor: backgroundColor, color: iconColor }}
      >
        {icon}
      </div>
      <span className="summary-title">{title}</span>
      <div className="summary-details">
        <span className="details-value">{value}</span>
        <div
          className={
            status === "increased"
              ? "details-percent percent-green"
              : "details-percent percent-red"
          }
        >
          <div className="arrow-icon">
            {status === "increased" ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </div>

          <span>{percentageChange}%</span>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
