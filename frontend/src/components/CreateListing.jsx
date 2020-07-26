import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class CreateListing extends React.Component {
  constructor() {
    super();
    this.onChangeGeolocation = this.onChangeGeolocation.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.state = {
      owner: "",
      geolocation: "",
      headline: "",
      description: "",
      address: "",
      date: new Date(),
      responses: [],
    };
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
    };
    // Submit to database here
    console.log(listing);
    // Bring user to homepage
    window.location = "/";
  }
  render() {
    return (
      <div>
        <h3>Create New Listing</h3>
        <form onSubmit={this.onSubmit}>
          <div className="headline">
            <label>Headline: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.headline}
              onChange={this.onChangeHeadline}
            />
          </div>
          <div className="description">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="address">
            <label>Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateListing;
