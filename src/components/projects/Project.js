import React from "react";
import { Container,Row} from "react-bootstrap";
import Particle from "../Particle";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/ajith_square.jpg";
// import Tilt from "react-parallax-tilt";

function Project() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Row style={{ justifyContent: "center", padding: "10px" }}>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              This is my <strong className="purple">Projects</strong> Section
            </h1>
      </Row>
    </Container>
  );
}

export default Project;
