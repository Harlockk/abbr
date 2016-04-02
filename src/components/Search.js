import React from 'react';

class Search extends React.Component {
  getValue() {
    return this.refs.search.value;
  }

  render() {
    return (
      <input className="search-input" ref="search" placeholder="Abbreviation (eg: LOL)" type="text" />
    );
  }
}


export default Search;
