import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Login from '../../componesnts/forms/Login'
import Footer from '../../componesnts/index/Footer'



export default function login(props) {
    return (
        <>
        <Login login={props.login}/>
        <Footer />
       
         
        </>
    )
}
