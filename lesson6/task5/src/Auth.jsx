import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
import './index.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      size: props.size,
    };
  }

  onLogin = async () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return !this.state.isLoggedIn ? (
      <Login ok={() => this.onLogin()} />
    ) : (
      <Spinner size={this.state.size} ok={() => this.onLogout()} />
    );
  }
}

export default Auth;
