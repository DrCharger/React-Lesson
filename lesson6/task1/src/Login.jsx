import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.onLogin,
    };
  }
  render() {
    return (
      <button className="btn login" onClick={this.state.isLoggedIn}>
        Login
      </button>
    );
  }
}
export default Login;
