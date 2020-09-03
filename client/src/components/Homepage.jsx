import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultListings: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/listings/").then((res) => {
      this.setState({ defaultListings: res.data });
    });
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
