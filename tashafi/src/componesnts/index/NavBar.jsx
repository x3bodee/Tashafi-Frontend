import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import logo from '../../img/TashaFi.png'

import {useHistory  } from 'react-router-dom';

export default function NavBar({isLogin}) {


  const history = useHistory()

  const [value, setValue] = React.useState(0);


  const logOut = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("UserID")
      history.push("/")
     } 
console.log(history)
    return (
        <>
       
        <Navbar calssName="color-nav"  variant="light">
          <Container>
          <Navbar.Brand  href="#home" > TASHAFI</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link onClick = {()=> history.push('/')}>Home</Nav.Link>
            {!isLogin? <Nav.Link onClick = {()=> history.push('/signup')}>SignUp</Nav.Link>
            :
            <Nav.Link onClick = {()=>history.push('/profile')}>Profile</Nav.Link>

    }
            {!isLogin ? <Nav.Link onClick = {()=> history.push('/login')}>SignIn</Nav.Link>
            :
            <Nav.Link onClick = {()=> logOut()}>logOut</Nav.Link>

      }

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}


