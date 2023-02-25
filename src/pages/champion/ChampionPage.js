// React and Router
import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
// API
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import { Button, Col, Container } from "react-bootstrap";
import { OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentCreate from "../comments/CommentCreate";
import LoadingSpinner from "../../components/LoadingSpinner";
import Modal from "react-modal";
// Styles
import styles from "../../styles/ChampionPage.module.css";
// Utils
import { fetchMoreData } from "../../utils/utils";
// Assets
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

const ChampionPage = () => {
  const { id } = useParams();
  const [commentData, setCommentData] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username;
  const is_staff = currentUser?.is_staff;
  const history = useHistory();
  const [hasLoaded, setHasLoaded] = useState(false);
  const profile_avatar = currentUser?.profile_avatar;
  const [champData, setChampData] = useState({ results: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const classIcons = {
    controller: ControllerIcon,
    fighter: FighterIcon,
    mage: MageIcon,
    marksman: MarksmanIcon,
    slayer: SlayerIcon,
    specialist: SpecialistIcon,
    tank: TankIcon,
  };
  const rangeImages = {
    melee: { icon: MeleeIcon, isMelee: true },
    ranged: { icon: RangeIcon, isMelee: false },
  };
  const difficultyIcons = {
    low: LowDifficultyIcon,
    moderate: ModerateDifficultyIcon,
    high: HighDifficultyIcon,
  };

  /**
   * Destructure champData
   */
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

  /**
   * Retrieve both champion and comment data from the API
   */
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
        setHasLoaded(true);
      } catch (error) {
        NotificationManager.error(
          "There was an issue retrieving the champion data",
          "Error"
        );
        history.push("/home");
      }
    };
    fetchChampion();
  }, [id, history]);

  // Set the classIcon image depending on the champ_class data value
  let classIcon = classIcons[champ_class] || "";

  // Set the range image depending on the range data value
  let { icon: rangeImage, isMelee } = rangeImages[range] || {};

  // Set the difficulty image depending on the difficulty data value
  let difficultyImage = difficultyIcons[difficulty] || "";

  /**
   * Function to delete a champion
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/champions/${id}/delete/`);
      history.push("/home");
      NotificationManager.success(
        "Champion " + name + " successfully deleted",
        "Success!"
      );
    } catch (error) {
      NotificationManager.error(
        "There was an error trying to delete the champion"
      );
    }
  };

  /**
   * Function to toggle the modal
   */
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  /**
   * Function to handle when a user upvotes a champion
   */
  const handleUpVote = async () => {
    try {
      const { data } = await axiosRes.post("/upvotes/", { champion: id });
      setChampData((prevChampData) => ({
        ...prevChampData,
        upvotes_count: prevChampData.upvotes_count + 1,
        upvotes_id: data.id,
      }));
      NotificationManager.success(
        "Your upvote has been added for the champion " + name,
        "Success!"
      );
    } catch (error) {
      NotificationManager.error(
        "There was an issue upvoting this champion",
        "Error"
      );
    }
  };

  /**
   * Function to handle when a user downvotes a champion
   */
  const handleDownVote = async () => {
    try {
      await axiosRes.delete(`/upvotes/${upvotes_id}/`);
      setChampData((prevChampData) => ({
        ...prevChampData,
        upvotes_count: prevChampData.upvotes_count - 1,
        upvotes_id: null,
      }));
      NotificationManager.success(
        "Your upvote has been removed for the champion " + name,
        "Success!"
      );
    } catch (error) {
      NotificationManager.error(
        "There was an issue downvoting this champion",
        "Error"
      );
    }
  };

  return (
    <div>
      {hasLoaded ? (
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
          <Row className="text-center">
            {is_staff && (
              <div>
                <Link to={`/champion/${id}/edit/`}>
                  <i className={`fas fa-edit ${styles.ManageChampion}`} />
                </Link>
                <i
                  onClick={toggleModal}
                  className={`fas fa-trash-alt ${styles.ManageChampion}`}
                />
              </div>
            )}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              ariaHideApp={false}
              contentLabel="My dialog"
              className={styles.Modal}
              overlayClassName={styles.Overlay}
              closeTimeoutMS={200}
            >
              <div className={styles.ModalText}>
                <p>Are you sure you want to delete this champion?</p>
              </div>
              <div className={styles.ModalButtons}>
                <Button
                  className={styles.Button}
                  onClick={() => setModalIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className={styles.Button}
                  onClick={() => handleDelete()}
                >
                  Delete
                </Button>
              </div>
            </Modal>
          </Row>
          <hr className="mt-5 mb-5"></hr>
          <Row className={styles.Lore}>{lore}</Row>
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
          <Row className={styles.CRDRow}>
            <Col>
              <img
                alt="class icon"
                className={styles.ClassIcon}
                src={classIcon}
              ></img>
              <div className={styles.CRDText}>{champ_class}</div>
            </Col>
            <Col>
              <img
                alt="range icon"
                src={rangeImage}
                className={isMelee ? styles.MeleeIcon : styles.RangeIcon}
              ></img>
              <div className={styles.CRDText}>{range}</div>
            </Col>
            <Col>
              <img
                alt="difficulty icon"
                src={difficultyImage}
                className={styles.DifficultyIcon}
              ></img>
              <div className={styles.CRDText}>{difficulty}</div>
            </Col>
          </Row>
          <br className={styles.Br}></br>
          <br className={styles.Br}></br>
          <hr className="mt-5 mb-5"></hr>
          <Row className={styles.UpVoteTitle}>Up Vote</Row>
          <Row className="align-items-center">
            <Col lg={8}>
              {is_owner && upvotes_id && (
                <div className={styles.UpVoteText}>
                  Great! You have successfully upvoted for{" "}
                  <span className={styles.UpVoteName}>{name}</span> Make sure to
                  check out the leaderboard!
                </div>
              )}
              {!upvotes_id && is_owner && (
                <div className={styles.UpVoteText}>
                  Do you like this champion? Make sure you up-vote it by
                  clicking the arrow if you do!
                </div>
              )}{" "}
              {!is_owner && !upvotes_id && (
                <div className={styles.UpVoteText}>
                  Do you like this champion? Make sure to log in so you can cast
                  your vote!
                </div>
              )}
              {upvotes_id && !is_owner && (
                <div className={styles.UpVoteText}>
                  Do you like this champion? Make sure to log in so you can cast
                  your vote!
                </div>
              )}
            </Col>
            <Col lg={4}>
              <div className={styles.UpVoteIcon}>
                {is_owner && upvotes_id && (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Click to downvote this champion</Tooltip>}
                  >
                    <span onClick={handleDownVote}>
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </OverlayTrigger>
                )}
                {is_owner && !upvotes_id && (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Click to up vote this champion</Tooltip>}
                  >
                    <span onClick={handleUpVote}>
                      <i className="fa fa-angle-up"></i>
                    </span>
                  </OverlayTrigger>
                )}
                {!is_owner && !upvotes_id && (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Log in to cast your vote!</Tooltip>}
                  >
                    <span>
                      <i className="fa fa-angle-up"></i>
                    </span>
                  </OverlayTrigger>
                )}
                {!is_owner && upvotes_id && (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Log in to cast your vote!</Tooltip>}
                  >
                    <span>
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
            <CommentCreate
              profile_id={currentUser.profile_id}
              profile_avatar={profile_avatar}
              champion={id}
              setCommentData={setCommentData}
            />
          ) : commentData.results.length ? (
            ""
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
              loader={<LoadingSpinner />}
              hasMore={!!commentData.next}
              next={() => fetchMoreData(commentData, setCommentData)}
              endMessage={
                <div className={styles.CommentInfo}>
                  Great! You've seen all the comments!
                </div>
              }
            />
          ) : currentUser ? (
            <div className={styles.CommentInfo}>
              No comments yet, be the first to comment!
            </div>
          ) : (
            <div className={styles.CommentInfo}>
              No comments, sign up and be the first to comment!
            </div>
          )}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ChampionPage;
