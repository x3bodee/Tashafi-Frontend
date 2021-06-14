import React from 'react'
import NavBar from '../../componesnts/index/NavBar'
import Main from '../../componesnts/index/Main'
import Footer from '../../componesnts/index/Footer'


export default function home(props) {
    return (
        <>
        <NavBar isLogin ={props.isLogin}   />
        <Main/> 
        <Footer />
       
         
        </>
    )
}
