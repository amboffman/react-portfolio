import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReCAPTCHA from "react-google-recaptcha";
import Gif from "./Gif";

function ContactForm() {
  const recaptchaRef = React.createRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [gif, setGif] = useState("");
  const [submission, setSubmission] = useState(false);
  const [gifError, setGifError] = useState(false);
  const axios = require("axios");

  function fetchGif(data) {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${data.favoriteAnimal.replace(
          /\s/g,
          "+"
        )}g&api_key=pzXtj5PYk7dMyrIPt5VrAbIvHuF24PZg&limit=1&rating=g`
      )
      .then((response) => {
        setGif(response.data.data[0].images.downsized.url);
        console.log(response.data.data[0].images.downsized.url);
        setSubmission(true);
      })
      .catch(() => {
        setGifError(true);
        setSubmission(true);
      });
  }

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
    fetchGif(data);
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: data,
    })
      .then((response) => {
        fetchGif(data);
      })
      .catch(() => window.open(`mailto:amarrokalboffman@gmail.com?subject=Portfolio%20Response&body=Hello%20Anthony,%0D%0A${message}%0D%0AP.S.%0D%0A${favoriteAnimal}%20is%20my%20favorite%20animal.%0D%0ABest,%0D%0A${firstName}%20${lastName}%0D%0A${email}%0D%0A${phoneNumber}%0D%0A${company}`,"_blank"));
  }
  return (
    <Row>
      <Col>
        {submission ? (
              <>
                <h3 style={{ textAlign: "center", marginTop: 30 }}>
                  Thank you for taking the time to reach out! I'll get back to
                  you shortly.
                </h3>
                {gifError ? null : (
                  <>
                    <h5
                      style={{
                        textAlign: "center",
                        color: "deeppink",
                        paddingBottom: 20,
                      }}
                    >
                      In the meantime, enjoy this {favoriteAnimal.toLowerCase()}{" "}
                      gif!
                    </h5>
                    <Gif gif={gif} />
                  </>
                )}
              </>
        ) : (
          <>
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
                onChange={(value) => {
                  console.log("ReCaptcha", value);
                }}
              />
              <Row style={{ justifyContent: "center", marginTop: 10 }}>
                <Button variant="primary" type="submit" style={{ flex: 0.25 }}>
                  Submit
                </Button>
              </Row>
            </Form>
          </>
        )}
      </Col>
    </Row>
  );
}

export default ContactForm;
