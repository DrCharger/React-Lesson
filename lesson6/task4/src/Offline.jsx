import React from 'react';

class Offline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offline: props.ok,
    };
  }
  render() {
    return (
      <>
        <span className="status__text">Offline</span>
        <button className="status__btn" onClick={this.state.offline}>
          Reconnect
        </button>
      </>
    );
  }
}

export default Offline;
