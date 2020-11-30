import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import giphyAttribution from "../images/giphy_attribution.png";

function Gif(props) {
  return(
  <>
    <Row className="justify-content-center mb-2">
      <Image src={props.gif} fluid />
    </Row>
    <Row className="justify-content-center mb-2">
      <Image src={giphyAttribution} />
    </Row>
  </>
  );
}

export default Gif;
