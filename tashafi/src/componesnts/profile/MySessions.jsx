import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
import '../../css/dashboard.css'
import { useHistory } from "react-router-dom";

export default function MySessions({ user }) {
  const [sessions, setSessions] = useState([])
  const [error, setError] = useState([{}])

  const history = useHistory();


  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/session/show/${user._id}`)
      .then(data => {
        // setSession(data.data.sessions)
        console.log("Session data")
        console.log(data.data.sessions)
        setSessions(data.data.sessions)
      })
      .catch(error => {
        setError(error.response.data)

      })
  }, [])




  const onClickHandeler = (e) => {
    e.preventDefault()
    history.push('/session')
  }

  // const deleteHandeler = (e) => {
  //   e.preventDefault()
  //   axios.get(`http://localhost:4000/api/v1/session/show/${user._id}`)
  // }

  return (

    <>


      <div className=" sessions">


      <div className="session">
      <Button className="mb-3 mt-2 fullwidth" variant="primary" onClick={(e) => onClickHandeler(e)}>ADD A NEW SESSION</Button>
        <Card.Header>Sessions</Card.Header>
        {sessions.map((ele)=>{
          return (<Card>
            <Card.Body>
              <Card.Title>{ele.day} {ele.date}</Card.Title>
              <Card.Text>
                start { ele.start } ends { ele.end }
              </Card.Text>
              {/* <Button id={ele.session_id} onClick={(e) deleteHandeler(e)} variant="danger">Delete</Button> */}
            </Card.Body>
          </Card>)
        })}
      </div>


      </div>


    </>
  )
}