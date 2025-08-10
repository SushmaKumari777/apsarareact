import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'

const Checkout = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4>Delevery</h4>
                                    <Form.Select aria-label="Default select example">
                                        <option>Country/Region</option>
                                        <option value="1">India</option>

                                    </Form.Select>
                                    <br></br>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Control placeholder="First name" />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Last name" />
                                            </Col>
                                        </Row>
                                    </Form>
                                    <br></br>
                                    <Form.Control placeholder="address" />
                                    <Form.Control placeholder="address2" />                                   
                                </Col>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Checkout
