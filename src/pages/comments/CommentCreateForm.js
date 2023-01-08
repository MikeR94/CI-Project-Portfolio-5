import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { setCommentData, profile_avatar, champion } = props;
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        comment,
        champion,
      });
      setCommentData((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group className="d-flex align-items-center">
        <Avatar className={styles.Avatar} src={profile_avatar} />
        <InputGroup className={styles.Input}>
          <Form.Control
            className={styles.Form}
            placeholder="Type your comment here, we would love to hear your opinions!"
            as="textarea"
            value={comment}
            onChange={handleChange}
            rows={3}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!comment.trim()}
        type="submit"
      >
        Submit
      </button>
      <hr></hr>
    </Form>
  );
}

export default CommentCreateForm;
