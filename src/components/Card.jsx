import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

function NftCard() {
  return (
    <Card style={{ width: "18rem", border: "0" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NftCard;
