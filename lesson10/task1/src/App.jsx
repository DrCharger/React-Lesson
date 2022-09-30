import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = id => {
    fetch(`https://api.github.com/users/${id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          userData: data,
        }),
      );
  };
  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
