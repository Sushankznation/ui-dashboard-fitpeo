import "./CustomerFeedback.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

// Define the interface for the props
interface CustomerFeedbackProps {
  customer: string;
  src: string; // URL or path to the image
  rating: number; // Assuming rating is a number
  feedback: string;
}

// Create a styled component for Rating
const CustomRating = styled(Rating)({
  "& .MuiRating-iconEmpty": {
    color: "white",
  },
});

// Use the interface in your component
const CustomerFeedback: React.FC<CustomerFeedbackProps> = ({
  customer,
  src,
  rating,
  feedback,
}) => {
  return (
    <div className="customer-feedback">
      <div className="customer-avatar-and-name">
        <Avatar
          alt={customer} // Use the customer name for accessibility
          src={src}
          sx={{ width: 25, height: 25 }}
          className="avatar"
        />
        <span>{customer}</span>
      </div>
      <div className="rating">
        <CustomRating name="read-only" value={rating} size="small" readOnly />
      </div>
      <p className="feedback">{feedback}</p>
    </div>
  );
};

export default CustomerFeedback;
