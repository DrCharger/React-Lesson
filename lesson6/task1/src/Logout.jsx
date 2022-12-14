import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.onLogout);
    this.state = {
      isLoggedIn: props.onLogout,
    };
  }
  render() {
    return (
      <button className="btn logout" onClick={this.state.isLoggedIn}>
        Logout
      </button>
    );
  }
}
export default Logout;
