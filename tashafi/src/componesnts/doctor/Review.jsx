import React from 'react'
import { Col, Container, Card, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import AddReview  from "../forms/AddReview"
import '../../css/review.css';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export default function Review(props) {
    const stars = Array(5).fill(0)
    const currentValue = props.currentValue;
    return (
        <>
        <Container className="mt-3 cont" fluid>
                <h2>Ratings</h2>
                <Row className="mt-4">
                    <Col sm={12}>
                        <Card>
                            {currentValue.map((ele)=>(
                                <Card className="m-2 ">
                                <Row>
                                    <Col sm={6} md={4}> <Container className="mt-1 ml-2"> <Row><span className="pname">{ele.patient.Fname +" "+ ele.patient.Lname}</span></Row><Row className="review_rate"> {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                color={ele.review_number > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}</Row> </Container>  </Col>
                                    <Col sm={6} md={8} className="desc">{ele.comment}</Col>
                                </Row>
                            </Card>)
                            )}
                           
                        </Card>
                    </Col>
                </Row>
                <Row className="rating mb-3">
                    <AddReview doctor={props.doctor}></AddReview>
                   
                </Row>
            </Container>
            </>
    )
}
