import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

function NavBar() {
  return (
    <div className="navBar">      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Container>
        <Navbar.Brand href="/">RESET /\</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
        
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav className="me-auto">
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Playground</Nav.Link>           
            <NavDropdown title="Interests" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Music</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Photography/Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Writing/Favorite Literature</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Miscellaneous</NavDropdown.Item>
            </NavDropdown>         
          </Nav>
          
          <Nav>            
            <Nav.Link href="#deets">Details</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Links
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>             
        </Container>    
    </Navbar>
  </div>
  );
}

export default NavBar;