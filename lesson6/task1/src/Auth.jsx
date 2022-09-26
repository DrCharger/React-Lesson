import React from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';
import './index.scss';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {!this.state.isLoggedIn ? (
          <Login onClick={() => this.onLogin()} />
        ) : (
          <Logout onClick={() => this.onLogout()} />
        )}
      </div>
    );
  }
}
export default Auth;
