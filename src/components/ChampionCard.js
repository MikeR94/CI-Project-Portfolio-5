import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../styles/ChampionCard.module.css";
import { Link } from "react-router-dom";

const ChampionCard = (props) => {
  const { champ_image, name, id } = props;
  return (
    <Card className={styles.ChampionCard}>
      <Card.Img
        className={styles.ChampionImage}
        variant="top"
        src={champ_image}
      />
      <Card.Body className={styles.ChampionCardBody}>
        <Link to={`/champion/${id}`}>
          <Card.Title className={styles.ChampionName}>{name}</Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ChampionCard;
