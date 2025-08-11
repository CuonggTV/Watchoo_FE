import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@mui/material";

// Import MUI icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const menuItems = [
  { text: "Home", icon: <HomeOutlinedIcon />, link: "#" },
  { text: "Movies", icon: <MovieOutlinedIcon />, link: "#latest-section" },
  { text: "TV Series", icon: <TvOutlinedIcon />, link: "#section-tv" },
  { text: "Genre", icon: <CategoryOutlinedIcon />, link: "#" },
  { text: "Setting", icon: <SettingsOutlinedIcon />, link: "#" },
  { text: "Messages", icon: <ChatBubbleOutlineOutlinedIcon />, link: "#" },
  { text: "About", icon: <HelpOutlineOutlinedIcon />, link: "#" },
  { text: "Account", icon: <PersonOutlineOutlinedIcon />, link: "#" }
];

const NavMenu = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavMenu;
