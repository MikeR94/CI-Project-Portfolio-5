import React, { useState } from "react";
import styles from "../styles/RoleIcon.module.css";

const RoleIcon = ({ src, height = 45, text, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <span>
      <img
        className={
          isHovering ? `${styles.RoleIconHover}` : `${styles.RoleIcon}`
        }
        src={src}
        height={height}
        width={height}
        alt="role icon"
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
      {text}
    </span>
  );
};

export default RoleIcon;
