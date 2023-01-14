import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Spinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.SpinnerPosition}>
      <Spinner className={styles.Spinner} animation="border" />
    </div>
  );
};

export default LoadingSpinner;
