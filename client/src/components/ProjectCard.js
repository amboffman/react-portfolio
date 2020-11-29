import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  GiRetroController,
  GiGlobe,
  GiFoodTruck,
  GiPathDistance,
} from "react-icons/gi";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const [hover, setHover] = useState(false);
  function icon(icon) {
    switch (icon) {
      case "controller":
          return (
              <GiRetroController
                style={
                  hover
                    ? { fontSize: 75, alignSelf: "center" }
                    : { fontSize: 50, alignSelf: "center" }
                }
                onClick={()=>{window.open(props.link,'_blank')}}
              />
          );
        break;
      case "globe":
          return (
            <GiGlobe
              style={
                hover
                  ? { fontSize: 75, alignSelf: "center" }
                  : { fontSize: 50, alignSelf: "center" }
              }
              onClick={()=>{window.open(props.link,'_blank')}}
            />
          );
        break;
      case "food":
          return (
            <GiFoodTruck
              style={
                hover
                  ? { fontSize: 75, alignSelf: "center" }
                  : { fontSize: 50, alignSelf: "center" }
              }
              onClick={()=>{window.open(props.link,'_blank')}}
            />
          );
        break;
      case "gps":
          return (
            <GiPathDistance
              style={
                hover
                  ? { fontSize: 75, alignSelf: "center" }
                  : { fontSize: 50, alignSelf: "center" }
              }
              onClick={()=>{window.open(props.link,'_blank')}}
            />
          );
        break;
    }
  }
  return (
    <Card bg={props.color} text={"white"} style={{ width: "15rem", marginBottom: 30 }}>
      <Card.Title
        href={props.link}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          height: 100,
          textAlign: "center",
          margin: "auto",
          paddingTop: 15,
          fontSize: 50,
        }}
      >
        {icon(props.icon)}
      </Card.Title>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text style={{ height: 100 }}>{props.description}</Card.Text>
        <Button variant="light" href={props.link} target="_blank">
          View App
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
