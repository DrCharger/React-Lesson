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
        // spinner: <Spinner size={this.state.size} />,
        spinner: <Logout next={() => this.onLogout()} />,
      });
    }, 2000);
  };
  onLogin = async () => {
    this.setState({
      isLoggedIn: true,
      spinner: <Spinner size={this.state.size} />,
    });
    await this.setTime();
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      spinner: <Spinner size={this.state.size} />,
    });
  };

  render() {
    return this.state.isLoggedIn ? (
      this.state.spinner
    ) : (
      // <Logout next={() => this.onLogout()} />
      <Login ok={() => this.onLogin()} />

      // <Spinner size={this.state.size} ok={() => this.onLogout()} />
    );
  }
}

export default Auth;
