import React , {useEffect,useState} from 'react'
import Card from "react-bootstrap/Card";
import {Alert ,Toast} from 'react-bootstrap'
import MainImg from '../../img/doctor-character.jpg' 
import '../../css/result.css'
import axios from 'axios'
import Search from './Search'


export default function Result(props) {

  //sets
  const [doctor , setDoctor]=useState([''])


  let specialtyID= props.match.params.id
  let city = props.match.params.city
  

  if(specialtyID==null){
    city='missingData'
  }
 


// console.log(`city: ${city}, specialtyID: ${specialtyID}`)

useEffect(()=>{
  axios.post('http://localhost:4000/api/v1/booking/finddoctors/',{
    "city":city , 
    "specialty":specialtyID
  })
  .then(data => { 
  let alldoctors=[]
    data.data.doctors.forEach(dr=>{
      alldoctors.push(dr)
    })
    setDoctor(alldoctors)
})

  .catch(error => console.error(error))
    } , [])



    console.log(doctor)
const doctors=doctor.map((item)=>{
  
    return  <Card border="none" class="main__card" style={{ width: '40rem' , height:'20rem' , marginLeft:"25%"}}>
    <Card.Header style={{background:'#7954A1' , outline:'none'}}>Header </Card.Header>

        <div class='img__card__container'>
        <img id="img__card"src={MainImg} alt="" />
      </div>
        <div class="card__info"> 
             <Card.Body> 
                  <Card.Title> {item.Fname} {item.Lname} </Card.Title>
                  {/* <Card.Text>{item.specialty.name} </Card.Text>  */}
              </Card.Body> 
        </div>
        </Card>
 
})


    

    return (
              <>
                     <Search/> 
                    <div style={{padding:'2%' , margin:"0px" , textAlign:'center'}}>
  
                                  {doctors}
          
        
                    </div>
</>
    )


    }