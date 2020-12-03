import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profileImage from "../images/profile.png";

function HeroImage() {
  return (
    <Row className="justify-content-center mb-5">
      <Image src={profileImage} roundedCircle fluid />
    </Row>
  );
}

export default HeroImage;
