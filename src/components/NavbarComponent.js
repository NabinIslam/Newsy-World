import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1 className="font-extrabold">NewsyWorld</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">
              Home
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
