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
                    <Form action="http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php">
                    <Form.Label>Believe BigUpload is right for your company? Contact us today:</Form.Label>
                    <Form.Group>
                        <Form.Control name="firstname" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="lastname" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="companyname" placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="emailaddr" type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="phonenum" placeholder="Phone #" />

                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="comments" as="textarea" rows="4" placeholder="Additional Comments" />
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
                <hr/>
                <Row >
                    <Col className="text-center">
                        <h5>Or email us at <a href="mailto:enterprise@big.upload" target="_top">enterprise@big.upload</a></h5>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default EnterpriseBody;
