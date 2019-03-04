import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Jumbotron } from 'react-bootstrap';
import { Holder } from 'react-holder'
import BodyHeader from '../components/BodyHeader.js'

import './HomeBody.css'

class HomeBody extends Component {

  render() {

    return (
        <div>
        <BodyHeader titleText="Think BigUpload." subText="Trusted cloud storage for the future."/>
        <Jumbotron className="home-jumbo">
            <Container>
                <Row className="home-features">
                    <Col sm={true} className="">
                    <img src="locked.png" height="160px"/>
                    <br/>
                    <br/>
                    <h3>Secure</h3>
                    </Col>
                    <Col sm={true}>
                    <img src="fast-forward.png" height="160px"/>
                    <br/>
                    <br/>
                    <h3>Lighting Fast</h3>
                    </Col>
                    <Col sm={true}>
                    <img src="users.png" height="160px"/>
                    <br/>
                    <br/>
                    <h3>1 Million+ Users</h3>
                    </Col>
                </Row>
                <hr/>
                <Row className="home-companies">
                    <Col>
                        <h2 className="text-center">Companies That Trust BigUpload</h2>
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="companies1.png"
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="companies2.png"
                              alt="First slide"
                            />
                          </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default HomeBody;
