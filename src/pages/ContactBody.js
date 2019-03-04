import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ContactBody.css'

class ContactBody extends Component {

  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="text-center">Contact.</h1>
                </Col>
            </Row>
        </Container>
    );

  }

}

export default ContactBody;
