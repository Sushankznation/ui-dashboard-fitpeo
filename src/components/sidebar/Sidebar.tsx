import React from "react";
import "./Sidebar.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="head">
        <GridViewRoundedIcon sx={{ color: "#7594fa", fontSize: 40 }} />
      </div>
      <div className="sidebar-icons">
        <div className="menu-icons">
          <Stack direction="column" spacing={1}>
            <IconButton size="large">
              <HomeRoundedIcon
                sx={{
                  color: "#7594fa",
                }}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton size="large">
              <InsertChartOutlinedTwoToneIcon
                sx={{ color: "#a8a9af" }}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton size="large">
              <AssignmentTurnedInOutlinedIcon
                sx={{ color: "#a8a9af" }}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton size="large">
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: "#a8a9af" }}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton size="large">
              <ShoppingBagOutlinedIcon
                sx={{ color: "#a8a9af" }}
                fontSize="inherit"
              />
            </IconButton>
          </Stack>
        </div>
        <div className="logout-btn">
          <IconButton size="large">
            <LogoutRoundedIcon sx={{ color: "#a8a9af" }} fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
