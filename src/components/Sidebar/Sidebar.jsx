import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="" alt="" />
        <Avatar />
        <h2>Rohit Chauhan</h2>
        <h4>rc@gmail.com</h4>
      </div>
    </div>
  );
};

export default Sidebar;
