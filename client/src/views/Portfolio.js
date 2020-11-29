import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "../components/ProjectCard";
import profileInfo from "../library/profileInfo";

function Portfolio() {
  return (
    <Container
      fluid
      style={{
        padding: 40,
        borderTop: "solid",
        borderBottom: "solid",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <p style={{ textAlign: "center", paddingBottom: 20 }}>
        <strong>506</strong> contributions and counting!
      </p>
      <Row style={{ justifyContent: "space-around" }}>
{profileInfo.projects.map(
project=>{ return(
  <ProjectCard title={project.title} description={project.description} link={project.link} color={project.color} icon={project.icon}/>
)
}
)}
      </Row>
    </Container>
  );
}

export default Portfolio;
