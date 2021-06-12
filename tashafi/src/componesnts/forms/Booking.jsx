import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios';
import '../../css/booking.css';


export default function Booking() {
    const [user, setUser] = useState({});
    
    const changeUserHandler = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const onSubmitHandler = (e) => {
        
        console.log("click")
        axios.post("http://localhost:4000/api/v1/booking/new",
            {
                "description": user.description,
                "patient": "",
                "meeting_id":""
            })
            .then(data => {

                console.log("data :")
                console.log(data)
               

            })
            .catch(err =>{
                console.log(err)
            })

    }

    return (
        <div class="centered" >
            
  
        <>
        
            <Container >
                <div class="gray-container">
            <h2 class='h2'>Tell Us a Bit About You</h2>
                <Row>
                    <Col >
                        
                        <Form  onSubmit={(e) => onSubmitHandler(e)} >
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
                            <Col >
                            <Form.Group  controlId="exampleForm.ControlSelect1">
                              <Form.Label>Gender</Form.Label>
                                  <Form.Control   as="select">
                                   <option  value="female">Female</option>
                                   <option value="male" >Male</option>

                                  </Form.Control>
                                  </Form.Group>
                            </Col>
                           

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={6}  onChange={(e) => changeUserHandler(e)}/>
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Booking</Button>

                          
                        </Form>
                    </Col>

                   
                </Row>
                </div>
            </Container>
        </>
   


        </div>
    )
}
