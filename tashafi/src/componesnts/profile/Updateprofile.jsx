import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import uiImg from '../../img/undraw_security_o890.svg';
import '../../css/Login.css';
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Updateprofile({user}) {
    const [User, setUser] = useState({user});


const userChangeHandler = (e) => {
    console.log(e.target)

    let name = e.target.name
    let value;
   
    value = e.target.value;
    
    setUser({ ...user, [name]: value })
}

const userOnsubmitHandler = (e) => {
    console.log(e)
e.preventDefault()
console.log(User)
axios.put(`http://localhost:4000/api/v1/auth/update/${user._id}`, User)
.then(data => {
    console.log("it should be updated")
    console.log(data)
}).catch(error => {

    console.log(error)
})
}

    return (
        <>
             <Container className="mt-5">

<Row>

    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
        {alert}
        <img className="icon-img" src={loginIcon} alt="icon" />
        <Form onSubmit={(e) => userOnsubmitHandler(e)} >
            
           
            <Row>
                <br />
            </Row>

            <Form.Group >
                <Form.Control type="text" placeholder="First Name" name="Fname" value={User.Fname} onChange={(e) => userChangeHandler(e)}></Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" placeholder="Last Name" name="Lname" value={user.Fname} onChange={(e) => userChangeHandler(e)} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" name="email" value={User.email} onChange={(e) => userChangeHandler(e)} />
            </Form.Group>

        

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" onChange={(e) => userChangeHandler(e)} >
                    <option value="select"></option>
                    <option value="female"   >Female</option>
                    <option value="male"   >Male</option>

                </Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Row>
                    <Col xs={7}>
                        <Form.Control placeholder="City" type="text" name="city" onChange={(e) => userChangeHandler(e)} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="location" type="text" name="location" onChange={(e) => userChangeHandler(e)} />
                    </Col>

                </Form.Row>
            </Form.Group>

           

                
               

            <Button variant="primary btn-block" type="submit">Submit</Button>

            {/* <div className="text-left mt-3">
                <a href="#"><small className="reset">Password Reset</small></a> II
                <a href="#"><small className="reset ml-2">Quick Recover</small></a>
            </div> */}
        </Form>
    </Col>

    <Col lg={8} md={6} sm={12}>
        <img className="w-100" src={uiImg} alt="" />
    </Col>
</Row>
</Container> 
        </>
    )
}
