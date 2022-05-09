import { Avatar } from "@mui/material";
import React from "react";
import styles from "./HeaderOption.module.css";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} />}
      {avatar && <Avatar className={styles.headerOption__icon} src={avatar} />}
      <h3 className={styles.headerOption__title}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
