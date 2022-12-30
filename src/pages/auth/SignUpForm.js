import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col md={6}>
        <Container className={`${styles.ContentBackground} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form onSubmit="">
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value=""
                onChange=""
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value=""
                onChange=""
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value=""
                onChange=""
              />
            </Form.Group>

            <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
              Sign up
            </Button>
          </Form>
        </Container>

        <Container className={`mt-3 ${styles.ContentBackground}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account with us? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
