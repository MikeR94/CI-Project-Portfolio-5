import React from "react";
import styles from "../styles/RoleIcon.module.css";

const RoleIcon = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.RoleIcon}
        src={src}
        height={height}
        width={height}
        alt="role icon"
      ></img>
      {text}
    </span>
  );
};

export default RoleIcon;
