// React and Router
import React, { useState } from "react";
// API
import { axiosRes } from "../../api/axiosDefaults";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import Form from "react-bootstrap/Form";
import { Button, InputGroup } from "react-bootstrap";
// Styles
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const CommentEdit = (props) => {
  const { id, comment, setShowEditForm, setCommentData } = props;
  const [editedComment, setEditedComment] = useState(comment);

  /**
   * Function to set the editedComment state to what
   * the user inputs in the input field
   */
  const handleChange = (event) => {
    setEditedComment(event.target.value);
  };

  /**
   * Function to handle form submission
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        comment: editedComment.trim(),
      });
      setCommentData((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment: editedComment.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
      NotificationManager.success("Your comment has been updated", "Success!");
    } catch (error) {
      NotificationManager.error(
        "There was an issue updating your comment",
        "Error"
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <InputGroup className={styles.Input}>
          <Form.Control
            as="textarea"
            value={editedComment}
            onChange={handleChange}
            rows={3}
          />
        </InputGroup>
      </Form.Group>
      <div className="d-flex justify-content-end mt-2 ">
        <Button
          className={`me-2 ${btnStyles.Button}`}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </Button>
        <Button className={btnStyles.Button} type="submit">
          Save
        </Button>
      </div>
      <hr />
    </Form>
  );
};

export default CommentEdit;
