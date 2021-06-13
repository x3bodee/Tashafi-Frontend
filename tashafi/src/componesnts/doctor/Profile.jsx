import React, { useState , useEffect} from 'react'
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { FaStar, FaFemale, FaMale } from "react-icons/fa";
// import Carousel from "react-elastic-carousel";



const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 350, itemsToShow: 2 },
//     { width: 550, itemsToShow: 3, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 5 },
//     { width: 1200, itemsToShow: 8 }
// ];

export default function Profile(props) {
    const stars = Array(5).fill(0);
    // const [name,setName] = useState('')
    // const [currentValue,setCurrentValue] = useState('')
    // const [gender,setgender] = useState('')
    // const [city,setCity] = useState('')
    // const [specialty,setSpecialty] = useState('')

    // useEffect(() => {
    //     if  ( props.user  || props.currentValue){
    //         const currentValue = props.currentValue;
    //         const name = props.user.Fname + props.user.Lname ;
    //         const city = props.user.city ;
    //         const gender = (props.user.gender=="male") ? <FaMale /> : <FaFemale /> ;
    //         console.log("user specialty is")
    //         console.log(props.specialty)
    //         const specialty = props.specialty.name ;
    //         setCurrentValue(currentValue);
    //         setgender(gender);
    //         setName(name);
    //         setCity(city);
    //         setSpecialty(specialty);
    //     }


    // },[])

    // const handelItemClick = (e) => {
    //     console.log(e.target)
    // }

    return (

        <>
            <Container className="purpel" fluid>
                <Row>
                    <Col sm={12}>

                        <div className="header mt-3">
                            <div className="pic" style={{
                                backgroundImage: `url(https://res.cloudinary.com/dwa8ul4bq/image/upload/c_limit,f_auto,q_auto:eco,w_400/doctor_avatar_fallback_male)`, backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            </div>
                            <div className="info">
                                <h2>Dr. {props.user.Fname+" "+props.user.Lname} </h2>
                                <h3 className="trans"> { props.specialty }, {props.user.city}, {props.user.gender=="male" ?  <FaMale /> : <FaFemale />}</h3>

                                <div className="stars-rating mb-3">
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                color={props.currentValue > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>


                        </div>


                    </Col>
                </Row>
            </Container>

{/* 

            <div className="App">
                <h2>Available Times</h2>
                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item, i) => (
                            <Card key={i} style={{ width: '100%', height: '250px', marginLeft: '10px' }}>
                                <Card.Body>
                                    <Card.Title>Session Info</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Date : <span className="text">{date.date}</span></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Day : <span className="text">{date.day}</span></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Start: <span className="text">{date.start}</span></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">End: <span className="text">{date.end}</span></Card.Subtitle>
                                    <Button className="mt-2" id={date.session_id + i} variant="primary" onClick={(e) => handelItemClick(e)}>Book</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Carousel>
                </div>
            </div>

            <Container className="mt-3 cont">
                <h2>Ratings</h2>
                <Row className="mt-4">
                    <Col sm={12}>
                        <Card>
                            <Card className="m-2 ">
                                <Row>
                                    <Col sm={6} md={4}> <Container className="mt-1 ml-2"> <Row><span className="pname">Patient Name</span></Row><Row className="review_rate"> {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                color={currentValue > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}</Row> </Container>  </Col>
                                    <Col sm={6} md={8} className="desc">Excellent doctor! Well explained, respectful, concerned and he does his job really well. Friendly staff and respectful. Very nice area.</Col>
                                </Row>
                            </Card>
                            <Card className="m-2">
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                            <Card className="m-2">
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
 */}
        </>

    )
}
