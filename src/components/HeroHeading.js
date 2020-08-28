import React from "react";
import Row from "react-bootstrap/Row";
import profileInfo from "../library/profileInfo";

function HeroHeading() {
  return (
    <Row className="justify-content-center mb-3">
      <h1>
        {profileInfo.firstName} {profileInfo.lastName}
      </h1>
    </Row>
  );
}

export default HeroHeading;
