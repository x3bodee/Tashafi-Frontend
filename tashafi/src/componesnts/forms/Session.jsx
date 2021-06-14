
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import uiImg from '../../img/undraw_schedule_pnbk (1).svg';
import '../../css/Login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom"


export default function Session() {
    const [user, setUser] = useState({});
    const history = useHistory();
    const changeUserHandler = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const onSubmitHandler = (e) => {
        
        console.log("click")
        console.log(" user start time ", user.start_time)
        console.log(":user.end time ", user.end_time)
        axios.post("http://localhost:4000/api/v1/session/new",
            {
                "start_time": user.start_time,
                "end_time": user.end_time,
               //here i must pass current user id 
                "doctor": localStorage.UserID
            })
            .then(data => {

                console.log("data :")
                console.log(data)
                history.push("/profile")
               

            })
            .catch(err =>{
                console.log(err)
            })

    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={3} md={6} sm={12} className="text-center mt-5 p-3">
                        
                        <h4>Create a New Session </h4>
                        <br/> <br/>
                        {/* <img className="icon-img" src={loginIcon} alt="icon" /> */}
                        <Form  onSubmit={(e) => onSubmitHandler(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="datetime-local" placeholder="start Time " name="start_time"  onChange={(e) => changeUserHandler(e)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="datetime-local" placeholder="end Time" name="end_time" onChange={(e) => changeUserHandler(e)} />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">Add</Button>

                            
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
