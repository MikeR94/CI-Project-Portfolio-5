import React from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import styles from "../../styles/Splash.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import ChampionImage from "../../assets/splash_images/champion.jpg";
import ItemImage from "../../assets/splash_images/item.webp";
import TrophyImage from "../../assets/splash_images/trophy.jpg";
import NewsImage from "../../assets/splash_images/news.jpg";

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
        <Row className={styles.FeatureRow}>
          <Col className={styles.FeatureCol}>
            <OverlayTrigger placement="top" overlay={<Tooltip>Live</Tooltip>}>
              <img
                className={styles.ActiveImage}
                src={ChampionImage}
                alt="Champion"
              ></img>
            </OverlayTrigger>
            <p className={styles.FeatureText}>Champions</p>
          </Col>
          <Col className={styles.FeatureCol}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Coming soon</Tooltip>}
            >
              <img
                className={styles.InactiveImage}
                src={ItemImage}
                alt="Item"
              ></img>
            </OverlayTrigger>
            <p className={styles.FeatureText}>Items</p>
          </Col>
          <Col className={styles.FeatureCol}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Coming soon</Tooltip>}
            >
              <img
                className={styles.InactiveImage}
                src={TrophyImage}
                alt="Trophy"
              ></img>
            </OverlayTrigger>
            <p className={styles.FeatureText}>Events</p>
          </Col>
          <Col className={styles.FeatureCol}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Coming soon</Tooltip>}
            >
              <img
                className={styles.InactiveImage}
                src={NewsImage}
                alt="News"
              ></img>
            </OverlayTrigger>
            <p className={styles.FeatureText}>News</p>
          </Col>
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
