import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../icons/logo-removebg-preview.png"
import "./NavBar.css"
function NavBar() {
  const navbarStyle = {
    backgroundColor: 'transparent',
  };
  return (
    <Navbar style={navbarStyle}  >
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo} alt='...'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/the-journey-of-certainty'>The journey of certainty</Nav.Link>
            <Nav.Link as={Link} to='/chains'>Chains</Nav.Link>
            <Nav.Link as={Link} to='/stories'>Stories</Nav.Link>                                         
            
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;