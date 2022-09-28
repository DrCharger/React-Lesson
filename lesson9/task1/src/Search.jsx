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
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    return (
      <form class="search">
        <input
          type="text"
          onChange={this.handdleChange}
          className="search__input"
          value={this.state.value}
          name="name"
        />
        <button class="search__button" onClick={this.handdleSubmit}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
