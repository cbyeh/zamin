import globals from '../globals';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Listing = (props) => (
  <tr>
    <td>{props.listing.headline}</td>
    <td>{props.listing.address.address1}</td>
    <td>
      <Link to={'/edit/' + props.listing._id}>
        <img src="images/icon-edit.png" alt="edit" />
      </Link>{' '}
      |{' '}
      <a
        href="#"
        onClick={() => {
          props.deleteListing(props.listing._id);
        }}
      >
        <img src="images/icon-delete.png" alt="delete" />
      </a>
    </td>
  </tr>
);

class ListingList extends React.Component {
  // TODO: Props with sorting and filtering
  constructor() {
    super();
    this.deleteListing = this.deleteListing.bind(this);
    this.state = { listings: [] };
  }

  componentDidMount() {
    // Load all listings for now
    axios
      .get(`http://${globals.hostname}:${globals.serverPort}/listings/`)
      .then((res) => {
        this.setState({ listings: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteListing(id) {
    axios
      .delete(`http://${globals.hostname}:${globals.serverPort}/listings/${id}`)
      .then((res) => console.log(res.data));
    this.setState({
      listings: this.state.listings.filter((el) => el._id !== id),
    });
  }

  listingList() {
    return this.state.listings.map((listing) => {
      return (
        <Listing
          listing={listing}
          deleteListing={this.deleteListing}
          key={listing._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Headline</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.listingList()}</tbody>
        </table>
      </>
    );
  }
}

export default ListingList;
