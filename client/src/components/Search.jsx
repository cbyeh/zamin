import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super();

    Search.defaultProps = {
      listings: {},
    };
  }

  render() {
    return (
      <>
        <div className="search-bar">
          <h1>Search</h1>
        </div>
      </>
    );
  }
}

export default Search;
