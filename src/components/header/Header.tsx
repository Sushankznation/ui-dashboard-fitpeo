import React from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ProfilePicture from "../../images/profilepic/8.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-icon">
          <SearchOutlinedIcon sx="color:#cbccd0" fontSize="small" />
        </div>
        <input type="text" placeholder="Search" className="header-input" />
      </div>
      <div className="header-right">
        <div className="mail-icon">
          <MailOutlineRoundedIcon sx="color:#cbccd0" fontSize="small" />
        </div>
        <div className="settings-icon">
          <SettingsOutlinedIcon sx="color:#cbccd0" fontSize="small" />
        </div>
        <div className="notification-icon">
          <Badge
            color="primary"
            overlap="circular"
            badgeContent=" "
            variant="dot"
          >
            <NotificationsOutlinedIcon sx="color:#cbccd0" fontSize="small" />
          </Badge>
        </div>
        <Avatar
          alt="Chandan"
          src={ProfilePicture}
          sx={{ width: 35, height: 35 }}
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
