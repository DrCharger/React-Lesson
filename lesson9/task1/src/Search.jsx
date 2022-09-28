import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  search = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    return (
      <form class="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.handleChange}
          className="search__input"
          value={this.state.value}
        />
        <button class="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
