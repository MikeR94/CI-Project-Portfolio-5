import React from "react";
import Media from "react-bootstrap/Media";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_avatar, owner, updated_at, comment } = props;

  return (
    <>
      <Media>
        <Avatar src={profile_avatar} />
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{comment}</p>
        </Media.Body>
      </Media>
    </>
  );
};

export default Comment;
