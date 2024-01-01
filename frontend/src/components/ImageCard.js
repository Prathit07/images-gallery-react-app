import React from "react";
import { Card, Button } from "react-bootstrap";

const capitaliseFirstLetter = (text) => {
  if (!text) return ""; // Handle empty or undefined input
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ImageCard = (props) => {
  const id = props.image.id;
  const title = props.image.title;
  const description = capitaliseFirstLetter(props.image.description);
  const alt_description = capitaliseFirstLetter(props.image.alt_description);
  const url = props.image.urls["small"];
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title.toUpperCase()}</Card.Title>
        <Card.Text>{description || alt_description}</Card.Text>
        <Button variant="primary" onClick={() => props.deleteImage(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
