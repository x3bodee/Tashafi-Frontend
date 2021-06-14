import React, { useEffect, useState } from 'react'
import '../../css/Home.css'
import MainImg from '../../img/undraw_doctors_hwty.png'
import Search from './Search'
import Typicaltext from './Typical'
import axios from 'axios'
import { Dropdown } from 'react-bootstrap';



export default function Main() {

    const [speciality, setSpeciality] = useState([''])
    const [search_specialties, setSearchSpecialties] = useState([''])
    const [typical_specialties, setTypicalSpecialties] = useState([''])


    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/specialty/specialties")
            .then(data => {
                let array = [{ name: 'All Speciality', _id: '0' }]
                let typ_specialties = []
                let sea_specialties = []
                data.data.allSpecialties.forEach(element => {
                    array.push(element)
                });
                array.forEach((ele, i) => {
                    if (i == 0) {
                        sea_specialties.push(<Dropdown.Item href="#" eventKey={`${ele.name} ${ele._id}`} > {ele.name} </Dropdown.Item>)
                    } else {
                        sea_specialties.push(<Dropdown.Item href="#" eventKey={`${ele.name} ${ele._id}`} > {ele.name} </Dropdown.Item>)
                        if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5) {
                            typ_specialties.push(ele.name)
                            typ_specialties.push(4000)
                        }
                    }
                })
                console.log(array)
                setSpeciality(array)
                setSearchSpecialties(sea_specialties)
                setTypicalSpecialties(typ_specialties)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div class="container__home">
            {console.log(speciality)}
            <div class="left">
                <Typicaltext speciality={typical_specialties} />
                <Search speciality={search_specialties} />
            </div>


            <div class="right">
                <img src={MainImg} alt="" />
            </div>
        </div>
    )
}
