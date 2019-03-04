import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, Button } from 'react-bootstrap';
import BodyHeader from '../components/BodyHeader.js'
import './EnterpriseBody.css'

class EnterpriseBody extends Component {

  render() {
    return (
        <div>
        <BodyHeader titleText="Enterprise storage for any scale." subText="Large-scale backups, syncronized storage, and file sharing to meet your company's needs."/>
        <Jumbotron className="form-jumbo">
            <Container>
                <Row>
                    <Col>
                    <Form>
                    <Form.Label>Believe BigUpload is right for your company? Contact us today:</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="First Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Phone #" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="4" placeholder="Additional Comments" />
                        <Form.Text className="text-muted">
                          We'll be in contact within one business day.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Conact Me
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default EnterpriseBody;
