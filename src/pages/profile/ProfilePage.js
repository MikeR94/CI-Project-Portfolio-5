import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

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
          <div className="mt-5">
            <span>Current Profile Id = {id}</span>
            <span>Current Profile Name = {profileData.username}</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
