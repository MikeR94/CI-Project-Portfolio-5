import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { Container } from "react-bootstrap";
import styles from "../../styles/ChampionLeaderboard.module.css";

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
                  <td>{champions.role}</td>
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
