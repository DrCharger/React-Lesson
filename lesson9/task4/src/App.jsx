import React, { Component } from 'react';
import UsersList from './UsersList';
import users from './users.js';

class App extends Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;
