import React from "react";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import WorkIcon from "@mui/icons-material/Work";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

import profile1 from "../../images/profilepic/1.jpg";
import profile2 from "../../images/profilepic/2.jpg";
import profile3 from "../../images/profilepic/3.jpg";
import profile4 from "../../images/profilepic/4.jpg";
import profile5 from "../../images/profilepic/5.jpg";
import profile6 from "../../images/profilepic/6.jpg";
import profile7 from "../../images/profilepic/7.jpg";
import profile8 from "../../images/profilepic/8.jpg";
import profile9 from "../../images/profilepic/9.jpg";
import profile10 from "../../images/profilepic/10.jpg";

interface SummaryItem {
  title: string;
  backgroundColor: string;
  iconColor: string;
  icon: JSX.Element;
  value: string;
  percentageChange: number;
  status: string;
}

interface ActivityItem {
  title: string;
  backgroundColor: string;
  iconColor: string;
  icon: JSX.Element;
}

interface RecentOrderItem {
  customer: string;
  orderNo: string;
  amount: string;
  status: string;
  src: string;
}

interface CustomerFeedbackItem {
  customer: string;
  src: string;
  rating: number;
  feedback: string;
}

export const summary: SummaryItem[] = [
  {
    title: "Total Orders",
    backgroundColor: "#003bff5c",
    iconColor: "#003bff",
    icon: <CardTravelIcon />,
    value: "75",
    percentageChange: 3,
    status: "increased",
  },
  {
    title: "Total Delivered",
    backgroundColor: "#00ffad6b",
    iconColor: "#00ffad",
    icon: <WorkIcon />,
    value: "70",
    percentageChange: 3,
    status: "decreased",
  },
  {
    title: "Total Cancelled",
    backgroundColor: "#fa000063",
    iconColor: "#fa0000",
    icon: <WorkOffIcon />,
    value: "05",
    percentageChange: 3,
    status: "increased",
  },
  {
    title: "Total Revenue",
    backgroundColor: "#ff009457",
    iconColor: "#ff0094",
    icon: <PriceChangeIcon />,
    value: "$12k",
    percentageChange: 3,
    status: "decreased",
  },
];

export const activities: ActivityItem[] = [
  {
    title: "Goals",
    backgroundColor: "#fa000063",
    iconColor: "#fa0000",
    icon: <TrackChangesOutlinedIcon />,
  },
  {
    title: "Popular Dishes",
    backgroundColor: "#003bff5c",
    iconColor: "#003bff",
    icon: <LunchDiningOutlinedIcon />,
  },
  {
    title: "Menus",
    backgroundColor: "#00ffad6b",
    iconColor: "#00ffad",
    icon: <MenuBookOutlinedIcon />,
  },
];

export const recentOrders: RecentOrderItem[] = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    src: profile1,
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
    src: profile2,
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    src: profile3,
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
    src: profile4,
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    src: profile5,
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    src: profile6,
  },
];

export const customerFeedback: CustomerFeedbackItem[] = [
  {
    customer: "Jenny Wilson",
    src: profile7,
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    customer: "Dianne Russell",
    src: profile9,
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    customer: "Devon Lane",
    src: profile10,
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and served with a great homemade ranch.",
  },
  {
    customer: "Alyssa Curtis",
    src: profile8,
    rating: 3,
    feedback:
      "The pasta was decent, but the sauce was a bit too salty for my taste. The service was good, and the ambiance was nice.",
  },
  {
    customer: "Michael Brown",
    src: profile4,
    rating: 5,
    feedback:
      "Absolutely loved the steak. It was cooked to perfection. The sides were delicious too. Great experience overall!",
  },
  {
    customer: "Sarah Johnson",
    src: profile5,
    rating: 4,
    feedback:
      "The dessert menu is fantastic! I had the chocolate lava cake and it was heavenly. Would come back just for that.",
  },
  {
    customer: "Kevin Lee",
    src: profile6,
    rating: 2,
    feedback:
      "The service was slow and the food was cold by the time it reached our table. Not the best experience.",
  },
];
