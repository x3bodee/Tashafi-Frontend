import React, { useEffect, useState } from 'react'
import Asidebar from './Asidebar'
import Myprofile from './Myprofile'
import MyBooking from './MyBooking'
import MySessions from './MySessions'
import { Asideitems } from './Asideitems'



export default function Profile({ user }) {
    console.log(user)
    const [tab, setTab] = useState('My Profile')
    const [clas, setClas] = useState('asidepage')

    // useEffect(() => {
    //     console.log(tab);
    //   },[tab])

    const onClickHandeler = (e) => {
        let text = e.target.innerText
        console.log(text)
        setTab(text)
        if (text == "My Sessions") setClas("asidepage_session")
        else setClas("asidepage");
    }

    return (
        <>

            <div className={clas}>

                <div className="aside__bar">
                    <ul className="aside__list">
                        {Asideitems.filter((ele) => {
                            if (user.userType == 2 && ele.title == "My Sessions") console.log("")
                            else return ele
                        }).map((item, key) => {
                            return (
                                <li
                                    key={key}
                                    className="aside__item"
                                >
                                    <div id="aside__item__icon">{item.icon}</div>
                                    <div name={item.title} onClick={(e) => { onClickHandeler(e) }} id="aside__item__title">{item.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>


                <div className="aside__main">

                    {tab == "My Profile" ? <Myprofile user={user} /> : (tab == "My Booking") ? <MyBooking user={user} /> : (tab == "My Sessions" && user.userType == 1) ? <MySessions user={user} /> : <Myprofile user={user} />}


                    {/* <MySessions user={user} /> */}


                </div>
            </div>

        </>


    )
}
