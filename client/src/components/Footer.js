import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <Container fluid>
      <Row
        style={{
          backgroundColor: "#007bff",
          height: 150,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "white" }}>Thank you!</h4>
      </Row>
    </Container>
  );
}

export default Footer;
