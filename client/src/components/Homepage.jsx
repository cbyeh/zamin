import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import ListingList from "./ListingList";

class Homepage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="listingsContainer">
        <ListingList />
      </div>
    );
  }
}

export default Homepage;
