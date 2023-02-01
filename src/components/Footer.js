import React from "react";
import styles from "../styles/Footer.module.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <div className={styles.Footer}></div>;
};

export default Footer;
