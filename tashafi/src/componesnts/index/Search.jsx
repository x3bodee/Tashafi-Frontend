import React, {Component} from 'react'; 
import {InputGroup ,Dropdown ,DropdownButton ,FormControl , Button} from 'react-bootstrap';

export default function Search() {
  const arr1 = ['Raghad' , 'Norah' ,'Abullah' ,'4' ,'5']
    return (
        <>
        <h2> Find local <span id= "span"> doctors </span>  </h2>
        <h2>You can trust</h2>
    <InputGroup className="mb-3  search" size="lg"   > 
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Specialty"
      id="input-group-dropdown-1"
    >
      
      {arr1.map(item =>{
       return  <Dropdown.Item href="#"> {item} </Dropdown.Item>
      })}
      {/* <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
    </DropdownButton>
    <FormControl class="form-control "
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
