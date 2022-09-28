import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      status: 'online',
    });
  };
  onOffline = () => {
    this.setState({
      status: 'offline',
    });
  };
  render() {
    return this.state.status !== 'online' ? (
      <div className="status status_offline">{this.state.status}</div>
    ) : (
      <div className="status ">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
