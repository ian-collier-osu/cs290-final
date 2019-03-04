import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import BodyHeader from '../components/BodyHeader.js'

import './SolutionsBody.css'

class SolutionsBody extends Component {

  render() {
    return (
        <div>
        <BodyHeader titleText="Solutions." subText=""/>
        <Jumbotron className="sol-jumbo">
            <Container>
                <Row className="sol-row">
                    <Col sm={4}>
                    <h3>Super Sync</h3>
                    <br/>
                    <img src="cloud-computing.png" height="160px"/>
                    </Col>
                    <Col sm={8}>Writing copy is hard. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
                </Row>
                <hr/>
                <Row className="sol-row">
                    <Col sm={4}>
                    <h3>Document Sharing</h3>
                    <br/>
                    <img src="share.png" height="160px"/>
                    </Col>
                    <Col sm={8}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Col>
                </Row>
                <hr/>
                <Row className="sol-row">
                    <Col sm={4}>
                    <h3>Secure Cloud Backups</h3>
                    <br/>
                    <img src="database.png" height="160px"/>
                    </Col>
                    <Col sm={8}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default SolutionsBody;
