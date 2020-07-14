import React from "react";
import PropTypes from "prop-types";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultListings: [],
    };
  }
  render() {
    const { defaultListings } = this.state;
    return (
      <div className="listingsContainer">
        <h1>Listings here</h1>
      </div>
    );
  }
}

export default Homepage;
