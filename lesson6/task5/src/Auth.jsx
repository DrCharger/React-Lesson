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

  setTime = () => {
    setTimeout(() => {
      this.setState({
        spinner: <Logout onLogout={() => this.onLogout()} />,
      });
    }, 2000);
  };
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
      spinner: <Spinner size={this.state.size} />,
    });
    this.setTime();
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return this.state.isLoggedIn ? (
      this.state.spinner
    ) : (
      // <Logout next={() => this.onLogout()} />
      <Login onLogin={() => this.onLogin()} />
    );
  }
}

export default Auth;
