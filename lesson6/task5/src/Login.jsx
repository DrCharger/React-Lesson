import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: props.onLogin,
    };
  }
  render() {
    return (
      <button className="login btn" onClick={this.state.isLogged}>
        Login
      </button>
    );
  }
}
export default Login;
