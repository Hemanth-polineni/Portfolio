import React from 'react';
import { Container,Row} from "react-bootstrap";
import Particle from "../Particle";

const Experience = () => {
  return (
    <Container fluid className="project-section">
    <Particle />
    <Row style={{ justifyContent: "center", padding: "10px" }}>
    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            This is my <strong className="purple">Experience</strong> Section
          </h1>
    </Row>
  </Container>
  )
}

export default Experience