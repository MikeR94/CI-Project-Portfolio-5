// React and Router
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// API
import { axiosReq } from "../../api/axiosDefaults";
// Contexts
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// Notifications
import { NotificationManager } from "react-notifications";
// Components
import { Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Button, Col, Container } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import LoadingSpinner from "../../components/LoadingSpinner";
// Styles
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";

const ProfilePage = () => {
  const { id } = useParams();
  const [disabled, setDisabled] = useState(true);
  const [imageChange, setImageChange] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [avatarHeight, setAvatarHeight] = useState(170);
  const avatar_image_ref = useRef(null);
  const setCurrentUser = useSetCurrentUser();

  /**
   * Initialize the profileData object
   */
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    avatar_image: "",
    is_owner: "",
  });

  /**
   * Destructure the profileData object
   */
  const { first_name, last_name, username, avatar_image, is_owner } =
    profileData;

  /**
   * Function to resize the Avatar depending on the
   * screen width
   */
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth < 600) {
        setAvatarHeight(120);
      } else {
        setAvatarHeight(170);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  /**
   * Retrieve the profile data from the API
   */
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        const { first_name, last_name, username, avatar_image, is_owner } =
          data;
        setProfileData({
          first_name,
          last_name,
          username,
          avatar_image,
          is_owner,
        });
        setHasLoaded(true);
      } catch (err) {
        NotificationManager.error(
          "There was an issue loading your profile",
          "Error"
        );
      }
    };
    fetchProfileData();
  }, [id, setProfileData]);

  /**
   * Function to update the profile avatar image
   */
  const handleImageSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    let avatar_image_blob = await fetch(avatar_image).then((r) => r.blob());
    formData.append("avatar_image", avatar_image_blob, "image1.jpg");
    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      NotificationManager.success("Profile avatar updated", "Success!");
      setImageChange(false);
      setErrors({});
      setCurrentUser((prevUser) => ({
        ...prevUser,
        profile_avatar: data.avatar_image,
      }));
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
      NotificationManager.error(
        "There was an issue updating your profile image",
        "Error"
      );
    }
  };

  /**
   * Function to update the users first and last name
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    let avatar_image_blob = await fetch(avatar_image).then((r) => r.blob());
    formData.append("avatar_image", avatar_image_blob, "image1.jpg");
    for (const data in profileData) {
      formData.append(`${data}`, profileData[data]);
    }
    try {
      await axiosReq.put(`/profiles/${id}/`, formData);
      NotificationManager.success("Profile updated", "Success!");
      setErrors({});
      setDisabled(true);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
      NotificationManager.error(
        "There was an issue updating your profile",
        "Error"
      );
    }
  };

  /**
   * Function to allow the user to change the profile avatar
   * and the new image is displayed to the user
   */
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

  /**
   * Function to allow the user to edit the first and last name.
   * The edited value gets stored in the profileData state
   */
  const handleChange = (event) => {
    setHasChanged(true);
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {hasLoaded ? (
        <Container>
          <Row className="mt-5">
            <h1 className={styles.Header}>{username}</h1>
            <hr></hr>
          </Row>
          <Form onSubmit={handleImageSubmit} className="text-center mt-5">
            <Form.Group controlId="avatar_image">
              {is_owner && (
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Update your profile image</Tooltip>}
                >
                  <Form.Label>
                    <div className={styles.AvatarRow}>
                      <Avatar src={avatar_image} height={avatarHeight}></Avatar>
                    </div>
                    <div className={styles.UpdateProfileText}>
                      Update your profile image?
                    </div>
                  </Form.Label>
                </OverlayTrigger>
              )}

              <Form.File
                htmlFor="avatar_image"
                id="avatar_image"
                accept="image/*"
                ref={avatar_image_ref}
                onChange={handleChangeImage}
              ></Form.File>

              {!is_owner && <Avatar src={avatar_image} height={170}></Avatar>}

              {imageChange && (
                <Row className="justify-content-center mt-2">
                  <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
                    Save
                  </Button>
                </Row>
              )}
            </Form.Group>
          </Form>
          {errors?.avatar_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Row className="mt-5 justify-content-center">
            <Col md={6} className={`${styles.ContentBackground} p-4 `}>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label className={`${styles.InputText}`}>
                    First Name
                  </Form.Label>
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
                {errors?.first_name?.map((message, idx) => (
                  <div key={idx} className={styles.FormError}>
                    {message}
                  </div>
                ))}

                <Form.Group>
                  <Form.Label className={`${styles.InputText} mt-3`}>
                    Last Name
                  </Form.Label>
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
                {errors?.last_name?.map((message, idx) => (
                  <div key={idx} className={styles.FormError}>
                    {message}
                  </div>
                ))}

                <div className="d-flex justify-content-between">
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
                  {hasChanged && !disabled && (
                    <Button
                      className={`mt-4 ${btnStyles.Button}`}
                      type="submit"
                    >
                      Save
                    </Button>
                  )}
                </div>
              </Form>
              <div>
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
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}
    </div>
  );
};

export default ProfilePage;
