import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
import '../../css/dashboard.css'


export default function MyBooking({user}) {
    const [booking,setBooking] = useState({})
    const [error,setError] = useState([])

    
    
    
  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/booking/show/60c471adc24aa25e200d64aa`)
    .then(data => {
        setBooking(data.data)
        console.log("booking data")
        console.log(data)
    })
    .catch(error => {
        console.log(error.response.data)
        setError(error.response.data)
        
    })
} , [])
    
    return (
        <>
        <div className="booking__container">    
    <div className="furure__booking">
  <Card.Header>Future</Card.Header>
  <Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Card>
  <Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Card>
  
</div>

<div className="history__booking">
<Card.Header>History</Card.Header>
<Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Card>
  <Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Card>

</div>
</div>
        </>
    )
}
