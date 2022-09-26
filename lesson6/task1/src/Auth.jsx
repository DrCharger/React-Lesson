import React from 'react';
import Greeting from './Greeting';
import './index.scss';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {this.state.isLoggedIn ? (
          <button className="btn logout" onClick={() => this.handleLogout()}>
            Logout
          </button>
        ) : (
          <button className="btn login" onClick={() => this.handleLogin()}>
            Login
          </button>
        )}
      </div>
    );
  }
}
export default Auth;
