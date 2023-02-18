// React and Router
import React from "react";
// Components
import { Col, Row } from "react-bootstrap";
// Assets
import TeemoImage from "../assets/teemo-image.png";
// Styles
import styles from "../styles/PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <Row className={`${styles.RowContainer}`}>
      <Col xs={10} md={8} className={`text-center ${styles.Col}`}>
        <div className={styles.Title}>Page Not Found</div>
        <div className="mb-5">
          Oh no! Think you've taken a wrong turn. We can't seem to find that
          page or you don't have access
        </div>
        <div className={styles.TeemoImage}>
          <img className="img-fluid" src={TeemoImage} alt="Teemo"></img>
        </div>
      </Col>
    </Row>
  );
};

export default PageNotFound;
