import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: false,
  };

  render() {
    return <div className="status">{this.state.isOnline ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
