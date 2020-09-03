import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import PropTypes from "prop-types";

// TODO: Make a popup instead, dim background
class CreateUser extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // TODO: Get from axios
    this.setState({ owner: "Me" });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  // When form is completed
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      // username: this.state.username,
    };
    // Submit to database here
    console.log(user);
    // TODO: use env for url
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    // Bring user to homepage
    // window.location = "/";
    // Set username to blank in case it is taken
    this.setState({
      username: "",
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
            onChange={this.onChangeEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
