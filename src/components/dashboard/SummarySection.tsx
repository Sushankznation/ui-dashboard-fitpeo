import "./SummarySection.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Define the interface for the props
interface SummarySectionProps {
  title: string;
  backgroundColor: string;
  iconColor: string;
  icon: JSX.Element; // JSX.Element type is used for React elements
  value: string | number; // Adjust based on what type value can be
  percentageChange: number; // Assuming percentageChange is a number
  status: string; // Only these two string values are allowed
}

// Use the interface in your component
const SummarySection: React.FC<SummarySectionProps> = ({
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
