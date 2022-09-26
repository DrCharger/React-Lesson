import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: true,
    isOffline: false,
  };
  online = () => {
    this.setState({
      isOnline: false,
      isFalse: true,
    });
  };
  offline = () => {
    this.setState({
      isOnline: true,
      isFalse: false,
    });
  };

  render() {
    let status;
    if (this.state.isOnline && !this.state.isOffline) {
      status = <Online ok={() => this.online()} />;
    } else {
      status = <Offline ok={() => this.offline()} />;
    }
    return <div className="status">{status}</div>;
  }
}

export default Status;
