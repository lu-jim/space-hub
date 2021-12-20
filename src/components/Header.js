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
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo-img"
            width="100"
            height="100"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Rockets</Nav.Link>
          <Nav.Link href="#link">Missions</Nav.Link>
          <LinkContainer to="/Profile"><Nav.Link>Profile</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>

  </Navbar>
);

export default Header;
