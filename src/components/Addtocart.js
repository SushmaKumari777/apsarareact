import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import '../App.css'

const addtocart = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <h4>Your Cart</h4>
          <p>Product</p>
        </Col>
        <Col md={6}>
          <p>Total</p>
        </Col>
        <hr></hr>

      </Row>
      <Row>
        <Col md={6}>
          <div className='ad1'>
            <img src='wm1.webp' />
          </div>
        </Col>
        <Col md={6}>
          <p> Laal Bijli - V neck Strap Kurti</p>
          <p>Rs. 599.00</p>
          <p>Size Chart</p>
          <p>Size:XS</p>
          <p>Discount</p>
          <Button>- 1 +</Button>
        </Col>
        <hr></hr>
      </Row>
      <Row>
        <Col md={6}>
          <p>Estimated Total</p>
        </Col>
        <Col md={6}>
          <h4>Rs.599</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Taxes included. Discounts and shipping calculated at checkout.</p>
        </Col>
        <Row>
          <Col>  <Button>Check out</Button>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default addtocart