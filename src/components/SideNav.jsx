import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideNavbar = ({ open, onClose, toggleDarkMode }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); // Close the drawer after navigation (optional)
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ margin: "5px", display: "flex", justifyContent: "center" }}>
        <IconButton color="inherit" aria-label="profile" cursor="pointer">
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div style={{ width: "250px" }}>
        <List>
          <ListItem button onClick={() => handleNavigation("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/musiclist")}>
            <ListItemText primary="Radio" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/musiclist")}>
            <ListItemText primary="Podcast" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/musiclist")}>
            <ListItemText primary="My Music" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/musiclist")}>
            <ListItemText primary="India's Music" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/musiclist")}>
            <ListItemText primary="Language" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Night Mode" />
            <Switch onChange={toggleDarkMode} color="primary" />
          </ListItem>
          {/* Add more links as needed */}
        </List>
      </div>
    </Drawer>
  );
};

export default SideNavbar;
