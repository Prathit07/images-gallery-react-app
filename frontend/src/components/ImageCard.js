import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const capitaliseFirstLetter = (text) => {
  if (!text) return ""; // Handle empty or undefined input
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ImageCard = (props) => {
  const id = props.image.id;
  const title = props.image.title;
  const description = capitaliseFirstLetter(props.image.description);
  const alt_description = capitaliseFirstLetter(props.image.alt_description);
  const image_created_by = props.image.user.name
    ? props.image.user.name
    : "No Author Name";
  const portfolio_url = props.image.user.portfolio_url;
  const url = props.image.urls["small"];
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title?.toUpperCase()}</Card.Title>
        <Card.Text>{description || alt_description}</Card.Text>
        {!props.image.saved && (
          <Button variant="secondary" onClick={() => props.saveImage(id)}>
            Save
          </Button>
        )}{" "}
        <Button variant="primary" onClick={() => props.deleteImage(id)}>
          Delete
        </Button>
        <br></br>
        <br></br>
        <Card.Footer className="text-center text-muted">
          {portfolio_url ? (
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href={portfolio_url} target="_blank">
                  {image_created_by}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          ) : (
            <p>{image_created_by}</p>
          )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
