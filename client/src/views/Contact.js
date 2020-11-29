import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h3 style={{ textAlign: "center", marginTop: 30 }}>
            What could you accomplish with a full stack developer at your
            fingertips?
          </h3>
          <h5
            style={{
              textAlign: "center",
              color: "deeppink",
              paddingBottom: 20,
            }}
          >
            I'd love to hear it!
          </h5>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
