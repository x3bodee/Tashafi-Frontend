import React from 'react'
import '../../css/Home.css'
import MainImg from '../../img/undraw_doctors_hwty.png'
import { InputGroup , DropdownButton , Dropdown , FormControl , Button} from 'react-bootstrap';

export default function Main() {
    const arr1 =['1','2','3'];
    return (
        <div class="container__home">

            <div class="left">
                {/* 
                1. dropdown menu
                2. input 
                3. search button
                */}

                <h2> Find local <span id="span"> doctors </span>  </h2>
                <h2>You can trust</h2>
                <InputGroup className="mb-3 search" size="lg" >
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Specialty"
                        id="input-group-dropdown-1"
                    >
                        {arr1.map(item => {
                            return <Dropdown.Item href="#"> {item} </Dropdown.Item>
                        })}
                        {/* <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                    </DropdownButton>
                    <FormControl class="form-control"
                        placeholder=" City"
                        aria-label="City"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">Search </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>


            <div class="right">
                <img src={MainImg} alt="" />
            </div>
        </div>
    )
}
