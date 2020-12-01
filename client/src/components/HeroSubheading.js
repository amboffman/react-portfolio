import React from "react";
import Row from "react-bootstrap/Row";
import Typical from "react-typical";
import profileInfo from "../library/profileInfo";

function HeroSubheading() {
  let animationSpeed = 1500;
  let titles = profileInfo.titles.flatMap((title) => [title, animationSpeed]);
  return (
    <Row className="justify-content-center">
      <Typical steps={titles} loop={Infinity} wrapper="h4" />
    </Row>
  );
}

export default HeroSubheading;
