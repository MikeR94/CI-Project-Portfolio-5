// React and Router
import React from "react";
import { Link } from "react-router-dom";
// Components
import Avatar from "../components/Avatar";
import { Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
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
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>{`Click to view ${champions.name}'s page`}</Tooltip>
                        }
                      >
                        <Link to={`/champion/${champions.id}`}>
                          <Avatar src={champions.champ_image} />
                        </Link>
                      </OverlayTrigger>
                    </td>
                    <td>{champions.name}</td>
                    <td>
                      {champions.role === "mid" ? (
                        <Avatar src={MiddleIcon} />
                      ) : champions.role === "top" ? (
                        <Avatar src={TopIcon} />
                      ) : champions.role === "jungle" ? (
                        <Avatar src={JungleIcon} />
                      ) : champions.role === "adc" ? (
                        <Avatar src={AdcIcon} />
                      ) : champions.role === "support" ? (
                        <Avatar src={SupportIcon} />
                      ) : null}
                    </td>
                    <td>
                      {champions.champ_class === "fighter" ? (
                        <Avatar src={FighterIcon} />
                      ) : champions.champ_class === "tank" ? (
                        <Avatar src={TankIcon} />
                      ) : champions.champ_class === "controller" ? (
                        <Avatar src={ControllerIcon} />
                      ) : champions.champ_class === "mage" ? (
                        <Avatar src={MageIcon} />
                      ) : champions.champ_class === "marksman" ? (
                        <Avatar src={MarksmanIcon} />
                      ) : champions.champ_class === "slayer" ? (
                        <Avatar src={SlayerIcon} />
                      ) : champions.champ_class === "specialist" ? (
                        <Avatar src={SpecialistIcon} />
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
                <LoadingSpinner />
              )}
            </>
          </tbody>
        </table>
      </Container>
    </Container>
  );
};

export default Leaderboard;
