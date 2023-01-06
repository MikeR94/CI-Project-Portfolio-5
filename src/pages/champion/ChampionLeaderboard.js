import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { Container } from "react-bootstrap";
import styles from "../../styles/ChampionLeaderboard.module.css";
import SupportIcon from "../../assets/role_icons/support.png";
import AdcIcon from "../../assets/role_icons/adc.png";
import JungleIcon from "../../assets/role_icons/jungle.png";
import TopIcon from "../../assets/role_icons/top.png";
import MiddleIcon from "../../assets/role_icons/middle.png";

const ChampionLeaderboard = () => {
  const [champions, setChampions] = useState({ results: [] });

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/leaderboard`);
        setChampions(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChampions();
  }, []);

  console.log(champions);
  return (
    <Container className={styles.Container}>
      <table className={styles.LeaderboardResults} width="100%">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Role</th>
            <th>Class</th>
            <th>Difficulty</th>
            <th>Upvotes</th>
          </tr>
        </thead>
        <tbody>
          <>
            {champions.results.length ? (
              champions.results.map((champions) => (
                <tr>
                  <td>
                    <Avatar src={champions.champ_image}></Avatar>
                  </td>
                  <td>{champions.name}</td>
                  <td>
                    {champions.role === "mid" ? (
                      <Avatar src={MiddleIcon}></Avatar>
                    ) : champions.role === "top" ? (
                      <Avatar src={TopIcon}></Avatar>
                    ) : champions.role === "jungle" ? (
                      <Avatar src={JungleIcon}></Avatar>
                    ) : champions.role === "adc" ? (
                      <Avatar src={AdcIcon}></Avatar>
                    ) : champions.role === "support" ? (
                      <Avatar src={SupportIcon}></Avatar>
                    ) : null}
                  </td>
                  <td>{champions.champ_class}</td>
                  <td>{champions.difficulty}</td>
                  <td>{champions.upvotes_count}</td>
                </tr>
              ))
            ) : (
              <h1>Loading....</h1>
            )}
          </>
        </tbody>
      </table>
    </Container>
  );
};

export default ChampionLeaderboard;
