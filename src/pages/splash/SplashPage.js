import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SplashImage from "../../assets/splash_images/splash_image.webp";
import styles from "../../styles/Splash.module.css";
import btnStyles from "../../styles/Button.module.css";

const SplashPage = () => {
  return (
    <div className={styles.SplashContainer}>
      <Container>
        <Row>
          <p className={styles.WelcomeText}>Welcome to the League Hub!</p>
          <hr></hr>
        </Row>
        <Row className={styles.TextImageRow}>
          <Col xs={12} md={6}>
            <p className={styles.DescriptionText}>
              The League Hub is an online resource, focused on providing
              information about league of legend champions and where the
              community can discuss and vote on the current champions that are
              currently in the game. We provide the latest and most up to date
              information about each champion and will have upcoming additional
              features such as pro teams, latest league news, upcoming events
              and more.
            </p>
            <Button className={btnStyles.Button}>Continue</Button>
          </Col>
          <Col xs={12} md={6}>
            <img
              className={styles.SplashImage}
              alt="splash page"
              src={SplashImage}
            ></img>
          </Col>
        </Row>
        <Row className={styles.Continue}></Row>
      </Container>
    </div>
  );
};

export default SplashPage;
