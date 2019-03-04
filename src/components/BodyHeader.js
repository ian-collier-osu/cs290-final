import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import './BodyHeader.css'

class BodyHeader extends Component {

  render() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h1 class="text-center">{this.props.titleText}</h1>
                        <h4 className="text-center">{this.props.subText}</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

  }

}

export default BodyHeader;
