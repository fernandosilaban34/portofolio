import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from '../Box/Box';
import './styles.css'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <Row>
                    <Col md={7} style={{paddingLeft:'25%', paddingTop:'2%'}}>
                        <Box/>
                        <Box/>
                        <Box/>
                    </Col>
                    <Col md={5}>
                        <p className='title-contact' >-  Introduct</p>
                        <p className='title-personal'>Hello my is Fernando Silaban</p>
                        <Col md={5} style={{paddingLeft:'3%'}}>
                            <p style={{textAlign:'left', color:'white'}}>Officia ipsum reprehenderit eu elit dolor labore fugiat non velit consectetur voluptate.
                                Tempor do sint culpa incididunt sunt incididunt labore enim eu laboris ut consequat elit.</p>
                        </Col>
                        <p className="my-born-date">2 SEPTEMBER 1996</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;