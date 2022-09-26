import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    return <Login ok={() => this.onLogin()} />;
  }
}

export default Auth;
