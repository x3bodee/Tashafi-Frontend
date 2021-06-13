import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Login from '../../componesnts/forms/Login'


export default function login(props) {
    return (
        <>
       <NavBar/>
        <Login login={props.login}/>
       
         
        </>
    )
}
