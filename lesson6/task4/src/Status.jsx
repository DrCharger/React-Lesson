import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Status extends React.Component {
  state = {
    isOnline: false,
  };
  offline = () => {
    this.setState({
      isOnline: true,
    });
  };
  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline ok={() => this.offline()} />}
      </div>
    );
  }
}

export default Status;
