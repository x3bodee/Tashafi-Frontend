import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
import '../../css/dashboard.css'
import { useHistory } from "react-router-dom";

export default function MySessions({user}) {
    const [session,setSession] = useState({})
    const [error,setError] = useState([{}])

    const history = useHistory();

    
  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/session/show/${user._id}`)
    .then(data => {
        setSession(data.data.sessions)
        console.log("Session data")
        console.log(data.data.sessions)
    })
    .catch(error => {
        setError(error.response.data)
        
    })
} , [])




const onSubmit=(e)=>{
    e.preventDefault()
    history.push(`/session`)
}   
    return (
        
        <>
        
    <Button variant="primary" onClick={(e)=>onSubmit(e)}>ADD A NEW SESSION</Button>

<div className="session">    
  <Card.Header>All Sessions</Card.Header>
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



        </>
    )
}