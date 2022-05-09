import styles from "./Feed.module.css";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div classNAme={styles.feed__inputContainer}>
        <div classNAme={styles.feed__input}>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
