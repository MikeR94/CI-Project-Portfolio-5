// React and Router
import React, { useState } from "react";
// Styles
import styles from "../styles/ImagePreview.module.css";
// Assets
import plusIcon from "../assets/plus_icon.png";

const ImagePreview = ({ src, height = 45, width = 45 }) => {
  const [isHovering, setIsHovering] = useState(false);

  if (src === "") {
    src = plusIcon;
  }

  /**
   * Function to set the isHovering state to true
   */
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  /**
   * Function to set the isHovering state to true
   */
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <span>
      <img
        className={
          isHovering ? `${styles.ImagePreviewHover}` : `${styles.ImagePreview}`
        }
        src={src}
        height={height}
        width={width}
        alt="File Preview"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
    </span>
  );
};

export default ImagePreview;
