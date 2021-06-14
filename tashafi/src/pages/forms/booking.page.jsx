import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Booking from '../../componesnts/forms/Booking'


export default function booking(props) {
    const id = props.match.params.id;
    console.log(id);
    return (
        <>
        <Booking meeting_id={id}/>
        </>
    )
}
