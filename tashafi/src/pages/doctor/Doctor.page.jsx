import React, { useState, useEffect } from 'react'
import Profile from '../../componesnts/doctor/Profile';
import Review from '../../componesnts/doctor/Review';
import Session from '../../componesnts/doctor/Session';
import NavBar from '../../componesnts/index/NavBar';
import axios from "axios"
import '../../css/profile.css';

export default function Doctor(props) {
    // const currentValue = props.currentValue;
    // const reviewCurrentValue = props.reviewCurrentValue;
    // const gender = (props.gender=="male") ? <FaMale /> : <FaFemale />;
    // const name = props.name;
    // const speciality = props.speciality;
    // const date = props.date;

    const id = props.match.params.id;
    const [sessions, setSessions] = useState([{}]);
    const [user, setUser] = useState({});
    const [specialty, setSpecialty] = useState();
    const [currentValue, setCurrentValue] = useState("");
    const [reviewCurrentValue, setReviewCurrentValue] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/booking/doctorprofile/${id}`)
            .then(data => {
                // console.log(data);
                console.log("doctor data");
                console.log(data.data);
                console.log(data.data.reviews);
                setSessions(data.data.sessions)
                setUser(data.data.doctor)
                setSpecialty(data.data.doctor.specialty.name)
                setCurrentValue(data.data.doctorRate)
                setReviewCurrentValue(data.data.reviews)
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    // const ratingCalculator = (data) =>{
    //     const len = data.length;
    //     let sum = 0;
    //     console.log("len: "+len)
    //     console.log(data)
    //     data.forEach((ele)=>{
    //         console.log("ele :");
    //         console.log(ele);
    //         sum+=ele.review_number;
    //     })
    //     let rate= Math.round(sum/len);
    //     console.log("Rate#####: "+rate)
    //     setCurrentValue(rate);
    // }

    return (
        <div>
            {/* {console.log("user: %%%%%%%%%%%%%%%%%%%%%%%%%")} */}
            {/* {console.log(user)} */}
            {/* {console.log(currentValue)} */}
            <Profile specialty={specialty} user={user} isLogin ={props.isLogin} currentValue={currentValue} />
            {/* {console.log(sessions)} */}
            <Session isLogin ={props.isLogin} sessions={sessions}></Session>
            <Review  currentValue={reviewCurrentValue} isLogin ={props.isLogin} doctor={user._id}/>
        </div>
    )
}
