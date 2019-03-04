import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Table } from 'react-bootstrap';
import BodyHeader from '../components/BodyHeader.js'

import './PricingBody.css'

class PricingBody extends Component {

  render() {
    return (
        <div>
        <BodyHeader titleText="Big plans, small prices." subText="Choose the plan that's right for you."/>
        <Jumbotron className="plan-jumbo">
            <Container>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody className="text-center">
                    <tr>
                    <td><b>Features</b></td>
                      <td><h5>Big</h5></td>
                      <td><h4>Bigger</h4></td>
                      <td><h3>Biggest</h3></td>
                    </tr>
                    <tr>
                      <td>Storage</td>
                      <td>4 Gigabytes</td>
                      <td>2 Terabytes</td>
                      <td>6 Terabytes</td>
                    </tr>
                    <tr>
                    <td>Super Sync</td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    <tr>
                    <td>Full Text Search</td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    <tr>
                    <td>Document Sharing</td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    <tr>
                    <td>Shared Plan</td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    <tr>
                    <td>Remote Wipe</td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    <tr>
                    <td>Instant Support</td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_unchecked.png" height="20px"/></td>
                      <td><img src="icon_check.png" height="20px"/></td>
                    </tr>
                    </tbody>
                    <tr>
                        <td></td>
                        <td className="text-center"><Button variant="primary" type="submit">Free!</Button></td>
                        <td className="text-center"><Button variant="primary" type="submit">4.99 / mo.</Button></td>
                        <td className="text-center"><Button variant="primary" type="submit">7.99 / mo.</Button></td>
                    </tr>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default PricingBody;
