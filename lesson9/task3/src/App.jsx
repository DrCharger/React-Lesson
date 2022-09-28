import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = formRef => {
    const formData = [...new FormData(formRef)].reduce(
      (acc, [name, value]) => ({
        ...acc,
        [name]: value,
      }),
      {},
    );
    console.log(formData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
