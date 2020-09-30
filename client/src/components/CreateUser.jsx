import globals from '../globals';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

// TODO: Make a popup instead, dim background, make password secure in server
class CreateUser extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // TODO: Get from axios
    this.setState({ owner: 'Me' });
  }

  /** Handle change in fields **/
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /** When form is completed **/
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    // Submit to database here
    console.log(user);
    // TODO: use env for url
    axios
      .post(`http://${globals.hostname}:${globals.serverPort}/users/add`, user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // Bring user to homepage
    // window.location = "/";
    // Set username to blank in case it is taken
    this.setState({
      username: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.onChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onChange}
          />
          {/* TODO: put at least 5 characters */}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions and Private Policy"
          />
        </Form.Group>
        <Button variant="primary" className="submit-form-button" type="submit">
          Register
        </Button>
      </Form>
    );
  }
}

export default CreateUser;
