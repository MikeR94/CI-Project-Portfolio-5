import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <h1 className={styles.Header}>Sign In</h1>
        <hr></hr>
      </Row>
      <Container className={styles.Container}>
        <Col md={7}>
          <Container className={`${styles.ContentBackground} p-4 `}>
            <h1 className={styles.Header}>Log In</h1>

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

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.password?.map((message, idx) => (
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
                Sign in
              </Button>
            </Form>
          </Container>

          <Container className={`mt-3 ${styles.ContentBackground}`}>
            <Link className={styles.Link} to="/signin">
              Don't have an account with us? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
      </Container>
    </Container>
  );
};

export default SignInForm;
