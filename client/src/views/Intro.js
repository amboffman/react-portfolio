import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import waveHandEmoji from "../images/wave_hand_emoji.png";

function Intro() {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 p-0">
        <Col className="pb-0 mb-0 d-flex align-items-end" sm>
          <Image src={waveHandEmoji} fluid className="d-block mx-auto" />
        </Col>
        <Col className="d-flex justify-content-start" sm>
          <Container className="p-5">
            <h5>Hello,</h5>
            <p>
              Welcome to my digital space. The culmination of my love for
              building sites, engineering tools, and improving tech.
              <br />
              <br />
              I'm a full stack developer, actively advancing my front-end and
              back-end skills through passion projects, progressive products and
              technical positions.
              <br />
              <br />
              Need a hand?
              <br />
              Shoot me a message!
            </p>
            <Button variant="primary" href="#contact">
              Message
            </Button>{" "}
            <Button
              variant="link"
              size="sm"
              href="https://docs.google.com/document/d/1gCP0NVtWigK23ieIo4WIA0Bfxb4y9tm7ukmsJGFOiYQ/edit?usp=sharing"
              target="_blank"
            >
              View Resume
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
