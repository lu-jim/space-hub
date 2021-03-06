import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/rocket-logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={logo}
            alt="logo-img"
            width="100"
            height="100"
          />
          <h1 className="mx-4 d-none d-md-flex"> Space Travelers&apos; Hub </h1>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/"><Nav.Link>Rockets</Nav.Link></LinkContainer>
          <LinkContainer to="/missions">
            <Nav.Link>Missions</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>

  </Navbar>
);

export default Header;
