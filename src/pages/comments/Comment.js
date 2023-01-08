import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { Card, Col, Container, Row } from "react-bootstrap";

const Comment = (props) => {
  const {
    profile_id,
    profile_avatar,
    owner,
    updated_at,
    comment,
    setCommentData,
    id,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);

      setCommentData((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
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
              <div className={styles.Owner}>{owner}</div>
              <div className={styles.Date}>{updated_at}</div>
              <div className={styles.Dropdown}>
                {is_owner && !showEditForm && (
                  <div onClick={handleDelete}>
                    <i className="fas fa-trash-alt" />
                  </div>
                )}
                {is_owner && !showEditForm && (
                  <div onClick={() => setShowEditForm(true)}>
                    <i className="fas fa-edit" />
                  </div>
                )}
              </div>
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
                <p>{comment}</p>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Comment;
