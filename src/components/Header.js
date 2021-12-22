import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/rocket-logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <NavLink to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={logo}
            alt="logo-img"
            width="100"
            height="100"
          />
          <h1 className="mx-4"> Space Travelers&apos; Hub </h1>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/rockets"> Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>

  </Navbar>
);

export default Header;
