import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import axios from "axios";

class CreateListing extends React.Component {
  constructor() {
    super();

    this.state = {
      owner: "",
      geolocation: "",
      headline: "",
      description: "",
      address: "",
      date: new Date(), // Time created
      pictures: [],
      responses: [],
    };

    this.onChangeGeolocation = this.onChangeGeolocation.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // TODO: Get from axios
    this.setState({ owner: "Me" });
  }

  onChangeGeolocation(e) {
    this.setState({
      geolocation: e.target.value,
    });
  }

  onChangeHeadline(e) {
    this.setState({
      headline: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  // When form is completed
  onSubmit(e) {
    e.preventDefault();
    const listing = {
      owner: this.state.owner,
      geolocation: this.state.geolocation,
      headline: this.state.headline,
      description: this.state.description,
      address: this.state.address,
      date: new Date().getTime(),
    };
    // Submit to database here
    console.log(listing);
    // Bring user to homepage
    // window.location = "/";
  }

  render() {
    return (
      <>
        <h3>Create New Listing</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formHeadline">
            <Form.Label>Headline</Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              placeholder="Specials, discounts, etc"
              onChange={this.onChangeHeadline}
            />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Include images" />
            <Form.Text className="text-muted">Up to (5) max.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Include more details here..."
              onChange={this.onChangeDescription}
            />
          </Form.Group>
          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Include more details here..."
            />
          </Form.Group>
          <Button
            variant="primary"
            className="submit-form-button"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </>
    );
  }
}

export default CreateListing;
