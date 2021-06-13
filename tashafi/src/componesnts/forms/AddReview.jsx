import React from 'react'
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../css/review.css';
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

export default function AddReview(props) {
  const [user, setUser] = useState({});
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)





  const changeUserHandler = ({ target: { name, value } }) => setUser({ ...user, [name]: value })


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    console.log(user.comment)
    console.log(currentValue)
    console.log(props.doctor)
    console.log(localStorage.UserID)

    axios.post("http://localhost:4000/api/v1/review/new",
      {
        "comment": user.comment,
        "review_number": currentValue,
        //here i must pass current user id 
        "patient": localStorage.UserID,
        "doctor": props.doctor


      })

      .then(data => {

        console.log("data :")
        console.log(data)
        console.log("hi")


      })
      .catch(err => {
        console.log(err)
      })

    console.log("done")
  }

  return (

    <div class="div">
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <div style={styles.container}>
          <h2 class="h2"> Rate your doctor </h2>

          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar name="review_number" onChange={(e) => changeUserHandler(e)}
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                    marginRight: 10,
                    cursor: "pointer"
                  }}
                />
              )
            })}
          </div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" name="comment" style={styles.textarea} placeholder="What's your experience?" rows={6} onChange={(e) => changeUserHandler(e)}>

            </Form.Control>
          </Form.Group>

          <button
            className="bbtn"
          >
            Submit
          </button>

        </div>

      </Form>
    </div>
  )

}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #323E42",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 200,
    width: '80%'
  }


};












