import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import { useParams } from 'react-router'
const Buy = () => {
  const { productId } = useParams();
 
  return (
    <div>
      {/* <h1> {productId}</h1> */}
     
     <section>
     <Container>
      <Row>
        <Col></Col>
        <Col>
        <p>{productId}</p>
        <p>Rs.</p>
        </Col>
      </Row>
     </Container>
      </section>
    
      
      
    </div>
  )
}

export default Buy
