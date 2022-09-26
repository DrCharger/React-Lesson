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
      spinner: <Spinner size={props.size} />,
    };
    setTimeout(() => {
      console.log(this.state.ok);
      this.setState({
        spinner: <Logout next={() => this.onLogout()} />,
      });
    }, 2000);
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
      this.state.spinner
      // <Spinner size={this.state.size} ok={() => this.onLogout()} />
    );
  }
}

export default Auth;
