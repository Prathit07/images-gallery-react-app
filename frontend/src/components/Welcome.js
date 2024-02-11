import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => {
  const welcomeStyle = {
    marginTop: "70px",
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    backgroundColor: "#eeeeee",
  };

  const buttonStyle = {
    position: "relative",
    marginLeft: "90%",
    bottom: "40px",
  };
  return (
    <Container style={welcomeStyle}>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Welcome Images Gallery
      </h1>
      <ul>
        <li
          style={{
            paddingBottom: "10px",
          }}
        >
          This is a simple application that retrieves photos using Unsplash API.
          In order to start, please enter any search term in the input field.
        </li>
        <li
          style={{
            paddingBottom: "10px",
          }}
        >
          When you like an image, you can save the image by clicking on the Save
          button.
        </li>
        <li
          style={{
            paddingBottom: "10px",
          }}
        >
          When you would like to remove a saved photo, simply click the Delete
          button.
        </li>
      </ul>
      <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
        Happy searching...!
      </h3>
      <br></br>
      <Button style={buttonStyle} href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </Container>
  );
};

export default Welcome;
