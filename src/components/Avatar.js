// React and Router
import React from "react";
// Styles
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45 }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      ></img>
    </span>
  );
};

export default Avatar;
