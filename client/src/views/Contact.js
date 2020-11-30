import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <Container fluid="md">
          <ContactForm />
    </Container>
  );
}

export default Contact;
