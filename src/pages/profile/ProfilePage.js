import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/ProfilePage.module.css";

const ProfilePage = () => {
  const { id } = useParams();

  const [profileData, setProfileData] = useState({});

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
      </Container>
    </div>
  );
};

export default ProfilePage;
