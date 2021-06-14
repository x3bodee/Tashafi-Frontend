import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import { Alert, Toast } from 'react-bootstrap'
import MainImg from '../../img/doctor-character.jpg'
import NavBar from '../../componesnts/index/NavBar'
import '../../css/result.css'
import axios from 'axios'
import Search from './Search'
import { FaStar, FaFemale, FaMale } from "react-icons/fa";
import Footer from '../../componesnts/index/Footer'

export default function Result(props) {

  //sets
  const [doctor, setDoctor] = useState([''])


  let specialtyID = props.match.params.id
  let city = props.match.params.city


  if (specialtyID == null) {
    city = 'missingData'
  }



  // console.log(`city: ${city}, specialtyID: ${specialtyID}`)

  useEffect(() => {
    axios.post('http://localhost:4000/api/v1/booking/finddoctors/', {
      "city": city,
      "specialty": specialtyID
    })
      .then(data => {
        let alldoctors = []
        data.data.doctors.forEach(dr => {
          alldoctors.push(dr)
        })
        setDoctor(alldoctors)
      })

      .catch(error => console.error(error))
  }, [])



  console.log(doctor)
  const doctors = doctor.map((item) => {


    return <a href={`/doctorp/${item._id}`}>

      <Card border="none" class="main__card" style={{ width: '35rem', height: '20rem', marginLeft: "1%" }}>
        <Card.Header style={{ background: '#7954A1', outline: 'none' }}> <br /> </Card.Header>

        <div class='img__card__container'>
          <img id="img__card" src={MainImg} alt="" />
        </div>
        <div class="card__info">
          <Card.Body>
            <Card.Title> {item.Fname} {item.Lname}  , {item.gender == "male" ? <FaMale /> : <FaFemale />}</Card.Title>
            {/* <Card.Text>{item.specialty.name} </Card.Text>  */}
            <Card.Title>     </Card.Title>
          </Card.Body>
        </div>
      </Card>
    </a>

  })




  return (
    <>
      <div class="Searchclass">

        <Search />
      </div>
      <div class="Cardclass" style={{ padding: '4%', margin: "0px", textAlign: 'center' }}
      >

        {doctors}
      </div>

      <Footer />

    </>
  )


}