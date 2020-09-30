import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    Search.defaultProps = {
      listings: {},
    };
  }

  render() {
    return (
      <div className="search-bar">
        <h1>Search</h1>
      </div>
    );
  }
}

export default Search;
