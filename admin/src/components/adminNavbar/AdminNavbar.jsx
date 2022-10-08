import React from 'react';
import "./adminNavbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import CommonAvatar from '../common/commonAvatar';

const AdminNavbar = () => {
  return (
  <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <SearchOutlinedIcon />
      </div>
      <div className="items">
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <CommonAvatar />
        </div>
      </div>
    </div>
  </div>
);
};

export default AdminNavbar
