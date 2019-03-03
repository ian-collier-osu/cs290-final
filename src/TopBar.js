import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';

import './TopBar.css'

class TopBar extends Component {

  render() {

    return (

        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">FileUpload</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#solutions">Solutions</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Button variant="outline-primary">Get Started</Button>
                </Nav>
        </Navbar>
    );

  }

}

export default TopBar;
