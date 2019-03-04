import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './PricingBody.css'

class PricingBody extends Component {

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="text-center">Pricing.</h1>
                </Col>
            </Row>
        </Container>
    );

  }

}

export default PricingBody;
