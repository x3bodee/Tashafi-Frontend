import React , {useEffect  , useState} from 'react'
import {InputGroup ,Dropdown ,DropdownButton ,FormControl , Button} from 'react-bootstrap';
import Typical from 'react-typical'
import axios from 'axios'

export default function Search() {
  const [speciality , setSpeciality] = useState([''])
  useEffect(()=>{
    axios.get("http://localhost:4001/api/v1/specialty/specialties")
    .then(data => {      
      data.data.allSpecialties.forEach(element => {
        setSpeciality(data.data.allSpecialties)

      
      });
    })
    .catch(error => console.error(error))
    } , [])



  const specialties = speciality.map((one)=>{
    return  <Dropdown.Item href="#"> {one.name} </Dropdown.Item>
  })


    return (
      
        <>
        

        <h2> Find local{' '} 
         <Typical
          loop={Infinity} 
          wrapper="span" 
          steps={['doctor',3000 ,'dentist',2000] }  /> 
                  <br />
                You can trust
        </h2>

    <InputGroup className="mb-3  search" size="lg"   > 
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Specialty"
      id="input-group-dropdown-1"
      
    >
      
      {specialties}
    </DropdownButton>
    <FormControl className="form-control "
      placeholder=" City"
      aria-label="City"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Search </Button>
    </InputGroup.Prepend>
  </InputGroup>

        </>
    )
}
// 