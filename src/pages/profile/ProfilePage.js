import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <div className="mt-5">
            <span>Current Profile Id = {id}</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
