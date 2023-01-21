import React, { useEffect, useState, useCallback } from "react";
import RoleIcon from "../../components/RoleIcon";
import SupportIcon from "../../assets/role_icons/support.png";
import AdcIcon from "../../assets/role_icons/adc.png";
import JungleIcon from "../../assets/role_icons/jungle.png";
import TopIcon from "../../assets/role_icons/top.png";
import MiddleIcon from "../../assets/role_icons/middle.png";
import styles from "../../styles/ChampionSelect.module.css";
import ChampionCard from "../../components/ChampionCard";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useSearchQueryContext } from "../../contexts/SearchQueryContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const ChampionSelect = () => {
  const [champions, setChampions] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const { searchQuery } = useSearchQueryContext();

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

  const setFilter = (isSelected) => setFilterSelected(isSelected);

  useEffect(() => {
    setHasLoaded(false);
    fetchChampionData();
  }, [searchQuery, fetchChampionData]);

  const getTopChampsFilter = () => {
    if (filterSelected) {
      setFilter(false);
      fetchChampionData();
    } else {
      setFilter(true);
      fetchChampionData("&role=top");
    }
  };

  const getMidChampsFilter = () => {
    if (filterSelected) {
      setFilter(false);
      fetchChampionData();
    } else {
      setFilter(true);
      fetchChampionData("&role=mid");
    }
  };

  const getJungleChampsFilter = () => {
    if (filterSelected) {
      setFilter(false);
      fetchChampionData();
    } else {
      setFilter(true);
      fetchChampionData("&role=jungle");
    }
  };

  const getAdcChampsFilter = () => {
    if (filterSelected) {
      setFilter(false);
      fetchChampionData();
    } else {
      setFilter(true);
      fetchChampionData("&role=adc");
    }
  };

  const getSupportChampsFilter = () => {
    if (filterSelected) {
      setFilter(false);
      fetchChampionData();
    } else {
      setFilter(true);
      fetchChampionData("&role=support");
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
        onClick={getSupportChampsFilter}
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={AdcIcon}
        onClick={getAdcChampsFilter}
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={JungleIcon}
        onClick={getJungleChampsFilter}
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={TopIcon}
        onClick={getTopChampsFilter}
        height={50}
      ></RoleIcon>
      <RoleIcon
        src={MiddleIcon}
        onClick={getMidChampsFilter}
        height={50}
      ></RoleIcon>
    </>
  );
  return (
    <div className={styles.RoleIconSection}>
      <div>{RoleIcons}</div>

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
