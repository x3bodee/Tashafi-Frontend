import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import '../../css/booking.css';


export default function Booking() {
    return (
        <div class="centered" >
            
  
        <>
        
            <Container >
            <h2 class='h2'>Tell us a bit about you</h2>
                <Row>
                    <Col >
                        
                        <Form>
                            {/* <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group> */}
                            <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Row>
                               <Col>
                               <Form.Control placeholder="First " />
                               </Col>
                               <Col>
                               <Form.Control placeholder="Last " />
                               </Col>
                              </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Gender</Form.Label>
                                  <Form.Control as="select">
                                   <option  value="female">Female</option>
                                   <option value="male" >Male</option>

                                  </Form.Control>
                                  </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Booking</Button>

                          
                        </Form>
                    </Col>

                   
                </Row>
            </Container>
        </>
   


        </div>
    )
}
