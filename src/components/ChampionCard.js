import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../styles/ChampionCard.module.css";

const ChampionCard = (props) => {
  const { champ_image, name } = props;
  return (
    <Card className={styles.ChampionCard}>
      <Card.Img
        className={styles.ChampionImage}
        variant="top"
        src={champ_image}
      />
      <Card.Body className={styles.ChampionCardBody}>
        <Card.Title className={styles.ChampionName}>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ChampionCard;
