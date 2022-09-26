import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLogged: props.next,
    };
  }
  render() {
    return (
      <button className="logout btn" onClick={this.state.isLogged}>
        Logout
      </button>
    );
  }
}
export default Logout;
