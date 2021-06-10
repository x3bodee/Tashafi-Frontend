import React from 'react'
import '../../css/Home.css'
import MainImg from '../../img/undraw_doctors_hwty.png' 
import Search from './Search'


export default function Main() {
  

    return (
        <div class="container__home">

            <div class="left">
                {/* 
                
                1. dropdown menu
                2. input 
                3. search button
                */}

                <Search/>
            </div>


            <div class="right">
                <img src={MainImg} alt="" />
            </div>
        </div>
    )
}
