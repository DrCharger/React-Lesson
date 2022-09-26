import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: props.onClick,
    };
  }
  render() {
    return (
      <button className="btn logout" onClick={this.state.click}>
        Logout
      </button>
    );
  }
}
export default Logout;
