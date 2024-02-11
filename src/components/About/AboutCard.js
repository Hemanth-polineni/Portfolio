import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign:"left" ,wordSpacing: "1px"}}>
            Hi Everyone, <br />I am <span className="purple">Hemanth Polineni </span>
            from <span className="purple"> Tirupati , Andhra Pradesh, India.</span>
            <br /> <br/>I am Highly motivated and results-oriented Computer Science and System Engineering student with a strong foundation in Python, C, Java, HTML, and SQL. <br /> <br/>Eager to leverage skills and knowledge 
            in an environment that fosters professional growth and development.

            {/* <br />
            Additionally, I am enthusiastic about Web Development.
            <br /> */}
            <br />
            <br />
            <b>Hobbies:</b>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Digital-Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
// export default AboutCard1;
