import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ChampionCard.module.css";

const ChampionCard = ({ imgsrc, champName }) => {
  return (
    <Card className={styles.ChampionCard}>
      <Card.Img className={styles.ChampionImage} variant="top" src={imgsrc} />
      <Card.Body className={styles.ChampionCardBody}>
        <Card.Title className={styles.ChampionName}>{champName}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ChampionCard;
