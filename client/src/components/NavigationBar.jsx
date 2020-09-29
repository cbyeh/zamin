import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/NavigationBar.css';

function handleLogin() {
  return 0;
}

class NavigationBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img className="icon" src="favicon.ico" height="30" loading="lazy" />{' '}
          Discover gems around you!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/create">Create Listing</Nav.Link>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for food, items, services"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav className="navbar-right">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
