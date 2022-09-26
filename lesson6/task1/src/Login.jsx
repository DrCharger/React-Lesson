import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: props.onClick,
    };
  }

  render() {
    return (
      <button className="btn login" onClick={this.state.click}>
        Login
      </button>
    );
  }
}
export default Login;
