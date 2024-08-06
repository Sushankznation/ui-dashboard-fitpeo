import "./DashboardActivities.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// Define the interface for the props
interface DashboardActivitiesProps {
  title: string;
  backgroundColor: string;
  iconColor: string;
  icon: JSX.Element; // JSX.Element type is used for React elements
}

// Use the interface in your component
const DashboardActivities: React.FC<DashboardActivitiesProps> = ({
  title,
  backgroundColor,
  iconColor,
  icon,
}) => {
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
