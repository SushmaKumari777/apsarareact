import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
const Signin = () => {
    return (
        <div>
            <Row>
                <Col>
            <h4>Sign In</h4>
            <p>Enter your email and we'll send you a verification code</p>
            <Button>email</Button>
            <br></br>
            <br></br>
            <Button>Continue</Button>
            <p>Privacy policy</p> 
            </Col>
</Row>
        </div>
    )
}

export default Signin
