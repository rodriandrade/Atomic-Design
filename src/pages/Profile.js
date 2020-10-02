import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesBackground from '../components/ParticlesBackground';

import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    
    <Container className="mb-5">
      <ParticlesBackground />
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </Col>
      </Row>

    </Container>
  );
};

export default Profile;