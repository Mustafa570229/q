import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../icons/kyoo-logo3-removebg-preview.png';
import './NavBar.css';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar style={{ backgroundColor: 'transparent' }} expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="..." />{' '}
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={toggleNavbar}>
            <Nav.Link as={Link} to="/the-journey-of-certainty">
              The journey of certainty
            </Nav.Link>
            <Nav.Link as={Link} to="/chains">
              Chains
            </Nav.Link>
            <Nav.Link as={Link} to="/stories">
              Stories
            </Nav.Link>
            <Nav.Link as={Link} to="/mix">
              Mix
            </Nav.Link>
            <Nav.Link as={Link} to="/control-panel">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
