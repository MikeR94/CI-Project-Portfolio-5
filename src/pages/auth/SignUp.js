// React and Router
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// API
import axios from "axios";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import { Form, Button, Col, Row, Container } from "react-bootstrap";
// Styles
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const history = useHistory();

  /**
   * Initialize the signInData object
   */
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  /**
   * Destructure signUpData
   */
  const { username, password1, password2 } = signUpData;

  /**
   * Function to allow users to edit the input fields
   * and updates the signInData object
   */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Function to handle form submission
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
      NotificationManager.success("Account created successfully", "Success!");
    } catch (error) {
      setErrors(error.response?.data);
      NotificationManager.error("There was an issue signing you up", "Error");
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <h1 className={styles.Header}>Sign Up</h1>
        <hr></hr>
      </Row>
      <Container className={styles.Container}>
        <Col md={7}>
          <Container className={`${styles.ContentBackground} p-4 `}>
            <h1 className={styles.Header}>Create an account</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.username?.map((message, idx) => (
                <div key={idx} className={styles.FormError}>
                  {message}
                </div>
              ))}

              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.password1?.map((message, idx) => (
                <div key={idx} className={styles.FormError}>
                  {message}
                </div>
              ))}
              {errors.non_field_errors?.map((message, idx) => (
                <div key={idx} className={styles.FormError}>
                  {message}
                </div>
              ))}

              <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.password2?.map((message, idx) => (
                <div key={idx} className={styles.FormError}>
                  {message}
                </div>
              ))}
              {errors.non_field_errors?.map((message, idx) => (
                <div key={idx} className={styles.FormError}>
                  {message}
                </div>
              ))}

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
      </Container>
    </Container>
  );
};

export default SignUp;
