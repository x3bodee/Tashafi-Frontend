import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
import '../../css/dashboard.css'


export default function MyBooking() {
    const [oldBooking, setOldBooking] = useState([]);
    const [newBooking, setNewBooking] = useState([]);
    const [patient, setPatient] = useState({});
    const [doctor, setDoctor] = useState({});
    const [error, setError] = useState([]);
    const [userType, setUserType] = useState('');



    useEffect(() => {
        console.log(localStorage.getItem("UserID"))
        axios.get(`http://localhost:4000/api/v1/booking/show/${localStorage.getItem("UserID")}`)
            .then(data => {
                // setBooking(data.data)
                console.log("booking data")
                console.log(data.data)
                if(data.data.patient){
                    setPatient(data.data.patient)
                    let old =[];
                    let neww =[];
                    data.data.booking.forEach((ele)=>{
                        console.log("ele")
                        console.log(ele)
                        if(ele.status == false) neww.push( <Card>
                            <Card.Body id={ele.meeting.id}>
                                <Card.Title>{ele.meeting.date.day} {ele.meeting.date.date}</Card.Title>
                                <Card.Text>
                                    you have a booking with Dr. {ele.doctor.Fullname}, {ele.doctor.specialty} start { ele.meeting.date.start_time } ends { ele.meeting.date.end_time }
                                </Card.Text>
                                <Card.Subtitle className="mb-1 text-muted">Contact : {ele.doctor.email} </Card.Subtitle>
                                <Button id={ele.meeting.link} variant="primary">Go to call</Button>
                            </Card.Body>
                        </Card>)
                        else old.push( <Card>
                            <Card.Body id={ele.meeting.id}>
                                <Card.Title>{ele.meeting.date.day} {ele.meeting.date.date}</Card.Title>
                                <Card.Text>
                                    you had a meeting with Dr. {ele.doctor.Fullname}, {ele.doctor.specialty} start { ele.meeting.date.start_time } ends { ele.meeting.date.end_time }
                                </Card.Text>
                                <Card.Subtitle className="mb-1 text-muted">Contact : {ele.doctor.email} </Card.Subtitle>
                                {/* <Button id={ele.meeting.link} variant="primary">Go to call</Button> */}
                            </Card.Body>
                        </Card>)
                    })
                    
                    setUserType(false)
                    console.log("user is patient")

                    setOldBooking(old)
                    setNewBooking(neww)
                } 
                else if(data.data.doctor){
                    setDoctor(data.data.doctor)
                    setUserType(true)
                    console.log("user is doctor")
                    let old =[];
                    let neww =[];
                    data.data.booked.forEach((ele)=>{
                        if(ele.status == false) neww.push(<Card>
                            <Card.Body id={ele.meeting.id}>
                                <Card.Title>{ele.meeting.date.day} {ele.meeting.date.date}</Card.Title>
                                <Card.Text>
                                    you have a meeting with {ele.patient.Fullname} start { ele.meeting.date.start_time } ends { ele.meeting.date.end_time }
                                </Card.Text>
                                <Card.Subtitle className="mb-1 text-muted">Contact : {ele.patient.email} </Card.Subtitle>
                                <Button id={ele.meeting.link} variant="primary">Go to call</Button>
                            </Card.Body>
                        </Card>)
                        else old.push(<Card>
                            <Card.Body id={ele.meeting.id}>
                                <Card.Title>{ele.meeting.date.day} {ele.meeting.date.date}</Card.Title>
                                <Card.Text>
                                    you had a meeting with {ele.patient.Fullname} start { ele.meeting.date.start_time } ends { ele.meeting.date.end_time }
                                </Card.Text>
                                <Card.Subtitle className="mb-1 text-muted">Contact : {ele.patient.email} </Card.Subtitle>
                                {/* <Button id={ele.meeting.link} variant="primary">Go to call</Button> */}
                            </Card.Body>
                        </Card>)
                    })
                    setOldBooking(old)
                    setNewBooking(neww)
                } 
                
            })
            .catch(error => {
                console.log(error)
                // setError(error.response.data)
            })
    }, [])

    return (
        <>
            {/* {userType == false ? "patient":"doctor"} */}
            <div className="booking__container">
                <div className="furure__booking">
                    <Card.Header>Future bookings</Card.Header>
                    {newBooking.length ? newBooking : <Card> <Card.Body > <Card.Title> No future bookings </Card.Title> </Card.Body> </Card> }
                </div>

                <div className="history__booking">
                    <Card.Header>Old Bookings</Card.Header>
                    { oldBooking.length ? oldBooking: <Card> <Card.Body > <Card.Title> No old bookings </Card.Title> </Card.Body> </Card>}
                </div>
            </div>
        </>
    )
}
