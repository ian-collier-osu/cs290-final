import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './404.css'

class NotFoundBody extends Component {

  render() {
    return (
        <Jumbotron className="vertical-center">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Error 404</h1>
                        <h4 className="text-center">Page not found.</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

  }

}

export default NotFoundBody;
