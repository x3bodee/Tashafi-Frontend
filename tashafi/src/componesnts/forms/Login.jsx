
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import uiImg from '../../img/undraw_security_o890.svg';
import '../../css/Login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom"

export default function Login(props) {
    const history = useHistory();

    const [user, setUser] = useState({})


    const changeUserHandler = ({ target: { name, value } }) => setUser({ ...user, [name]: value })


    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("click")
        console.log(" user.email", user.email)
        console.log(":user.password", user.password)
        axios.post("http://localhost:4000/api/v1/auth/login",
            {
                "email": user.email,
                "password": user.password
            })
            .then(data => {

                console.log("data :")
                console.log(data)
                console.log(data.data.token)
                localStorage.setItem("token", data.data.token)
                localStorage.setItem("UserID", data.data.userID)
                console.log(props)
                props.login()
                history.push("/")

            })
            .catch(err =>{
                console.log(err)
            })

    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Form onSubmit={(e) => onSubmitHandler(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => changeUserHandler(e)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => changeUserHandler(e)} />
                            </Form.Group>

                            <Button className="btn-colorr" variant=" btn-block" type="submit">Login</Button>

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
  
     ) }
