import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  // ADD CSS
  const navbarStyle = {
    backgroundColor: "#eeeeee",
  };
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo
          style={{
            maxWidth: "30rem",
            maxHeight: "3rem",
          }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
