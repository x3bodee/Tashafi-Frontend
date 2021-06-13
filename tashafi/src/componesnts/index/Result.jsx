import React , {useEffect,useState} from 'react'
import Card from "react-bootstrap/Card";
import {Alert ,Toast} from 'react-bootstrap'
import MainImg from '../../img/doctor-character.jpg' 
import '../../css/result.css'
import axios from 'axios'
import Search from './Search'


export default function Result(props) {

  //sets
  const [alert , setAlert] = useState('')
  const [show, setShow] = useState(false);
  const [doctor , setDoctor]=useState([''])


  let specialtyID= props.match.params.id
  let city = props.match.params.city

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
                        <Card.Text>{item.specialty.name} </Card.Text> 
                    </Card.Body> 
              </div>
              </Card>

          
  
})


    
  

  // 1 - if select._id == null then create alert box
  // if(specialtyID == null){
  //   console.log('entered 1st condition')
  //   setAlert(
  //     <Alert 
  //     variant="danger"
  //     >
  //       you must chose one of the specility that's available
  //     </Alert>
  //   )
  //   setShow(true)
  //     }
  // // 2- else if select._id 1= "0" and search !=''then axios call with specialty and city
  // else if(!specialtyID=='0' && !city==''){
  //   console.log('entered 2th condition')
  //   // console.log(`selected speciality ${specialtyID} `)
  //   // console.log(city)
   
         
  //   }
      
     
      
      


  

  


                          // inside on submit //


// // 2 - else if select._id == "0" and search !='' then axios call for all doctors in this city
//       else if(selected.id=='0' || !search==''){
//       axios.get('http://localhost:4001/api/v1/booking/finddoctors')
//       .then(data=>{
   
//       })
//       .catch((err) =>{
//          console.log(err)
  
//       })

//     }

// // 3 - else if select._id == "0" and search =='' then axios call for all doctors
//     else if(selected.id=='0' || search==''){
//     axios.get('http://localhost:4001/api/v1/booking/finddoctors')
//     console.log("entered the 3rd condition")
//       .then(data=>{
//         console.log("entered then")
//         console.log(data)
//       })
//       .catch((err) =>{
//          console.log(err.msg)
//          console.log("enter catch")
  
//       })

// }


    return (
              <>
      <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide >
                                {alert}
      </Toast>
      <Search/> 
    <div style={{padding:'2%' , margin:"0px" , textAlign:'center'}}>
  

            {doctors}
          
        
    </div>
</>
    )


    }