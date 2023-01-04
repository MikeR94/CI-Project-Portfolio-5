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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Avatar src={profile_avatar} />
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={comment}
            onChange={handleChange}
            rows={2}
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
    </Form>
  );
}

export default CommentCreateForm;