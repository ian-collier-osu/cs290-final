import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, ListGroup } from 'react-bootstrap';
import BodyHeader from '../components/BodyHeader.js'

import './DownloadBody.css'

class DownloadBody extends Component {

  render() {
    return (
        <div>
        <BodyHeader titleText="Download." subText="Available on all platforms."/>
        <Jumbotron className="dl-jumbo">
            <Container>
                <Row>
                    <Col className="dl-list">
                    <ListGroup >
                        <ListGroup.Item href="/fake-file.exe" action>Mac OSX (click to download)<br/><img src="download.png" height="20px"/></ListGroup.Item>
                        <ListGroup.Item href="/fake-file.exe" action>Windows<br/><img src="download.png" height="20px"/></ListGroup.Item>
                        <ListGroup.Item href="/fake-file.exe" action>Linux<br/><img src="download.png" height="20px"/></ListGroup.Item>
                        <ListGroup.Item href="/fake-file.exe" action>iOS<br/><img src="download.png" height="20px"/></ListGroup.Item>
                        <ListGroup.Item href="/fake-file.exe" action>Android<br/><img src="download.png" height="20px"/></ListGroup.Item>
                        <ListGroup.Item href="/fake-file.exe" action>Windows Phone<br/><img src="download.png" height="20px"/></ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    );

  }

}

export default DownloadBody;
