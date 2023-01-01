import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ChampionPage.module.css";

const ChampionPage = () => {
  const { id } = useParams();
  const [champData, setChampData] = useState({
    name: "",
    alias: "",
    champ_image: "",
  });
  const { name, alias, champ_image } = champData;

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/${id}`);
        const { name, alias, champ_image } = data;
        setChampData(() => ({
          name: name,
          alias: alias,
          champ_image: champ_image,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchChampion();
  }, []);

  console.log(name);

  return (
    <div>
      <Container className="md">
        <Row>
          <img src={champ_image} className={`${styles.Image}`}></img>
        </Row>
        <Row className={styles.Name}>{name}</Row>
        <Row className={styles.Alias}>{alias}</Row>
      </Container>
    </div>
  );
};

export default ChampionPage;
