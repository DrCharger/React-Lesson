import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = formData => {
    console.log(formData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
