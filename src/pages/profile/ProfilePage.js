import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";

const ProfilePage = () => {
  const { id } = useParams();
  const [disabled, setDisabled] = useState(true);
  const [imageChange, setImageChange] = useState(false);
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    avatar_image: "",
    is_owner: "",
  });
  const { first_name, last_name, username, avatar_image, is_owner } =
    profileData;

  const avatar_image_ref = useRef(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}`);
        const { first_name, last_name, username, avatar_image, is_owner } =
          data;
        setProfileData({
          first_name,
          last_name,
          username,
          avatar_image,
          is_owner,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id, setProfileData]);

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    let avatar_image_blob = await fetch(avatar_image).then((r) => r.blob());
    formData.append("avatar_image", avatar_image_blob, "image1.jpg");
    try {
      await axiosReq.put(`/profiles/${id}`, formData);
      window.location.reload();
      setImageChange(false); // might not need
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImage = (event) => {
    setImageChange(true);
    const imageRef = {
      avatar_image: "avatar_image",
    };

    if (event.target.id === imageRef.avatar_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(avatar_image);
        setProfileData({
          ...profileData,
          avatar_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }
  };

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <h1 className={styles.Header}>{username}</h1>
          <hr></hr>
        </Row>
        <Form onSubmit={handleImageSubmit} className="text-center mt-5">
          <Form.Group controlId="avatar_image">
            <Form.Label>
              <Row className={styles.AvatarRow}>
                <Avatar src={avatar_image} height={170}></Avatar>
                <Form.File
                  htmlFor="avatar_image"
                  id="avatar_image"
                  accept="image/*"
                  ref={avatar_image_ref}
                  onChange={handleChangeImage}
                ></Form.File>
              </Row>
              {imageChange && (
                <Row className="justify-content-center mt-2">
                  <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
                    Save
                  </Button>
                </Row>
              )}
            </Form.Label>
          </Form.Group>
        </Form>
        <Row className="mt-5 justify-content-center">
          <Col md={6} className={`${styles.ContentBackground} p-4 `}>
            <Form.Group>
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                disabled={disabled}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="d-none">First Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                disabled={disabled}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="d-none">Last Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                disabled={disabled}
                onChange={handleChange}
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