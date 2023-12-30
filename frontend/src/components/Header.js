import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

const Header = (props) => {
    const title = props.title
  return (
    <Navbar bg="light" variant="light">
      <NavbarBrand href="/">{ title }</NavbarBrand>
    </Navbar>
  );
};

export default Header;
