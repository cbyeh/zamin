import globals from '../globals';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { uploadFile, deleteFile } from 'react-s3';
import axios from 'axios';

class EditListing extends React.Component {
  constructor() {
    super();

    this.state = {
      owner: '',
      geolocation: '',
      headline: '',
      description: '',
      address1: '',
      address2: '',
      city: '',
      state: 'AL',
      zip: '',
      pictures: [],
      responses: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/listings/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          owner: res.data.owner,
          geolocation: res.data.geolocation,
          headline: res.data.headline,
          description: res.data.description,
          address1: res.data.address.address1,
          address2: res.data.address.address2,
          city: res.data.address.city,
          state: res.data.address.state,
          zip: res.data.address.zip,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    // // TODO: Get from axios
    // this.setState({ owner: "Me" });
  }

  /** Handle change in fields **/
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /** When form is completed **/
  onSubmit(e) {
    e.preventDefault();
    const listing = {
      owner: this.state.owner,
      geolocation: this.state.geolocation,
      headline: this.state.headline,
      description: this.state.description,
      address: {
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
    };
    // Submit to database here
    console.log(listing);
    axios
      .post(
        `http://${globals.hostname}:${globals.serverPort}/listings/update/${this.props.match.params.id}`,
        listing
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // Bring user to homepage
    window.location = '/';
  }

  render() {
    return (
      <>
        <h3>Edit Your Listing</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formHeadline">
            <Form.Label>Headline</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Specials, discounts, etc"
              value={this.state.headline}
              name="headline"
              onChange={this.onChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Include images" />
            <Form.Text className="text-muted">Up to (5) max.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder="Include more details here..."
              value={this.state.description}
              name="description"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 Main St"
              value={this.state.address1}
              name="address1"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Suite, number, special directions"
              value={this.state.address2}
              name="address2"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                defaultValue="AL"
                value={this.state.state}
                name="state"
                onChange={this.onChange}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="CA">CA</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="number"
                name="zip"
                value={this.state.zip}
                onChange={this.onChange}
              />
            </Form.Group>
          </Form.Row>
          <Button
            variant="primary"
            className="submit-form-button"
            type="submit"
          >
            Confirm Changes
          </Button>
        </Form>
      </>
    );
  }
}

export default EditListing;
