import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import wm1 from '../images/wm1.webp'
import wm2 from '../images/wm2.webp'
import wm3 from '../images/wm3.webp'
import wm4 from '../images/wm4.webp'
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.webp'
import m4 from '../images/m4.webp'
import pooh from '../images/pooh.webp'
import naina from '../images/naina.webp'
import geet from '../images/geet.webp'
import aisa from '../images/aisa.webp'
import halfstyle from '../images/half style.webp'
import desi from '../images/desi.webp'
import sanskari from '../images/sanskari.webp'
import all from '../images/allrounder.webp'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'

import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/desi.webp'
import video from '../images/menuvideo.mp4'

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/aisa.webp';


const Home = () => {
  return (
    <div>
      {/* ------------------------Latest Arrivals Women Section----------------------- */}
      <section>
        <Container>
          <Row>
            <Col>
              <video width="100%" height="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      <Row>
        <Col>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
      <section className='latestw'>
        <Container>
          <Row>
            <Col>
              <h2>Latest Arrivals</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='product'>
                <img src={wm1} alt='' />
                <p><b>Rs. 599.00</b></p>
                <Button className='btn'><Link to="/strapkurti">Choose Button</Link></Button>
              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm2} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm3} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm4} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm4} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm3} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm2} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm1} alt='' />
                <p><b>Rs. 599.00</b></p>
                <Button className='btn'>Choose Option</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*------ -------- Latest Arrivals Men Section-----------------*/}
      <section className='latestm'>
        <Container>
          <Row>
            <Col>
              <h2>Latest Arrivals</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='product'>
                <img src={m1} alt='' />
                <p><b>Rs. 799.00</b></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m2} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m3} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m4} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m4} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m3} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m2} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m1} alt='' />
                <p><b>Rs. 799.00</b></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='womencollections'>
        <Container>
          <Row>
            <Col>
              <h2>Women Collections</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='productc'>
                <img src={pooh} alt='' />
                <p><Link to="/pooh">Pooh</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={naina} alt='' />
                <p><Link to="/naina">Naina</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={geet} alt='' />
                <p><Link to="/geet">Geet</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={aisa} alt='' />
                <p><Link to="/aisa">Aisa</Link></p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      <section className='mencollections'>
        <Container>
          <Row>
            <Col>
              <h2>Men Collections</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='productc' >

                <img src={halfstyle} alt='' />
                <p><Link to="/halfstyle">Half Style Street Look</Link></p>


              </div>
            </Col>

            <Col md={3}>
              <div className='productc'>
                <img src={desi} alt='' />
                <p><Link to="/desi">The Desi Formals</Link></p>


              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={sanskari} alt='' />
                <p><Link to="/sanskari">The Sanskari drips</Link></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={all} alt='' />
                <p><Link to="/allm">All Collections</Link></p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='slidearea'>
        <Container>
          <Row>
            <Col>
              <h1>हमारी नहीं हमारी अप्सराओ की सुनो</h1>
            </Col>

          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt='' />
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

    </div>
  )
}

export default Home
