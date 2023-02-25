// React and Router
import React from "react";
import { Link } from "react-router-dom";
// Components
import { OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Button, Col, Container } from "react-bootstrap";
// Styles
import styles from "../../styles/Splash.module.css";
import btnStyles from "../../styles/Button.module.css";
// Assets
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
          The League Hub is an online resource, focused on providing the latest
          information about all things League of Legend and where the community
          can interact with each other by leaving comments and upvoting their
          favourite champions. Currently, we provide the latest and most up to
          date information about each champion and will have upcoming additional
          features such as items, professional teams, latest League of Legends
          news, upcoming events and more.{" "}
        </Row>
        <Row className={styles.FeatureRow}>
          <Col className={styles.FeatureCol}>
            <Link to="/home">
              <OverlayTrigger placement="top" overlay={<Tooltip>Live</Tooltip>}>
                <img
                  className={styles.ActiveImage}
                  src={ChampionImage}
                  alt="Champion"
                ></img>
              </OverlayTrigger>
            </Link>
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
