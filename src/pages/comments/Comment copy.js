import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { Container } from "react-bootstrap";

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
        <Media className="d-flex">
          <Avatar src={profile_avatar} />
          <Media.Body className="align-self-center">
            <span className={styles.Owner}>{owner}</span>
            <span className={styles.Date}>{updated_at}</span>
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
          </Media.Body>
          {is_owner && !showEditForm && (
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          )}
        </Media>
      </Container>
    </>
  );
};

export default Comment;
