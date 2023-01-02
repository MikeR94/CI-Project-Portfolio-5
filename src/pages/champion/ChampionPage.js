import React, { useEffect, useRef, useState } from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ChampionPage.module.css";

const ChampionPage = () => {
  const { id } = useParams();
  const [champData, setChampData] = useState({
    name: "",
    alias: "",
    champ_image: "",
    lore: "",
    passive_ability: "",
    passive_ability_description: "",
    passive_ability_image: "",
    ability_1: "",
    ability_1_description: "",
    ability_1_image: "",
    ability_2: "",
    ability_2_description: "",
    ability_2_image: "",
    ability_3: "",
    ability_3_description: "",
    ability_3_image: "",
    ultimate_ability: "",
    ultimate_ability_description: "",
    ultimate_ability_image: "",
  });
  const {
    name,
    alias,
    champ_image,
    lore,
    passive_ability,
    passive_ability_description,
    passive_ability_image,
    ability_1,
    ability_1_description,
    ability_1_image,
    ability_2,
    ability_2_description,
    ability_2_image,
    ability_3,
    ability_3_description,
    ability_3_image,
    ultimate_ability,
    ultimate_ability_description,
    ultimate_ability_image,
  } = champData;

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/${id}`);
        const {
          name,
          alias,
          champ_image,
          lore,
          passive_ability,
          passive_ability_description,
          passive_ability_image,
          ability_1,
          ability_1_description,
          ability_1_image,
          ability_2,
          ability_2_description,
          ability_2_image,
          ability_3,
          ability_3_description,
          ability_3_image,
          ultimate_ability,
          ultimate_ability_description,
          ultimate_ability_image,
        } = data;
        setChampData(() => ({
          name: name,
          alias: alias,
          champ_image: champ_image,
          lore: lore,
          passive_ability: passive_ability,
          passive_ability_description: passive_ability_description,
          passive_ability_image: passive_ability_image,
          ability_1: ability_1,
          ability_1_description: ability_1_description,
          ability_1_image: ability_1_image,
          ability_2: ability_2,
          ability_2_description: ability_2_description,
          ability_2_image: ability_2_image,
          ability_3: ability_3,
          ability_3_description: ability_3_description,
          ability_3_image: ability_3_image,
          ultimate_ability: ultimate_ability,
          ultimate_ability_description: ultimate_ability_description,
          ultimate_ability_image: ultimate_ability_image,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchChampion();
  }, [id]);

  return (
    <div>
      <Container className="md">
        <Row>
          <img
            src={champ_image}
            className={`${styles.Image}`}
            alt={`${name}`}
          ></img>
        </Row>
        <Row className={styles.Name}>{name}</Row>
        <Row className={styles.Alias}>{alias}</Row>
        <hr></hr>
        <Row>{lore}</Row>
        <hr></hr>
        <Row className="justify-content-center">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{passive_ability_description}</Tooltip>}
          >
            <img
              src={passive_ability_image}
              className={`${styles.AbilityImage}`}
              alt={`${passive_ability}`}
            ></img>
          </OverlayTrigger>
          <div className={styles.AbilityType}>Passive</div>
          <div className={styles.AbilityName}>{passive_ability}</div>
        </Row>
        <Row className="justify-content-center">
          <img
            src={ability_1_image}
            className={`${styles.AbilityImage}`}
            alt={`${ability_1}`}
          ></img>
          <div className={styles.AbilityType}>Ability 1</div>
          <div className={styles.AbilityName}>{ability_1}</div>
        </Row>
        <Row className="justify-content-center">
          <img
            src={ability_2_image}
            className={`${styles.AbilityImage}`}
            alt={`${ability_2}`}
          ></img>
          <div className={styles.AbilityType}>Ability 2</div>
          <div className={styles.AbilityName}>{ability_2}</div>
        </Row>
        <Row className="justify-content-center">
          <img
            src={ability_3_image}
            className={`${styles.AbilityImage}`}
            alt={`${ability_3}`}
          ></img>
          <div className={styles.AbilityType}>Ability 3</div>
          <div className={styles.AbilityName}>{ability_3}</div>
        </Row>
        <Row className="justify-content-center">
          <img
            src={ultimate_ability_image}
            className={`${styles.AbilityImage}`}
            alt={`${ultimate_ability}`}
          ></img>
          <div className={styles.AbilityType}>Ultimate</div>
          <div className={styles.AbilityName}>{ultimate_ability}</div>
        </Row>
        <hr></hr>
        <div>Class</div>
        <div>Range</div>
        <div>Ability</div>
      </Container>
    </div>
  );
};

export default ChampionPage;
