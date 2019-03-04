import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Holder } from 'react-holder'

import './HomeBody.css'

class HomeBody extends Component {

  render() {

    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <h1 class="text-center">The premier cloud storage service.</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="test.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        </div>
    );

  }

}

export default HomeBody;
