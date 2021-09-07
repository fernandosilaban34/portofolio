import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css'
import logo from '../../asset/cover-me.png'

class SlideCover extends React.Component {
    render() {
        return (
            <div className="cover">
                <Row>
                    <Col xs={7}>
                    <h1 className="my-name">Talk is cheap.</h1>
                    <h1 className="my-name-last">Show me the code</h1>
                    <div className="line-name"></div>
                    <img className="cover-img" src={logo}/>
                    </Col>
                    <Col xs={5}>
                        <p className="text-cover">- Introduction</p>
                        <h2 className="text-cover-desc">Fullstack Developer,</h2>
                        <h2 className="text-cover-desc">base in Indonesia</h2>
                        <p style={{color:'yellow', textDecorationLine: 'underline', marginTop:20}}>My Story...</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SlideCover;