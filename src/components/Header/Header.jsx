import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption/HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img src="/images/linkedin.png" alt="logo" className={styles.logo} />

        <div className={styles.header__search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className={styles.header__right}>
        <HeaderOption title={"Home"} Icon={HomeIcon} />
        <HeaderOption title={"My Network"} Icon={SupervisorAccountIcon} />
        <HeaderOption title={"Jobs"} Icon={BusinessCenterIcon} />
        <HeaderOption title={"Messaging"} Icon={ChatIcon} />
        <HeaderOption title={"Notification"} Icon={NotificationsIcon} />
        <HeaderOption
          title={"Me"}
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I659tQorDiRhAmUtwE1Cmf5hLO6DampCqXvTOXNGw=s32-c-mo"
        />
      </div>
    </div>
  );
};

export default Header;
