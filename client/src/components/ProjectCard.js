import React, { useState, useRef, useLayoutEffect } from "react";
import Card from "react-bootstrap/Card";
import {
  GiRetroController,
  GiGlobe,
  GiFoodTruck,
  GiPathDistance,
} from "react-icons/gi";
import Button from "react-bootstrap/Button";
import { useSpring, animated } from "react-spring";

function ProjectCard(props) {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / dimensions.height,
    (x - window.innerWidth / 2) / dimensions.width,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [angle, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

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
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1] });
      }}
      style={{ transform: angle.xys.interpolate(trans) }}
    >
      <Card
        bg={props.color}
        text={"white"}
        style={{ width: "15rem", marginBottom: 30 }}
        ref={targetRef}
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
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => {
              set({ xys: calc(x, y) });
            }}
            onMouseLeave={() => {
              set({ xys: [0, 0, 1] });
            }}
            style={{ transform: angle.xys.interpolate(trans) }}
          >
            {icon(props.icon)}
          </animated.div>
        </Card.Title>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text style={{ height: 100 }}>{props.description}</Card.Text>
          <Button variant="light" href={props.link} target="_blank">
            View App
          </Button>
        </Card.Body>
      </Card>
    </animated.div>
  );
}

export default ProjectCard;
