import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";

const ProfilePage = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const is_owner = profileData?.is_owner;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}`);
        setProfileData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id, setProfileData]);

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <h1 className={styles.Header}>Profile - {profileData.username}</h1>
          <hr></hr>
        </Row>
        <Row className="text-center mt-5">
          <Avatar src={profileData.avatar_image} height={170}></Avatar>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col md={6} className={`${styles.ContentBackground} p-4 `}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={profileData.username}
                disabled={disabled}
              />
            </Form.Group>

            <Form.Group controlId="first_name">
              <Form.Label className="d-none">First Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="First Name"
                name="first_name"
                value={profileData.first_name}
                disabled={disabled}
              />
            </Form.Group>

            <Form.Group controlId="last_name">
              <Form.Label className="d-none">Last Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={profileData.last_name}
                disabled={disabled}
              />
            </Form.Group>
            {disabled && is_owner && (
              <Button
                className={`mt-4 ${btnStyles.Button}`}
                onClick={(e) => {
                  e.preventDefault();
                  setDisabled(false);
                }}
              >
                Edit
              </Button>
            )}
            {!disabled && is_owner && (
              <Button
                className={`mt-4 ${btnStyles.Button}`}
                onClick={(e) => {
                  e.preventDefault();
                  setDisabled(true);
                }}
              >
                Cancel
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
