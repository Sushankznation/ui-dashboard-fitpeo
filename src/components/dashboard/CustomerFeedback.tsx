import React from "react";
import "./CustomerFeedback.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const CustomRating = styled(Rating)({
  "& .MuiRating-iconEmpty": {
    color: "white",
  },
});

const CustomerFeedback = ({ customer, src, rating, feedback }) => {
  return (
    <div className="customer-feedback">
      <div className="customer-avatar-and-name">
        <Avatar
          alt="Chandan"
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
