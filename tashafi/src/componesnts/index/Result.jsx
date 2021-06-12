import React , {useEffect} from 'react'
import Card from "react-bootstrap/Card";
import MainImg from '../../img/doctor-character.jpg' 
import '../../css/result.css'
import axios from 'axios'

export default function Result() {
  

    useEffect(()=>{
    axios.post("http://localhost:4001/api/v1/booking/finddoctors")
    .then(data => {
      console.log(data.data)
    })
    .catch(error => console.error(error))
    } , [])


    return (
        <div style={{padding:'2%' , margin:"0px" , textAlign:'center'}}>
    <Card border="none" class="main__card" style={{ width: '60rem' , height:'20rem' , marginLeft:"25%"}}>
    <Card.Header style={{background:'#7954A1' , outline:'none'}}>Header </Card.Header>
    <div class='img__card__container'>
    <img id="img__card"src={MainImg} alt="" />
    </div>
    <div class="card__info">
    <Card.Body>
      <Card.Title> Dcotor Name </Card.Title>
      <Card.Text>
        speciality
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
        </div>
    )
}

