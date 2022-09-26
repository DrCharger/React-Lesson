import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: true,
  };
  online = () => {
    this.setState({
      isOnline: false,
    });
  };
  offline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    let status;
    if (this.state.isOnline) {
      status = <Online ok={() => this.online()} />;
    } else {
      status = <Offline ok={() => this.offline()} />;
    }
    return <div className="status">{status}</div>;
  }
}

export default Status;
