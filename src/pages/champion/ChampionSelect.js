import React, { useEffect, useState, useCallback } from "react";
import RoleIcon from "../../components/RoleIcon";
import SupportIcon from "../../assets/role_icons/support.png";
import AdcIcon from "../../assets/role_icons/adc.png";
import JungleIcon from "../../assets/role_icons/jungle.png";
import TopIcon from "../../assets/role_icons/top.png";
import MiddleIcon from "../../assets/role_icons/middle.png";
import styles from "../../styles/ChampionSelect.module.css";
import ChampionCard from "../../components/ChampionCard";
import { Container, Row } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useSearchQueryContext } from "../../contexts/SearchQueryContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const ChampionSelect = () => {
  const [champions, setChampions] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [previousFilter, setPreviousFilter] = useState(null);
  const { searchQuery } = useSearchQueryContext();
  const [header, setHeader] = useState("All");

  const fetchChampionData = useCallback(
    async (roleFilter = "") => {
      try {
        const { data } = await axiosReq.get(
          `/champions/?search=${searchQuery}${roleFilter}`
        );
        setChampions(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    },
    [searchQuery]
  );

  useEffect(() => {
    setHasLoaded(false);
    fetchChampionData();
  }, [searchQuery, fetchChampionData]);

  const handleFilter = (filter) => {
    if (filterSelected && activeFilter === filter) {
      setFilterSelected(false);
      setActiveFilter(null);
      setPreviousFilter(filter);
      fetchChampionData();
      setHeader("All");
    } else {
      setFilterSelected(true);
      setPreviousFilter(activeFilter);
      setActiveFilter(filter);
      fetchChampionData(`&role=${filter}`);
      setHeader(filter);
    }
  };

  const NoChampsFound = (
    <>
      <span className={`${styles.NoChampsFound}`}>No champions found...</span>
    </>
  );

  const RoleIcons = (
    <>
      <RoleIcon
        src={SupportIcon}
        onClick={() => handleFilter("support")}
        activeFilter={activeFilter}
        previousFilter={previousFilter}
        filter="support"
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={AdcIcon}
        onClick={() => handleFilter("adc")}
        activeFilter={activeFilter}
        previousFilter={previousFilter}
        filter="adc"
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={JungleIcon}
        onClick={() => handleFilter("jungle")}
        activeFilter={activeFilter}
        previousFilter={previousFilter}
        filter="jungle"
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={TopIcon}
        onClick={() => handleFilter("top")}
        activeFilter={activeFilter}
        previousFilter={previousFilter}
        filter="top"
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={MiddleIcon}
        onClick={() => handleFilter("mid")}
        activeFilter={activeFilter}
        previousFilter={previousFilter}
        filter="mid"
        height={50}
      ></RoleIcon>
    </>
  );
  return (
    <div className={styles.RoleIconSection}>
      <div>{RoleIcons}</div>
      {!searchQuery && (
        <Row className="mt-5">
          <h1 className={styles.Header}>Champions - {header}</h1>
          <hr></hr>
        </Row>
      )}
      {searchQuery && (
        <Row className="mt-5">
          <h1 className={styles.Header}>
            Searching for champion - {searchQuery}
          </h1>
          <hr></hr>
        </Row>
      )}

      <Container className="mt-5">
        <div className={`${styles.Grid}`}>
          {hasLoaded ? (
            <>
              {champions.results.length
                ? champions.results.map((champions) => (
                    <ChampionCard key={champions.id} {...champions} />
                  ))
                : NoChampsFound}
            </>
          ) : (
            <LoadingSpinner></LoadingSpinner>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChampionSelect;
