import React from 'react'
// import { Container } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import poohp from '../images/pooh.webp'
import p from '../images/wm1.webp'
import Button from 'react-bootstrap/Button';

const Pooh = () => {
  return (
    <div>
<section className='pooh' >
  <Container>
    <Row>
      <Col md={5}>
      <h1>Pooh</h1>
      </Col>
      <Col md={7}>
      <div className='productp'>
        <img src={poohp} alt=''/>
      </div>
      </Col>
    </Row>
  </Container>
</section>
<section className='poohproducts'>
  <Container>
    <Row>
      <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        <p><b>Rs. 599.00</b></p>
                <Button className='btn'>Choose Option</Button>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>

        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>
        <Col md={3}>
      <div className='product'>
        <img src={p} alt=''/>
        </div>
        </Col>

    </Row>
  </Container>
</section>
    </div>
  )
}

export default Pooh