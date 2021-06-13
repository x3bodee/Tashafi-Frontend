import React, {Component} from 'react'; 
import { Navbar , Container , Nav} from 'react-bootstrap';
// import logo from '../../img/TashaFi.png'

export default function NavBar() {
    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand href="#home"> Tashafi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">SignUp</Nav.Link>
            <Nav.Link href="#pricing">SignIn</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        </>
    )
}
