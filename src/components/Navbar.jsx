import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "./SearchBar";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Diversity2Outlined, Diversity2Rounded } from "@mui/icons-material";

const NavBar = ({ toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const appBarBackgroundColor =
    theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5";

  return (
    <AppBar
      position="static"
      sx={{ width: "100%", backgroundColor: appBarBackgroundColor }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <div> */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={
                "https://cdn-images-1.medium.com/max/1200/1*k_wNq_cl2EJixZO9dSesew.jpeg"
              }
              alt="Your Logo"
              style={{
                width: "87px",
                height: "22px",
              }}
            />
          </Typography>
        </div>
        <div style={{ display: "flex", marginRight: "400px" }}>
          <SearchBar />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <button class="lg mr">
            <svg width="32" height="24" viewBox="0 0 20 16">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-1108 -117) translate(1089 58) translate(19 15) translate(0 43) translate(.5 1.5)">
                  <rect
                    class="svg_box"
                    width="11"
                    height="11"
                    x="7.591"
                    y="3.5"
                    fill="#FFF"
                    stroke="#8E8E93"
                    rx="5.5"
                  ></rect>
                  <rect
                    class="svg_box"
                    width="11"
                    height="11"
                    x=".5"
                    y=".5"
                    fill="#FFF"
                    stroke="#8E8E93"
                    rx="5.5"
                  ></rect>
                  <text fill="#8E8E93" font-size="7" font-weight="500">
                    <tspan x="3.5" y="9">
                      A
                    </tspan>
                  </text>
                  <text fill="#8E8E93" font-size="5" font-weight="500">
                    <tspan x="12" y="11.5">
                      अ
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </button>
          <DarkModeOutlinedIcon
            onClick={toggleDarkMode}
            style={{ cursor: "pointer" }}
          />
          <IconButton
            color="inherit"
            aria-label="profile"
            onClick={handleMenuClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <div
            style={{
              position: "absolute",
              height: "300px",
              width: "400px",
            }}
          >
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
