import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };
  handdleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  handdleSubmit = event => {
    event.preventDefault();
    alert(`Search text: good restaurant`);
  };
  render() {
    return (
      <form class="search" onSubmit={this.handdleSubmit}>
        <input
          type="text"
          onChange={this.handdleChange}
          className="search__input"
          value={this.state.value}
          name="name"
        />
        <button class="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
