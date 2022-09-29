import React, { Component } from 'react';
import UserList from './UserList';
import users from './users.js';

class App extends Component {
  render() {
    return <UserList users={users} />;
  }
}

export default App;
