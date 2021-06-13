import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../../img/user.svg'
import uiImg from '../../img/undraw_security_o890.svg';
import '../../css/Login.css';
import axios from "axios"
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Signup() {
    
    const history = useHistory();
    const [user, setUser] = useState({}); // {}
    const [confirmPassword, setConfirmPassword] = useState("");
    const [speciality, setSpeciality] = useState();
    const [alert, setAlert] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);




    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:4000/api/v1/specialty/specialties',
            headers: {}
        };
        let arr = [{value: '0', label: 'Select specialty'}]
        axios(config)
            .then(function (response) {
                var allSpecialties = response.data.allSpecialties.forEach(item => (
                   arr.push( {
                    value: item._id,
                    label: item.name
                    })))
                console.log("speciality", allSpecialties);

                setSpeciality(arr)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);



    const userChangeHandler = (e) => {
        let name = e.target.name
        let value;
        if (e.target.name == "specialty") {
            value = {
                "_id": e.target.value,

            }
        } else {
            value = e.target.value;
        }

        setUser({ ...user, [name]: value })
    }

    const checkValidation = (e) => {
        const confPass = e.target.value
        setConfirmPassword(confPass);
        console.log(user.password);

        if (user.password != confPass) {

            setAlert(<Alert transition="Fade" variant={"danger"}>
                Confitm password should be match with password
            </Alert>)
        } else {
            setAlert("");
        }

    }


    const userOnsubmitHandler = (e) => {
        e.preventDefault()
        // console.log(user)
        if (!user.Fname) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter First name
            </Alert>)
        }

        else if (!user.Lname) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter last name
            </Alert>)
        }

        else if (!user.email) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter email
            </Alert>)
        }

        else if (!user.password) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter Password
            </Alert>)
        }

        // else if (!user.userType) {
        //     setAlert(<Alert transition="Fade" variant={"danger"}>
        //         You need to enter userType
        //     </Alert>)
        // }

        else if (user.gender == "select" || !user.gender) {

            setAlert(<Alert transition="Fade" variant={"danger"}>
                you need to select gender
            </Alert>)

        }
        else if (!user.city) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter City
            </Alert>)
        }

        else if (!user.location) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to enter location
            </Alert>)
        }

        else if ((!user.specialty || user.specialty.value == '0' ) && isDoctor) {
            setAlert(<Alert transition="Fade" variant={"danger"}>
                You need to select a specialty
            </Alert>)
        }


        else {
            console.log(user)
            if(isDoctor) setUser({ ...user, "userType": 1 })
            else setUser({ ...user, "userType": 2 })
            console.log(user)

            console.log("add new user")

            axios.post('http://localhost:4000/api/v1/auth/signup', user)
                .then(data => {

                    console.log(data)
                    history.push("/login")

                }).catch(error => {

                    console.log(error)
                })
        }


    }



    const handleClickButtonGroup = (e) => {
        if (e.target.value == "true") {
            setIsDoctor(Boolean(e.target.value))
        }
        else {
            setIsDoctor(!e.target.value)
        }


    }

    return (
        <>
            <Container>

                <Row>

                    <Col lg={4} md={6} sm={12} className="text-center p-3">
                        {alert}
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Form onSubmit={(e) => userOnsubmitHandler(e)} >
                            <Row>
                                <ButtonGroup className="fullwidth" onClick={(e) => handleClickButtonGroup(e)}>
                                    <Col sm={12} md={6} >
                                        <Button className="btn-colorr" variant="primary" value={true} > As Doctor </Button>
                                {/* </ButtonGroup> */}
                                    </Col>
                                    <Col  sm={12} md={6}>
                                {/* <ButtonGroup className="fullwidth" onClick={(e) => handleClickButtonGroup(e)}> */}
                                        <Button className="btn-colorr" variant="primary" value={false} > As Patient</Button>
                                    </Col>
                                </ButtonGroup>
                            </Row>
                            
                                <br />
                            

                            <Form.Group className="fullwidth" >
                                <Form.Control type="text" placeholder="First Name" name="Fname" onChange={(e) => userChangeHandler(e)} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="text" placeholder="Last Name" name="Lname" onChange={(e) => userChangeHandler(e)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name="email" onChange={(e) => userChangeHandler(e)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => userChangeHandler(e)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => checkValidation(e)} />
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="usertype" name="userType" onChange={(e) => userChangeHandler(e)} />
                            </Form.Group> */}

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                {/* <Form.Label>Gender</Form.Label> */}
                                <Form.Control className="opt" as="select" name="gender" onChange={(e) => userChangeHandler(e)} value={user.gender}>
                                    <option className="opt" value="select">Select Gender</option>
                                    <option className="opt" value="female"   >Female</option>
                                    <option className="opt" value="male"   >Male</option>

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

                            {isDoctor ?

                                (<Form.Group controlId="exampleForm.SelectCustom">
                                    {/* <Form.Label>Select speciality</Form.Label> */}
                                    <Form.Control className="opt" as="select"
                                        name="specialty"
                                        onChange={(e) => userChangeHandler(e)} custom>
                                        {speciality.map((item, i) => {
                                            return (<option className="opt" key={i} value={item.value} >{item.label}</option>)

                                        })}


                                    </Form.Control>
                                </Form.Group>)
                                :
                                ""

                            }

                            <Button className="btn-colorr" variant="primary btn-block" type="submit">Register</Button>

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
    );
};
