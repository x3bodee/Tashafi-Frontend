import React from 'react'
import { Button, Col, Container, Card, Row } from "react-bootstrap";
export default function Profile(props) {
    console.log(props.id)
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12}>

                        <div className="header mt-2">
                            <div className="pic" style={{backgroundImage : `url(https://res.cloudinary.com/dwa8ul4bq/image/upload/c_limit,f_auto,q_auto:eco,w_400/doctor_avatar_fallback_male)` ,backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'}}>
                            </div>
                            <div className="info">
                                <h2>Dr. doctor name</h2>

                                <p>Rate: <br /></p>
                            </div>
                            

                        </div>


                    </Col>
                </Row>
            </Container>
        </>

            )
}
