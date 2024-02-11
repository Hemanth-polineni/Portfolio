import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJava,
  DiHtml5,
  DiDjango
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      {/* <br/> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDjango />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Algorithm.svg" alt="Algorithms" height="60"></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/DataStructure.svg" alt="Algorithms" height="60"></img>
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
      <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/DataStructure.svg" alt="Algorithms" height="60"></img>
      </Col>
       */}
      
    </Row>
  );
}

export default Techstack;
