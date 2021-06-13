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
    const [specialty, setSpecialty] = useState({});
    const [currentValue, setCurrentValue] = useState("");
    const [reviewCurrentValue, setReviewCurrentValue] = useState([]);
    useEffect(() => {

        axios.get(`http://localhost:4000/api/v1/booking/finddoctor/${id}`)
            .then(data => {
                // console.log(data);
                console.log("doctor data");
                console.log(data.data.doctor);
                console.log(data.data.doctor.specialty.name);
                setUser(data.data.doctor);
                setSpecialty(data.data.doctor.specialty.name);
                axios.get(`http://localhost:4000/api/v1/session/show/${id}`)
                    .then(data => {
                        console.log("sessions data");
                        console.log(data.data.sessions);
                        setSessions(data.data.sessions);
                        axios.get(`http://localhost:4000/api/v1/review/doctor/${id}`)
                            .then(data => {
                                console.log("Reivews data");
                                console.log(data.data);
                                setReviewCurrentValue(data.data);
                                ratingCalculator()
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const ratingCalculator = () =>{
        const len = reviewCurrentValue.length;
        let sum = 0;
        reviewCurrentValue.forEach((ele)=>{
            sum+=ele.review_number
        })
        setCurrentValue(Math.round(sum/len));
    }

    return (
        <div>
            <NavBar />
            {console.log("user: %%%%%%%%%%%%%%%%%%%%%%%%%")}
            {/* {console.log(user)} */}
            {console.log(currentValue)}
            <Profile specialty={specialty} user={user} currentValue={currentValue} />
            {/* {console.log(sessions)} */}
            <Session sessions={sessions} />
            {/* <Review  currentValue={reviewCurrentValue}/> */}
        </div>
    )
}
