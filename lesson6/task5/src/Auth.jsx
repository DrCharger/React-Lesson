import React from 'react';
import Online from './Online';
import Offline from './Offline';
import './index.scss';

class Auth extends React.Component {
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

export default Auth;
