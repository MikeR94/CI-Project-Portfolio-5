// React and Router
import React from "react";
// Components
import Avatar from "../components/Avatar";
import { Container, Row } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
// Styles
import styles from "../styles/ChampionLeaderboard.module.css";
// Assets
import SupportIcon from "../assets/role_icons/support.png";
import AdcIcon from "../assets/role_icons/adc.png";
import JungleIcon from "../assets/role_icons/jungle.png";
import TopIcon from "../assets/role_icons/top.png";
import MiddleIcon from "../assets/role_icons/middle.png";
import LowDifficultyIcon from "../assets/difficulty_icons/low.webp";
import ModerateDifficultyIcon from "../assets/difficulty_icons/moderate.webp";
import HighDifficultyIcon from "../assets/difficulty_icons/high.webp";
import FighterIcon from "../assets/class_icons/fighter.webp";
import TankIcon from "../assets/class_icons/tank.webp";
import ControllerIcon from "../assets/class_icons/controller.webp";
import MageIcon from "../assets/class_icons/mage.webp";
import MarksmanIcon from "../assets/class_icons/marksman.webp";
import SlayerIcon from "../assets/class_icons/slayer.webp";
import SpecialistIcon from "../assets/class_icons/specialist.webp";

const Leaderboard = ({ champions }) => {
  return (
    <Container>
      <Row className="mt-5">
        <h1 className={styles.Header}>Leaderboard</h1>
        <hr></hr>
      </Row>
      <Container className={styles.Container}>
        <table className={styles.LeaderboardResults} width="100%">
          <thead>
            <tr>
              <th>Rank</th>
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
              {champions.length ? (
                champions.map((champions) => (
                  <tr key={champions.id}>
                    <td>{champions.rank}</td>
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
                    <td>
                      {champions.champ_class === "fighter" ? (
                        <Avatar src={FighterIcon}></Avatar>
                      ) : champions.champ_class === "tank" ? (
                        <Avatar src={TankIcon}></Avatar>
                      ) : champions.champ_class === "controller" ? (
                        <Avatar src={ControllerIcon}></Avatar>
                      ) : champions.champ_class === "mage" ? (
                        <Avatar src={MageIcon}></Avatar>
                      ) : champions.champ_class === "marksman" ? (
                        <Avatar src={MarksmanIcon}></Avatar>
                      ) : champions.champ_class === "slayer" ? (
                        <Avatar src={SlayerIcon}></Avatar>
                      ) : champions.champ_class === "specialist" ? (
                        <Avatar src={SpecialistIcon}></Avatar>
                      ) : null}
                    </td>
                    <td>
                      {champions.difficulty === "low" ? (
                        <img
                          className={styles.DifficultyIcon}
                          alt="difficulty icon"
                          src={LowDifficultyIcon}
                        ></img>
                      ) : champions.difficulty === "moderate" ? (
                        <img
                          className={styles.DifficultyIcon}
                          alt="difficulty icon"
                          src={ModerateDifficultyIcon}
                        ></img>
                      ) : champions.difficulty === "high" ? (
                        <img
                          className={styles.DifficultyIcon}
                          alt="difficulty icon"
                          src={HighDifficultyIcon}
                        ></img>
                      ) : null}
                    </td>
                    <td>{champions.upvotes_count}</td>
                  </tr>
                ))
              ) : (
                <LoadingSpinner></LoadingSpinner>
              )}
            </>
          </tbody>
        </table>
      </Container>
    </Container>
  );
};

export default Leaderboard;
