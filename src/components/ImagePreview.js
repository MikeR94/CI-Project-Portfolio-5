import React from "react";
import styles from "../styles/ImagePreview.module.css";
import plusIcon from "../assets/plus_icon.png";

const ImagePreview = ({ src, height = 45, width = 45 }) => {
  if (src === "") {
    src = plusIcon;
  }

  return (
    <span>
      <img
        className={styles.ImagePreview}
        src={src}
        height={height}
        width={width}
        alt="File Preview"
      ></img>
    </span>
  );
};

export default ImagePreview;
