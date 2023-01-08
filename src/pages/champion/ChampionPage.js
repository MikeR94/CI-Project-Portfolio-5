import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/ChampionPage.module.css";
import FighterIcon from "../../assets/class_icons/fighter.webp";
import TankIcon from "../../assets/class_icons/tank.webp";
import ControllerIcon from "../../assets/class_icons/controller.webp";
import MageIcon from "../../assets/class_icons/mage.webp";
import MarksmanIcon from "../../assets/class_icons/marksman.webp";
import SlayerIcon from "../../assets/class_icons/slayer.webp";
import SpecialistIcon from "../../assets/class_icons/specialist.webp";
import RangeIcon from "../../assets/range_icons/ranged.png";
import MeleeIcon from "../../assets/range_icons/melee.png";
import LowDifficultyIcon from "../../assets/difficulty_icons/low.webp";
import ModerateDifficultyIcon from "../../assets/difficulty_icons/moderate.webp";
import HighDifficultyIcon from "../../assets/difficulty_icons/high.webp";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import CommentCreateForm from "../comments/CommentCreateForm";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";

const ChampionPage = () => {
  const { id } = useParams();
  const [commentData, setCommentData] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username;
  const is_staff = currentUser?.is_staff;
  const history = useHistory();
  const profile_avatar = currentUser?.profile_avatar;
  const [champData, setChampData] = useState({ results: [] });
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
    champ_class,
    range,
    difficulty,
    upvotes_count,
    upvotes_id,
  } = champData;

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const [{ data: champion }, { data: comment }] = await Promise.all([
          axiosReq.get(`/champions/${id}`),
          axiosReq.get(`/comments/?champion=${id}`),
        ]);
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
          champ_class,
          range,
          difficulty,
          upvotes_count,
          upvotes_id,
        } = champion;
        setCommentData(comment);
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
          champ_class: champ_class,
          range: range,
          difficulty: difficulty,
          upvotes_count: upvotes_count,
          upvotes_id: upvotes_id,
        }));
      } catch (error) {
        console.log(error);
        history.push("/");
      }
    };
    fetchChampion();
  }, [id, history]);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/champions/${id}`);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpVote = async () => {
    try {
      await axiosRes.post("/upvotes/", { champion: id });
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
        champ_class: champ_class,
        range: range,
        difficulty: difficulty,
        upvotes_count: upvotes_count,
        upvotes_id: upvotes_id,
      }));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownVote = async () => {
    try {
      await axiosRes.delete(`/upvotes/${upvotes_id}/`);
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
        champ_class: champ_class,
        range: range,
        difficulty: difficulty,
        upvotes_count: upvotes_count,
        upvotes_id: upvotes_id,
      }));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  let classIcon = "";

  if (champ_class === "controller") {
    classIcon = ControllerIcon;
  } else if (champ_class === "fighter") {
    classIcon = FighterIcon;
  } else if (champ_class === "mage") {
    classIcon = MageIcon;
  } else if (champ_class === "marksman") {
    classIcon = MarksmanIcon;
  } else if (champ_class === "slayer") {
    classIcon = SlayerIcon;
  } else if (champ_class === "specialist") {
    classIcon = SpecialistIcon;
  } else if (champ_class === "tank") {
    classIcon = TankIcon;
  }

  let rangeImage = "";
  let isMelee = false;

  if (range === "melee") {
    rangeImage = MeleeIcon;
    isMelee = true;
  } else if (range === "ranged") {
    rangeImage = RangeIcon;
    isMelee = false;
  }

  let difficultyImage = "";

  if (difficulty === "low") {
    difficultyImage = LowDifficultyIcon;
  } else if (difficulty === "moderate") {
    difficultyImage = ModerateDifficultyIcon;
  } else if (difficulty === "high") {
    difficultyImage = HighDifficultyIcon;
  }

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
        {is_staff && (
          <div>
            <Link to={`/champion/${id}/edit`}>
              <Button className={`${btnStyles.Button}`}>Edit</Button>
            </Link>
            <Button onClick={handleDelete} className={`${btnStyles.Button}`}>
              Delete
            </Button>
          </div>
        )}
        <hr className="mt-5 mb-5"></hr>
        <Row>{lore}</Row>
        <hr className="mt-5 mb-5"></hr>
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
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{ability_1_description}</Tooltip>}
          >
            <img
              src={ability_1_image}
              className={`${styles.AbilityImage}`}
              alt={`${ability_1}`}
            ></img>
          </OverlayTrigger>
          <div className={styles.AbilityType}>Ability 1</div>
          <div className={styles.AbilityName}>{ability_1}</div>
        </Row>
        <Row className="justify-content-center">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{ability_2_description}</Tooltip>}
          >
            <img
              src={ability_2_image}
              className={`${styles.AbilityImage}`}
              alt={`${ability_1}`}
            ></img>
          </OverlayTrigger>
          <div className={styles.AbilityType}>Ability 2</div>
          <div className={styles.AbilityName}>{ability_2}</div>
        </Row>
        <Row className="justify-content-center">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{ability_3_description}</Tooltip>}
          >
            <img
              src={ability_3_image}
              className={`${styles.AbilityImage}`}
              alt={`${ability_3}`}
            ></img>
          </OverlayTrigger>
          <div className={styles.AbilityType}>Ability 3</div>
          <div className={styles.AbilityName}>{ability_3}</div>
        </Row>
        <Row className="justify-content-center">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{ultimate_ability_description}</Tooltip>}
          >
            <img
              src={ultimate_ability_image}
              className={`${styles.AbilityImage}`}
              alt={`${ultimate_ability}`}
            ></img>
          </OverlayTrigger>
          <div className={styles.AbilityType}>Ultimate</div>
          <div className={styles.AbilityName}>{ultimate_ability}</div>
        </Row>
        <hr className="mt-5 mb-5"></hr>
        <Row className="text-center">
          <Col>
            <div>Class</div>
            <img alt="class icon" src={classIcon}></img>
            <div className="text-capitalize">{champ_class}</div>
          </Col>
          <Col>
            <div>Range</div>
            <img
              alt="range icon"
              src={rangeImage}
              className={isMelee ? styles.MeleeIcon : styles.RangeIcon}
            ></img>
            <div className="text-capitalize">{range}</div>
          </Col>
          <Col>
            <div>Difficulty</div>
            <img
              alt="difficulty icon"
              src={difficultyImage}
              className={styles.DifficultyIcon}
            ></img>
            <div className="text-capitalize">{difficulty}</div>
          </Col>
        </Row>
        <hr className="mt-5 mb-5"></hr>
        <Row className={styles.UpVoteTitle}>Up Vote</Row>
        <Row className="align-items-center">
          <Col lg={8}>
            {is_owner && upvotes_id && (
              <div className={styles.UpVoteText}>
                Great! You have successfully upvoted for {name}!
              </div>
            )}
            {!upvotes_id && (
              <div className={styles.UpVoteText}>
                Do you like this champion? Make sure you up-vote it by clicking
                the arrow if you do!
              </div>
            )}
          </Col>
          <Col lg={4}>
            <div className={styles.UpVoteIcon}>
              {is_owner && upvotes_id ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to down vote this champion</Tooltip>}
                >
                  <span onClick={handleDownVote}>
                    <i className="fa fa-angle-down"></i>
                  </span>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to up vote this champion</Tooltip>}
                >
                  <span onClick={handleUpVote}>
                    <i className="fa fa-angle-up"></i>
                  </span>
                </OverlayTrigger>
              )}
            </div>
            <div className="text-center">{upvotes_count}</div>
          </Col>
          <hr className="mt-5 mb-5"></hr>
        </Row>
        <Row className={styles.CommentTitle}>Have Your Say</Row>
        {currentUser ? (
          <CommentCreateForm
            profile_id={currentUser.profile_id}
            profile_avatar={profile_avatar}
            champion={id}
            setCommentData={setCommentData}
          />
        ) : commentData.results.length ? (
          "Comments"
        ) : null}
        {commentData.results.length ? (
          <InfiniteScroll
            children={commentData.results.map((comment) => (
              <Comment
                key={comment.id}
                setCommentData={setCommentData}
                is_staff={is_staff}
                {...comment}
              />
            ))}
            dataLength={commentData.results.length}
            loader="Loading..."
            hasMore={!!commentData.next}
            next={() => fetchMoreData(commentData, setCommentData)}
          />
        ) : currentUser ? (
          <span>No comments yet, be the first to comment!</span>
        ) : (
          <span>No comments, sign up and be the first to comment!</span>
        )}
      </Container>
    </div>
  );
};

export default ChampionPage;
