// React and Router
import React, { useState } from "react";
// API
import { axiosRes } from "../../api/axiosDefaults";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import CommentEditForm from "./CommentEditForm";
import Modal from "react-modal";
// Styles
import styles from "../../styles/Comment.module.css";
// Assets
import StaffCrownIcon from "../../assets/staff_crown.png";

const Comment = (props) => {
  const {
    profile_id,
    profile_avatar,
    owner,
    updated_at,
    comment,
    setCommentData,
    id,
    is_staff,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const is_staff_member = currentUser?.is_staff;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * Function to toggle the value of the
   * modalIsOpen state
   */
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  /**
   * Function to handle when a user
   * deletes a comment
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/delete/${id}/`);

      setCommentData((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      if (is_owner) {
        NotificationManager.success(
          "Your comment has been deleted",
          "Success!"
        );
      } else {
        NotificationManager.success("The comment has been deleted", "Success!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-12">
            <Card.Header className={styles.Header}>
              <Avatar src={profile_avatar} />
              <div className={styles.Owner}>
                {is_staff && (
                  <img
                    src={StaffCrownIcon}
                    alt="staff crown"
                    className={styles.StaffCrown}
                  ></img>
                )}
                {owner}
              </div>
              <div className={styles.Date}>{updated_at}</div>
              <div className={styles.Dropdown}>
                {is_owner && !showEditForm && (
                  <div onClick={() => setShowEditForm(true)}>
                    <i className={`fas fa-edit ${styles.ManageComment}`} />
                  </div>
                )}
                {is_staff_member && !showEditForm && (
                  <div onClick={toggleModal}>
                    <i className={`fas fa-trash-alt ${styles.ManageComment}`} />
                  </div>
                )}
                {is_owner && !showEditForm && !is_staff_member && (
                  <div onClick={toggleModal}>
                    <i className={`fas fa-trash-alt ${styles.ManageComment}`} />
                  </div>
                )}
              </div>
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
                  <p>Are you sure you want to delete this comment?</p>
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
            </Card.Header>
            <Card.Body>
              {showEditForm ? (
                <CommentEditForm
                  id={id}
                  profile_id={profile_id}
                  comment={comment}
                  profileImage={profile_avatar}
                  setCommentData={setCommentData}
                  setShowEditForm={setShowEditForm}
                />
              ) : (
                <div>
                  {comment}
                  <hr></hr>
                </div>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Comment;
