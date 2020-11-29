import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
const recaptchaRef = React.createRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [favoriteAnimal, setFavoriteAnimal] = useState("");

  function handleSubmit(event) {
    recaptchaRef.current.execute();
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      favoriteAnimal,
      company,
    };
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: data,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent!");
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });
  }
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
          <Form
            id="contact-form"
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
          >
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Control
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicLastName">
                  <Form.Control
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Control
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
              <Form.Control
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFavoriteAnimal">
              <Form.Label>Bonus</Form.Label>
              <Form.Control
                placeholder="Favorite Animal"
                value={favoriteAnimal}
                onChange={(e) => setFavoriteAnimal(e.target.value)}
              />
            </Form.Group>
            <ReCAPTCHA 
            ref={recaptchaRef}
            size="invisible"
            sitekey="6Lf889cZAAAAAEyvx7f_Oq36794e9PAggJqeE5zr" 
            onChange={(value)=>{console.log('ReCaptcha', value)}}/>
            <Row style={{ justifyContent: "center", marginTop: 10 }}>
              <Button variant="primary" type="submit" style={{ flex: 0.25 }}>
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
