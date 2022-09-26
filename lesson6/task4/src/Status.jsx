import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: true,
  };
  render() {
    return (
      <div className="status">
        {this.state.isOnline && <Online />}
        {!this.state.isOnline && <Offline />}
      </div>
    );
  }
}

export default Status;
