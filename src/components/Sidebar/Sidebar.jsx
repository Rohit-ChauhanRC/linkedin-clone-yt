import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className={styles.sidebar__recentItem}>
        <span className={styles.sidebar__hash}>
          <p># {topic}</p>
        </span>
      </div>
    );
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img
          src="https://images.unsplash.com/photo-1651790854107-486aa7ee0cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          className={styles.sidebar__top_img}
        />
        <Avatar classsNAme={styles.sidebar__avatar} />
        <h2>Rohit Chauhan</h2>
        <h4>rc@gmail.com</h4>
      </div>
      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p className={styles.sidebar__stat_p}>Who viewed you</p>
          <p className={styles.sidebar__statNumber}>2,333</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p className={styles.sidebar__stat_p}>Views on post</p>
          <p className={styles.sidebar__statNumber}>80000</p>
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("flutter")}
        {recentItem("python")}
        {recentItem("Html")}
        {recentItem("Css")}
        {recentItem("JS")}
      </div>
    </div>
  );
};

export default Sidebar;
