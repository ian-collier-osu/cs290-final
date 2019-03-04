import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

import './TopBar.css'

class TopBar extends Component {

  render() {

    return (
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">BigUpload</Navbar.Brand>
                <Nav className="mr-auto bu-nav-left">
                    <Nav.Link href="/solutions">Solutions</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/enterprise">Enterprise</Nav.Link>
                </Nav>
                <Nav className="ml-auto bu-nav-right">
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Button href="/solutions" variant="outline-primary">Get Started</Button>
                </Nav>
        </Navbar>
    );

  }

}

export default TopBar;
