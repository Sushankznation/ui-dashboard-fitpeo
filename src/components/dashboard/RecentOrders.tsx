import React from "react";
import "./RecentOrders.css";
import { recentOrders } from "./data";
import Avatar from "@mui/material/Avatar";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <span className="recent-orders-heading">Recent Orders</span>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index}>
              <td className="name-with-picture">
                <Avatar
                  alt="Chandan"
                  src={order.src}
                  sx={{ width: 25, height: 25 }}
                  className="avatar"
                />
                <span>{order.customer}</span>
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
