import React from 'react'
import '../../css/Home.css'
import MainImg from '../../img/undraw_doctors_hwty.png' 
import Search from './Search'
import Typicaltext from './Typical'



export default function Main() {
  

    return (
        <div class="container__home">

            <div class="left">
                <Typicaltext/>
                <Search/>
            </div>


            <div class="right">
                <img src={MainImg} alt="" />
            </div>
        </div>
    )
}
