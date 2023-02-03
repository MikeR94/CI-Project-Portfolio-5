import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styles from "../../styles/Splash.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div>
      <div className={styles.SplashBackground}></div>
      <Container className={styles.InnerContainer}>
        <Row className={styles.WelcomeText}>Welcome to the League Hub!</Row>
        <Row className={styles.DescriptionText}>
          The League Hub is an online resource, focused on providing information
          about league of legend champions and where the community can discuss
          and vote on the current champions that are currently in the game. We
          provide the latest and most up to date information about each champion
          and will have upcoming additional features such as pro teams, latest
          league news, upcoming events and more.{" "}
        </Row>
        <Row className={styles.ButtonRow}>
          <Button as={Link} to="/home" className={btnStyles.Button}>
            Continue
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default SplashPage;
