import React from 'react'
import { Col, Container, Card, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export default function Review(props) {
    const stars = Array(5).fill(0)
    const currentValue = props.reviewCurrentValue;
    return (
        <>
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
            </>
    )
}
