import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Booking from '../../componesnts/forms/Booking'


export default function booking(props) {
    return (
        <>
       <NavBar/>
     
        <Booking meeting_id={props.match.params.id}/>
        </>
    )
}
