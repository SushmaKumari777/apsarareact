import React from 'react'
import './Strap.css';

import { Row,Col,Container,Button } from 'react-bootstrap'
import strap from '../images/laalbijli1.webp'
const Strapkurti = () => {
  return (
    
      <div>
<Container>
    <Row>
        <Col md={6}>
        <div className='strap'>
        <img src={strap} alt=''/>
      </div>
        </Col>
        <Col md={6}>
        <h1>Laal Bijli - V neck Strap Kurti</h1>
        <p>Rs. 599.00</p>
        <p>Size Chart</p>
        <p>
            Size
            <Button>XS</Button>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
        </p>
        </Col>
    </Row>
</Container>
    
    </div>
  )
}

export default Strapkurti
