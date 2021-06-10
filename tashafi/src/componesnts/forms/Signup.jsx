import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import uiImg from '../../img/login.svg';
import '../../css/Login.css';

const Signup = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon"/>
                        <Form>
                        <Form.Group >
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                             
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Gender</Form.Label>
                                  <Form.Control as="select">
                                   <option  value="female">Female</option>
                                   <option value="male" >Male</option>

                                  </Form.Control>
                                  </Form.Group>
                                  <Form.Group >
                                  <Form.Row>
                                      <Col xs={7}>
                                         <Form.Control placeholder="City" type="text" />
                                        </Col>
                                        <Col>
                                        <Form.Control placeholder="location" type="text" />
                                        </Col>
   
                                    </Form.Row>
                            </Form.Group>
                            <Button variant="primary btn-block" type="submit">Register</Button>

                            {/* <div className="text-left mt-3">
                                <a href="#"><small className="reset">Password Reset</small></a> II
                                <a href="#"><small className="reset ml-2">Quick Recover</small></a>
                            </div> */}
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signup;