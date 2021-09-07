import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css'
import fb from '../../asset/fb.png';
import ig from '../../asset/ig.png';
import iln from '../../asset/in.png';


class FooterWeb extends React.Component {
    render() {
        return (
            <div className="footer-web">
                <div className="footer-text">thanks for scroling</div>
                <Row className="justify-content-md-center img-center">
                    <Col xs={12} sm={4} md={4}>
                        <a target="_blank" href='https://www.facebook.com/fernando.silaban.14'>
                            <img className="img-footer" src={fb} />

                        </a>
                        <a target="_blank" href='https://www.instagram.com/fernandosilbn/'>
                            <img className="img-footer" src={ig} />
                        </a>
                        <a target="_blank" href='https://www.linkedin.com/in/fernando-silaban-81bb59192/'>
                            <img className="img-footer" src={iln} />
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FooterWeb;