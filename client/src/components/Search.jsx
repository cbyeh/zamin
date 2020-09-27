import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  filterListings(listings) {
    const items = listings.filter((data) => {
      // if (this.state.search == null) {
      //   return data;
      if (data.headline.toLowerCase().includes('hell'.toLowerCase())) {
        console.log(data);
        return data;
      }
    });
  }

  constructor(props) {
    super();
    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    console.log(keyword);
  };

  render() {
    return (
      <>
        <div className="search-bar">
          <h1>Search</h1>
          {/* {console.log(this.props.listings)} */}
          {console.log(this.filterListings(this.props.listings))}
        </div>
      </>
    );
  }
}

export default Search;
