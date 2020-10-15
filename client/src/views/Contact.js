import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
const [firstName, setFirstName] = useState('First Name');
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col style={{ flex: 1 }}>
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
          <Form>
              <Form.Row>
                  <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control placeholder="First Name" />
            </Form.Group>
                  </Col>
                  <Col>
            <Form.Group controlId="formBasicLastName">
              <Form.Control placeholder="Last Name" />
            </Form.Group>
                  </Col>
              </Form.Row>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Control placeholder="Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Control as="textarea" placeholder="Message" />
            </Form.Group>

            <Form.Group controlId="formBasicFavoriteAnimal">
            <Form.Label>Bonus</Form.Label>
              <Form.Control placeholder="Favorite Animal" />
            </Form.Group>
            <Row style={{justifyContent: 'center'}}>

            <Button variant="primary" type="submit" style={{flex: 0.25}}>
              Submit
            </Button>
            </Row>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Contact;
