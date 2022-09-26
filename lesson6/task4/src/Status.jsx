import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: true,
    isOffline: true,
  };
  online = () => {
    this.setState({
      isOnline: false,
      isOffline: false,
    });
  };
  offline = () => {
    this.setState({
      isOnline: true,
      isOffline: true,
    });
  };

  render() {
    // let status;
    // if (this.state.isOnline) {
    //   status = <Online ok={() => this.online()} />;
    // }
    // if (!this.state.isOffline) {
    //   status = <Offline ok={() => this.offline()} />;
    // }
    return (
      <div className="status">
        {this.state.isOnline && <Online />}
        {!this.state.isOffline && <Offline />}
      </div>
    );
  }
}

export default Status;
