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
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={() => this.onLogout()} />;
    } else {
      button = <Login onLogin={() => this.onLogin()} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default Auth;
