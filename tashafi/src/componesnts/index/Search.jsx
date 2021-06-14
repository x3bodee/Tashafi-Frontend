import React, { useEffect, useState } from 'react'
import { InputGroup, Dropdown, DropdownButton, FormControl, Button, Form, Alert, Toast } from 'react-bootstrap';
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom";

export default function Search(props) {
  // const [speciality , setSpeciality] = useState([''])
  // const speciality2= props.specialit
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState({ name: "speciality", id: null })
  const [alert, setAlert] = useState('')
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([''])

  const history = useHistory();

  //   useEffect(()=>{
  //     console.log("speciality in search")
  //     console.log(props.specialit)

  //     let specialties = props.specialit.map((item)=>{
  //       return  <Dropdown.Item href="#" eventKey={`${item.name} ${item._id}`} > {item.name} </Dropdown.Item>
  //     })
  //     console.log(specialties)
  //     setSpeciality(specialties)
  // },[])

  // 
  const changeSearchHandler = ({ target: { name, value } }) => {
    setSearch({ [name]: value })

  }

  const onClick = (e) => {
    const x = e.split(" ")
    setSelected({
      name: x[0],
      id: x[1]
    })
    console.log(e)
  }


  const onSubmit = (e) => {
    e.preventDefault()
    history.push(`/result/${selected.id}/${search.city}`)

    // 1 - if select._id == null then create alert box
    if (selected.id == null || search.city == undefined) {
      setAlert(

        <Alert
          variant="danger"
        >
          messingData
        </Alert>

      )
      setShow(true)

    }


  }
  // const specialties = speciality.map((item)=>{
  //   return  <Dropdown.Item href="#" eventKey={`${item.name} ${item._id}`} > {item.name} </Dropdown.Item>
  // })

  return (
    <>
      <Form
        onSubmit={(e) => onSubmit(e)}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide >
          {alert}
        </Toast>
        <InputGroup className="mb-3  search" size="lg" >
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title={selected.name}
            id="input-group-dropdown-1"
            onSelect={(e) => onClick(e)}
            name="speciality"


          >

            {props.speciality}
          </DropdownButton>
          <FormControl className="form-control "
            placeholder=" City"
            aria-label="City"
            aria-describedby="basic-addon2"
            name="city"
            onChange={(e) => changeSearchHandler(e)}
          />
          <InputGroup.Prepend>
            <Button variant="outline-secondary" type="submit">Search </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Form>

    </>

  )
}
//