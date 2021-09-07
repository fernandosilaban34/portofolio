import React, { Component } from 'react';
import { Nav, Container, Navbar, Col, Row } from 'react-bootstrap'
import './styles.css'

class Navbars extends Component {
    state = {  }
    render() { 
        return (  
            <Navbar className="bg" variant="light">
            <Container >
                <Navbar.Brand href="#home" ><p className="text">Portofolio</p></Navbar.Brand>
                <Nav>
                    <Row>
                        <Col xs={12} md={4}>
                            <Nav.Link href="#home"><p className="text">Homes</p></Nav.Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Nav.Link href="#features"><p className="text">Features</p></Nav.Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Nav.Link href="#pricing"><p className="text">Pricing</p></Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar>
        );
    }
}
 
export default Navbars ;