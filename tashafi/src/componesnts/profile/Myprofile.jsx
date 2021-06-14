import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import axios from "axios"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../../css/dashboard.css'
import { useHistory } from "react-router-dom"
import Alert from 'react-bootstrap/Alert'


export default function Myprofile({ user }) {
    const [isDeleted, setIsDeleted] = useState(false)
    const [User, setUser] = useState({});
    const history = useHistory();

    useEffect(async () => {
        setUser(user)
    }, [])
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


    console.log(`user id is: ${user._id}`)
    // delete the user
    const DeleteUser = () => {
        console.log("=====================================================")
        axios.delete(`http://localhost:4000/api/v1/auth/delete/${user._id}`)
            .then((data) => {
                console.log("=====================================================")
                console.log("the next user has been deleted")
                console.log(data)
                console.log("=====================================================")
                setIsDeleted(true)
                localStorage.removeItem("token")
                localStorage.removeItem("UserID")
                history.push('/')
            })
            .catch((err) => console.log(err))
    }


    return (
        <>


            <div className="myProfile__container">
                <Container className="mt-2" fluid>

                    <Row>

                        <Col lg={10} md={12} sm={12} className="text-center">
                            {alert}
                            <img className="icon-img" src={loginIcon} alt="icon" />
                            <Form onSubmit={(e) => userOnsubmitHandler(e)}>

                                <Row>
                                    <br />
                                </Row>

                                <Form.Group >
                                    <Form.Control type="text" placeholder="First Name" name="Fname" onChange={(e) => userChangeHandler(e)} value={User.Fname} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control type="text" placeholder="Last Name" name="Lname" onChange={(e) => userChangeHandler(e)} value={User.Lname} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" name="email" onChange={(e) => userChangeHandler(e)} value={User.email} />
                                </Form.Group>



                                <Form.Label>Gender</Form.Label>
                                <Form.Control value={User.gender}>
                                </Form.Control>
                                <Form.Group >
                                    <Form.Row>
                                        <Col xs={7}>
                                            <Form.Control placeholder="City" type="text" name="city" onChange={(e) => userChangeHandler(e)} value={User.city} />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="location" type="text" name="location" onChange={(e) => userChangeHandler(e)} value={User.location} />
                                        </Col>

                                    </Form.Row>
                                </Form.Group>


                                <Form.Group className="flexbtn" >
                                    <Button variant="primary btn-block" className="editbtn" type="submit">Edit profile</Button>
                                    <Button variant="danger btn-block" className="deletebtn" onClick={(e) => DeleteUser(e)} type="submit">Delete Profile
                                        {isDeleted == true ? <Redirect to='/Home' /> : null}
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}
