import globals from '../globals';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { uploadFile } from 'react-s3';
import axios from 'axios';

import config from '../config';

class CreateListing extends React.Component {
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
      images: [],
      responses: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onAddImage = this.onAddImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /** Handle images being deleted */
  onRemoveImage(id) {
    this.setState({
      images: this.state.images.filter((image) => image.public_id !== id),
    });
  }

  /** Handle images being added */
  onAddImage(e) {
    // console.log(e);
    // this.setState({
    //   images: this.state.images.concat(e),
    // });
    console.log(e);
    uploadFile(e, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  /** Handle change in text and drop down fields */
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
    // Upload images to s3 here
    for (let image of this.state.images) {
      console.log(image);
      uploadFile(image, config)
        .then((data) => console.log(data.location))
        .catch((err) => console.log(err));
    }
    // Submit to database here
    console.log(listing);
    axios
      .post(
        `http://${globals.hostname}:${globals.serverPort}/listings/add`,
        listing
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // Bring user to homepage
    // window.location = '/';
  }

  render() {
    return (
      <>
        <h3>Create New Listing</h3>

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formHeadline">
            <Form.Label>Headline</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Specials, discounts, etc"
              name="headline"
              onChange={this.onChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <input type="file" onChange={this.onAddImage} />
            <Form.Text className="text-muted">Up to (5) max.</Form.Text>
          </Form.Group>
          {this.state.images}
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder="Include more details here..."
              name="description"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 Main St"
              name="address1"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Suite, number, special directions"
              name="address2"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                defaultValue="AL"
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
              <Form.Control type="number" name="zip" onChange={this.onChange} />
            </Form.Group>
          </Form.Row>
          <Button
            variant="primary"
            className="submit-form-button"
            type="submit"
          >
            Create!
          </Button>
        </Form>
      </>
    );
  }
}

export default CreateListing;
