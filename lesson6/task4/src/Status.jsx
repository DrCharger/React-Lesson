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
      isOffline: true,
    });
  };
  offline = () => {
    this.setState({
      isOnline: true,
      isOffline: false,
    });
  };

  render() {
    let status;
    if (this.state.isOnline) {
      status = <Online ok={() => this.online()} />;
    }
    if (!this.state.isOffline) {
      status = <Offline ok={() => this.offline()} />;
    }
    return <div className="status">{status}</div>;
  }
}

export default Status;
