import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = (props) => {
  const title = props.title;
  // ADD CSS
  const navbarStyle = {
    backgroundColor: "#eeeeee",
  };
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo
          alt={title}
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
