import React, { Component } from 'react';

class Search extends Component {

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (

      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />

    );
  }
}

export default Search;
