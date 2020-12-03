import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import {
  GiRetroController,
  GiGlobe,
  GiFoodTruck,
  GiPathDistance,
} from "react-icons/gi";
import Button from "react-bootstrap/Button";
import HoverEffect from "./HoverEffect";

function ProjectCard(props) {
  const cardRef = useRef();
  function icon(icon) {
    switch (icon) {
      case "controller":
        return (
          <GiRetroController
            onClick={() => {
              window.open(props.link, "_blank");
            }}
          />
        );
      case "globe":
        return (
          <GiGlobe
            onClick={() => {
              window.open(props.link, "_blank");
            }}
          />
        );
      case "food":
        return (
          <GiFoodTruck
            onClick={() => {
              window.open(props.link, "_blank");
            }}
          />
        );
      case "gps":
        return (
          <GiPathDistance
            onClick={() => {
              window.open(props.link, "_blank");
            }}
          />
        );
      default:
        return (
          <GiPathDistance
            onClick={() => {
              window.open(props.link, "_blank");
            }}
          />
        );
    }
  }
  return (
    <HoverEffect ref={cardRef}>
      <Card
        bg={props.color}
        text={"white"}
        style={{ width: "15rem", marginBottom: 30 }}
        ref={cardRef}
      >
        <Card.Title
          href={props.link}
          style={{
            height: 100,
            textAlign: "center",
            margin: "auto",
            paddingTop: 15,
            fontSize: 50,
          }}
        >
          <HoverEffect ref={cardRef}>{icon(props.icon)}</HoverEffect>
        </Card.Title>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text style={{ height: 100 }}>{props.description}</Card.Text>
          <Button variant="light" href={props.link} target="_blank">
            View App
          </Button>
        </Card.Body>
      </Card>
    </HoverEffect>
  );
}

export default ProjectCard;
