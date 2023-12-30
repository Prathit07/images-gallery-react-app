import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Header = (props) => {
  const title = props.title;
  // ADD CSS
  const navbarStyle = {
    backgroundColor: "lightblue",
  };
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <NavbarBrand href="/">{title}</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
