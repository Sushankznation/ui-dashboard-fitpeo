import React from "react";
import "./Dashboard.css";
import { summary, activities, customerFeedback } from "./data";
import SummarySection from "./SummarySection";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CircularProgressBar from "./CircularProgressBar";
import BarChartComponent from "./BarChartComponent";
import DashboardActivities from "./DashboardActivities";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="heading">Dashboard</h2>
      <div className="summary-section">
        <div className="summary-left">
          {summary.map((item, index) => (
            <SummarySection key={index} {...item} />
          ))}
        </div>
        <div className="summary-right">
          <div className="profit-details-section">
            <span className="profit-title">Net Profit</span>
            <span className="profit-amount">$ 6759.25</span>
            <div className="profit-percent">
              <div>
                <ArrowDropUpIcon />
              </div>
              <span>3%</span>
            </div>
          </div>
          <div className="profit-progress-section">
            <CircularProgressBar value={70} />
            <span>*The values here have been rounded off.</span>
          </div>
        </div>
      </div>
      <div className="activity-section">
        <div className="activity-left">
          <div className="activity-left-heading">
            <span>Activity</span>
            <select defaultValue="Weekly">
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <BarChartComponent />
        </div>
        <div className="activity-right">
          {activities.map((item, index) => (
            <div className="activities-all">
              <DashboardActivities key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="orders-and-feedback-section">
        <div className="recent-orders-section">
          <RecentOrders />
        </div>
        <div className="customers-feedback-section">
          <span className="customers-feedback-heading">
            Customer's Feedback
          </span>
          <div className="all-feedbacks">
            {customerFeedback.map((item, index) => (
              <CustomerFeedback key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
