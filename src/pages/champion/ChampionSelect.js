import React, { useEffect, useState } from "react";
import RoleIcon from "../../components/RoleIcon";
import SupportIcon from "../../assets/support.png";
import AdcIcon from "../../assets/adc.png";
import JungleIcon from "../../assets/jungle.png";
import TopIcon from "../../assets/top.png";
import MiddleIcon from "../../assets/middle.png";
import styles from "../../styles/ChampionSelect.module.css";
import ChampionCard from "../../components/ChampionCard";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const ChampionSelect = () => {
  const [champions, setChampions] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const { data } = await axiosReq.get("/champions/");
        setChampions(data);
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
        <div className={`${styles.Grid}`}>
          {hasLoaded ? (
            <>
              {champions.results.length ? (
                champions.results.map((champions) => (
                  <ChampionCard key={champions.id} {...champions} />
                ))
              ) : (
                <h1>Test 1</h1>
              )}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChampionSelect;
