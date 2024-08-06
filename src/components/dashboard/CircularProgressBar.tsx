import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressBar.css";

// Define the interface for the props
interface CircularProgressBarProps {
  value: number; // Assuming value is a number representing the progress percentage
}

// Use the interface in your component
const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
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
