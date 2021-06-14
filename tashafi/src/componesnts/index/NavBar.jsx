import React, {Component} from 'react'; 
import { Navbar , Container , Nav} from 'react-bootstrap';
// import logo from '../../img/TashaFi.png'
import {useHistory  } from 'react-router-dom'
import uiImg from '../../img/Tlogo.png';
import '../../css/nav.css'

export default function NavBar(props) {

  const history = useHistory()
 
  const [value, setValue] = React.useState(0);

    return (
        <>
        <Navbar>
          <Container>
          <Navbar.Brand href="#home"> TashaFI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link   onClick = {()=> history.push('/')}>Home</Nav.Link>
            <Nav.Link onClick = {()=> history.push('/signup')}>SignUp</Nav.Link>
            <Nav.Link onClick = {()=> history.push('/login')}>SignIn</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        </>
    )
}
