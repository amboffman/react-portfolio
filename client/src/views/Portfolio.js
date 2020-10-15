import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <Container
      fluid
      style={{
        padding:40,
        borderTop: "solid",
        borderBottom: "solid",
      }}
    >
      <h2 style={{textAlign: 'center'}}>Projects</h2>
      <p style={{textAlign: 'center', paddingBottom: 20}}>
        <strong>506</strong> contributions and counting!
      </p>
      <Row style={{ justifyContent: "space-around" }}>
        <Card bg={"primary"} text={'white'}style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
          />
          <Card.Header>Gamersaurus</Card.Header>
          <Card.Body>
            <Card.Text style={{ height: 100 }}>
              A videogame webapp for users to search games, see the latest
              trends, and save personal libraries.
            </Card.Text>
            <Button variant="light">View App</Button>
          </Card.Body>
        </Card>
        <Card bg={"warning"} text={'white'} style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
          />
          <Card.Header>Wanderful</Card.Header>
          <Card.Body>
            <Card.Text style={{ height: 100 }}>
              Log destinations to track destinations you've visited and build
              your wishlist.
            </Card.Text>
            <Button variant="light">View App</Button>
          </Card.Body>
        </Card>
        <Card bg={"success"} text={'white'} style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
          />
          <Card.Header>Moodies</Card.Header>
          <Card.Body>
            <Card.Text style={{ height: 100 }}>
              A restaurant app that recommends local cuisine based on the user's
              mood.
            </Card.Text>
            <Button variant="light">View App</Button>
          </Card.Body>
        </Card>
        <Card bg={"info"} text={'white'} style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image_preview"
          />
          <Card.Header>Victorise</Card.Header>
          <Card.Body>
            <Card.Text style={{ height: 100 }}>
              An activity monitoring app available on the Apple store.
            </Card.Text>
            <Button variant="light">View App</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Portfolio;
