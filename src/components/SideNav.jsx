import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SideNavbar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: "250px" }}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Radio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Podcast" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Music" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="India's Music" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Language" />
          </ListItem>
          {/* Add more links as needed */}
        </List>
      </div>
    </Drawer>
  );
};

export default SideNavbar;
