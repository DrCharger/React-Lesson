import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class User extends Component {
  state = {
    data: null,
  };

  get = () => {
    console.log(this.props.match);
    fetch(`http://api.github.com/users/${this.props.match.params.productId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data,
        }),
      );
  };
  render() {
    if (this.state.data === null) {
      this.get();
      return null;
    }
    const { avatar_url, name, location } = this.state.data;
    this.state.data = null;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
