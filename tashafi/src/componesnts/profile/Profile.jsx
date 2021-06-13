import React , {useEffect,useState} from 'react'
import Asidebar from './Asidebar'
import Myprofile from './Myprofile'
import MyBooking from './MyBooking'
import MySessions from './MySessions'
import {Asideitems} from './Asideitems'



export default function Profile({user}) {
console.log(user)

    // useEffect(() => {
    //     axios.get(`http://localhost:4000/api/v1/user/${user._id}`)
    //       .then(data => {
    //         setUserInfo(data.data)
    //       }).catch(err => {
    //         console.log(err)
    //       })
    //   })


    
    return (
        <>
        { user &&
        <div className="asidepage">

           <Asidebar/>
           
            <div className="aside__main">

                {/* <Myprofile user={user} /> */}
                {/* <MyBooking user={user}/>   */}
                <MySessions user={user}/>  


            </div>
        </div>
        }
        </>

        
    )
}
