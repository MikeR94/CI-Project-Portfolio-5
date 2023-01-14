import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const { data } = await axiosReq.get(
          `/champions/?search=${searchQuery}`
        );
        setChampions(data);
        setHasLoaded(true);
        setFilterSelected(false);
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    fetchChampions();
  }, [searchQuery]);

  const getTopChampsFilter = async () => {
    if (filterSelected) {
      const { data } = await axiosReq.get("/champions/");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(false);
    } else {
      const { data } = await axiosReq.get("/champions/?role=top");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(true);
    }
  };

  const getMidChampsFilter = async () => {
    if (filterSelected) {
      const { data } = await axiosReq.get("/champions/");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(false);
    } else {
      const { data } = await axiosReq.get("/champions/?role=mid");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(true);
    }
  };

  const getJungleChampsFilter = async () => {
    if (filterSelected) {
      const { data } = await axiosReq.get("/champions/");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(false);
    } else {
      const { data } = await axiosReq.get("/champions/?role=jungle");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(true);
    }
  };

  const getAdcChampsFilter = async () => {
    if (filterSelected) {
      const { data } = await axiosReq.get("/champions/");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(false);
    } else {
      const { data } = await axiosReq.get("/champions/?role=adc");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(true);
    }
  };

  const getSupportChampsFilter = async () => {
    if (filterSelected) {
      const { data } = await axiosReq.get("/champions/");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(false);
    } else {
      const { data } = await axiosReq.get("/champions/?role=support");
      setChampions(data);
      setHasLoaded(true);
      setFilterSelected(true);
    }
  };

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
              {champions.results.length ? (
                champions.results.map((champions) => (
                  <ChampionCard key={champions.id} {...champions} />
                ))
              ) : (
                <h1>No champions found...</h1>
              )}
            </>
          ) : (
            // TODO - Add a spinner
            <div className="text-center">
              <LoadingSpinner className="text-center"></LoadingSpinner>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChampionSelect;
