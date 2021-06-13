import React, {Component} from 'react'; 
import { Navbar , Container , Nav} from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"
            >Home</Nav.Link>
            <Nav.Link href="/signup"
            
              >SignUp</Nav.Link>
            <Nav.Link href="/login"
            
            >SignIn</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        </>
    )
}
