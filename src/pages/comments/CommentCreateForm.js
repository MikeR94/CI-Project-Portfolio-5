// React and Router
import React, { useState } from "react";
// API
import { axiosRes } from "../../api/axiosDefaults";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import Form from "react-bootstrap/Form";
import Avatar from "../../components/Avatar";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
// Styles
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function CommentCreateForm(props) {
  const { setCommentData, profile_avatar, champion } = props;
  const [comment, setComment] = useState("");

  /**
   * Function to set the comment state to what
   * the user inputs in the input field
   */
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  /**
   * Function to handle form submission
   */
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
      NotificationManager.success(
        "Your comment was added successfully",
        "Success!"
      );
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
      <div className={styles.ButtonContainer}>
        <Button
          className={`${btnStyles.Button} mt-3 `}
          disabled={!comment.trim()}
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </div>

      <hr></hr>
    </Form>
  );
}

export default CommentCreateForm;
