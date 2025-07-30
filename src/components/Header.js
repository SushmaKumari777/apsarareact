import React from 'react'
import { Col, Container, Row,} from 'react-bootstrap'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import{Fontawesome} from'react-bootstrap'

const Header = () => {
    return (
        <div>
            <header className='toparea' >

                <Row>
                    <Col>

                        <marquee direction="left" scrollamount="20">
                            <p>Grab 10% off on first order &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Grab 10% off
                                on first order</p>
                        </marquee>

                    </Col>
                </Row>

            </header>
            <div>
                <section className='menuarea'>

                    <Row>
                        <Col>

                            <Navbar expand="lg">

                                <Navbar.Brand href="#home">APSARA</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home"><Link to="/home">Home</Link></Nav.Link>
                                        <Nav.Link href="#action/3.5"><Link to="/jsr">JSR</Link></Nav.Link>
                                        <p><Fontawesome icon={faSearch} /></p>


                                        <NavDropdown title="Women" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1"><Link to="/pooh">Pooh</Link></NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Naina</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Geet</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">All Women</NavDropdown.Item>


                                        </NavDropdown>
                                        <NavDropdown title="Men" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Half Style Street Look</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Desi Formal</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Sanskari</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">All Women</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>

                            </Navbar>

                        </Col>
                    </Row>


                </section>
            </div>
        </div>
    )
}

export default Header
