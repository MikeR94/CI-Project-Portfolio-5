// React and Router
import React from "react";
import { useLocation } from "react-router-dom";
// Styles
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <div className={styles.Footer}></div>;
};

export default Footer;
