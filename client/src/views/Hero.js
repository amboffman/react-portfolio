import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HeroImage from "../components/HeroImage";
import HeroHeading from "../components/HeroHeading";
import HeroSubheading from "../components/HeroSubheading";

function Hero() {
  return (
    <Container fluid className="p-0 m-0">
      <Col className="p-0 m-0">
        <Jumbotron fluid>
          <Container>
            <Col>
              <HeroImage />
              <HeroHeading />
              <HeroSubheading />
            </Col>
          </Container>
        </Jumbotron>
      </Col>
    </Container>
  );
}

export default Hero;
