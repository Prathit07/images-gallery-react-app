import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => {
  const welcomeStyle = {
    marginTop: "40px",
    backgroundColor: "#eeeeee",
  };
  return (
    <Container style={welcomeStyle}>
      <h1>Welcome Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
      </p>
      <p>
        In order to start, please enter any search term in the input field.
        Happy searching...!
      </p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </Container>
  );
};

export default Welcome;
