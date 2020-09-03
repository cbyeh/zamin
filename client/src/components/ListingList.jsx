import React from "react";
import PropTypes from "prop-types";

const Listing = (props) => {
  <></>;
};

class ListingList extends React.Component {
  // TODO: Props with sorting and filtering
  constructor() {
    super();
    this.deleteListing = this.deleteListing.bind;
    this.state = { listings: [] };
  }

  componentDidMount() {
    // Load all listings for now
    Axios.get("http://localhost:5000/listings/").then((res) => {
      this.setState({ defaultListings: res.data });
    });
  }

  deleteListing(id) {
    axios
      .delete("http://localhost:5000/exercoses/" + id)
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
      <div className="listingsContainer">
        <h1>Listings here</h1>
      </div>
    );
  }
}

export default ListingList;
