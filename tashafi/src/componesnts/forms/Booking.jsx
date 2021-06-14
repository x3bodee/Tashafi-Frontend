import React, { useState } from 'react';
import {Button, Col, Container, Form, ModalBody, Row} from "react-bootstrap";
import axios from 'axios';
import '../../css/booking.css';
import '../../css/Login.css';
import loginIcon from '../../img/user.svg'
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import { useHistory } from "react-router-dom"


export default function Booking(props) {
    const [user, setUser] = useState({});
    const history = useHistory();
    // const [alert, setAlert] = useState({});
    console.log(props.status)
    const changeUserHandler = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        console.log("click")
    
        axios.post("http://localhost:4000/api/v1/booking/new",
            {
                "description": user.description,
                "patient": localStorage.UserID,
                "meeting_id":props.meeting_id

            })
            .then(data => {

                console.log("data :")
                console.log(data)
                // setAlert(<Alert transition="Fade" variant={"success"}>
                //             Booking is Done
                // </Alert>)
                history.push("/")

            })
            .catch(err =>{
                console.log(err)
                // setAlert(<Alert transition="Fade" variant={"danger"}>
                //     erorr in add booking
                // </Alert>)
            })

    }

    return (
        
        <div class="centered" >
            
  
        <>
       
            <Container >
            {/* {alert} */}
                <div class="gray-container">
                {/* <img className="icon-img" src={loginIcon} alt="icon" /> */}
                <p> </p>
            <h2 class='h2'>Tell Us a Bit About You</h2>
            <p>To book your appointment, we need to verify a few things for your doctor. {props.doctor}</p>
                <Row>
                    <Col >
                        
                        <Form  onSubmit={(e) => onSubmitHandler(e)} >
                            {/* <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group> */}
                            {/* <Form.Group>
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
                                  </Form.Group> */}
                            {/* </Col> */}
                           

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={6}   name ="description" onChange={(e) => changeUserHandler(e)}/>
                            </Form.Group>

                            <Button variant=" btn primary " type="submit">Booking</Button>

                          
                        </Form>
                    </Col>

                   
                </Row>
                </div>
                
            </Container>
        </>
                       <div class="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                         <path fill="#FFF" d="…"></path>
                         </svg>
                          </div>


        </div>
       
    )
}
