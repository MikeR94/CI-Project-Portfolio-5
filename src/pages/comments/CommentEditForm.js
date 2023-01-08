import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button } from "react-bootstrap";

function CommentEditForm(props) {
  const { id, comment, setShowEditForm, setCommentData } = props;

  const [formContent, setFormContent] = useState(comment);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        comment: formContent.trim(),
      });
      setCommentData((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Input}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={3}
        />
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
    </Form>
  );
}

export default CommentEditForm;
