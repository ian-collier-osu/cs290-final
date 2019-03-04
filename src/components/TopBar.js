import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

import './TopBar.css'

class TopBar extends Component {

  render() {

    return (
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                <a href="/">
                    <img src="logo.png" style={{width:220, marginTop: -7}} />
                </a>
                </Navbar.Brand>
                <Nav className="mr-auto bu-nav-left">
                    <Nav.Link href="/solutions">Solutions</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/enterprise">Enterprise</Nav.Link>
                </Nav>
                <Nav className="ml-auto bu-nav-right">
                    <Button href="/solutions" variant="outline-primary">Download Now</Button>
                </Nav>
        </Navbar>
    );

  }

}

export default TopBar;
