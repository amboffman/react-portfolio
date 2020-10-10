import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <Container fluid style={{paddingTop: 40, paddingBottom: 40, borderTop: "solid", borderBottom: "solid"}}>
       <h5>Projects</h5>
            <p>
<strong>506</strong> contributions and counting!
            </p>
      <Row style={{justifyContent: "space-around", }}>
        <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
        />
        <Card.Body>
          <Card.Title>Gamersaurus</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
        />
        <Card.Body>
          <Card.Title>Wanderful</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
        />
        <Card.Body>
          <Card.Title>Moodies</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
        />
        <Card.Body>
          <Card.Title>Victorise</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Portfolio;
