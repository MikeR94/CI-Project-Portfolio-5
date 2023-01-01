import React, { useEffect, useState } from "react";
import RoleIcon from "../../components/RoleIcon";
import SupportIcon from "../../assets/support.png";
import AdcIcon from "../../assets/adc.png";
import JungleIcon from "../../assets/jungle.png";
import TopIcon from "../../assets/top.png";
import MiddleIcon from "../../assets/middle.png";
import styles from "../../styles/ChampionSelect.module.css";
import ChampionCard from "../../components/ChampionCard";
import AatroxImage from "../../assets/Aatrox.jpg";
import AhriImage from "../../assets/Ahri.jpg";
import AkaliImage from "../../assets/Akali.jpg";
import AkshanImage from "../../assets/Akshan.jpg";
import AlistairImage from "../../assets/Alistair.jpg";
import AmumuImage from "../../assets/Amumu.jpg";
import AniviaImage from "../../assets/Anivia.jpg";
import AnnieImage from "../../assets/Annie.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const OldChampionSelect = () => {
  const [champions, setChampions] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const { data } = await axiosReq.get("/champions/");
        setChampions(data.results);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchChampions();
  }, []);

  console.log(champions);

  const RoleIcons = (
    <>
      <RoleIcon src={SupportIcon} height={50}></RoleIcon>
      <RoleIcon src={AdcIcon} height={50}></RoleIcon>
      <RoleIcon src={JungleIcon} height={50}></RoleIcon>
      <RoleIcon src={TopIcon} height={50}></RoleIcon>
      <RoleIcon src={MiddleIcon} height={50}></RoleIcon>
    </>
  );
  return (
    <div className={styles.RoleIconSection}>
      <div>{RoleIcons}</div>
      <Container className="mt-5">
        <Row className={styles.Row}>
          <Col>
            <ChampionCard
              imgsrc={AatroxImage}
              champName="Aatrox"
            ></ChampionCard>
          </Col>
          <Col>
            <ChampionCard imgsrc={AhriImage} champName="Ahri"></ChampionCard>
          </Col>
          <Col>
            <ChampionCard imgsrc={AkaliImage} champName="Akali"></ChampionCard>
          </Col>
          <Col>
            <ChampionCard
              imgsrc={AkshanImage}
              champName="Akshan"
            ></ChampionCard>
          </Col>
        </Row>
        <Row className={styles.Row}>
          <Col>
            <ChampionCard
              imgsrc={AlistairImage}
              champName="Alistair"
            ></ChampionCard>
          </Col>
          <Col>
            <ChampionCard imgsrc={AmumuImage} champName="Amumu"></ChampionCard>
          </Col>
          <Col>
            <ChampionCard
              imgsrc={AniviaImage}
              champName="Anivia"
            ></ChampionCard>
          </Col>
          <Col>
            <ChampionCard imgsrc={AnnieImage} champName="Annie"></ChampionCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OldChampionSelect;
