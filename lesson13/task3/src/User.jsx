import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class User extends Component {
  state = {
    data: null,
  };
  get = () => {
    fetch(`http://api.github.com/users/${this.props.match.params.productId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data,
        }),
      );
  };

  shouldComponentUpdate() {
    if (this.state.data !== null) {
      this.setState({
        data: null,
      });
      return false;
    } else {
      return true;
    }
  }

  render() {
    if (this.state.data === null) {
      this.get();
      return null;
    } else {
      const { avatar_url, name, location } = this.state.data;
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
}

export default User;
