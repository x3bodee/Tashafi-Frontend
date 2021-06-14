import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
];

export default function Session(props) {
    // const [date, setDate] = useState();
    const date = props.sessions;
    const history = useHistory();

    // useEffect(() => {
    //     if (props.sessions) {
    //         let arr = []
    //         const ses = props.sessions
    //         ses.forEach((ele) => {
    //             let start = new Date(ele.start_time)
    //             let end = new Date(ele.end_time)

    //             var sn = start.toLocaleString().split(", ");
    //             var en = start.toLocaleString().split(", ");
    //             var g = end.toString().split(" ")[0];
    //             let date = { date: sn[0], day: g, start: sn[1], end: en[1], session_id: ele._id }
    //             arr.push(date);
    //         })
    //         setDate(arr);
    //     }


    // }, [])

    const handelItemClick = (e) => {
        console.log(e.target.id)
        history.push('/booking/'+e.target.id)
    }

//  datee.map( (ele) =>  {
//     let start = new Date(ele.start_time)
//     let end = new Date(ele.end_time)

//     var sn = start.toLocaleString().split(", ");
//     var en = start.toLocaleString().split(", ");
//     var g = end.toString().split(" ")[0];
//     let date = { date: sn[0], day: g, start: sn[1], end: en[1], session_id: ele._id }
//     return date;
//  });

    return (
        

        <>
            <div className="App">
                <h2>Available Times</h2>
                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                                           {date.map((date, i) => (
                    <Card key={i} style={{ width: '100%', height: '250px', marginLeft: '10px' }}>
                        <Card.Body>
                            <Card.Title>Session Info</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Date : <span className="text">{date.date}</span></Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Day : <span className="text">{date.day}</span></Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Start: <span className="text">{date.start}</span></Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">End: <span className="text">{date.end}</span></Card.Subtitle>
                            <Button className="mt-2" id={date.session_id} variant="primary" onClick={(e) => handelItemClick(e)}>Book</Button>
                            
                        </Card.Body>
                    </Card>
                ))}
            </Carousel>
            </div>
        </div>
    </>
    )
}
