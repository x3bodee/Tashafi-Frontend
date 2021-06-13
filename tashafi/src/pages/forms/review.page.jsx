import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Review from '../../componesnts/forms/Review'


export default function review(props) {
    return (
        <>
       <NavBar/>
      
        <Review  doctor={props.match.params.id}/>
       
         
        </>
    )
}