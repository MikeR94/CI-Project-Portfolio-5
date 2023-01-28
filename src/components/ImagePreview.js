import React, { useState } from "react";
import styles from "../styles/ImagePreview.module.css";
import plusIcon from "../assets/plus_icon.png";

const ImagePreview = ({ src, height = 45, width = 45 }) => {
  const [isHovering, setIsHovering] = useState(false);

  if (src === "") {
    src = plusIcon;
  }

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
