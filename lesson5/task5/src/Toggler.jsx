import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointer: 'Off',
    };
  }
  toggler = () => {
    this.setState({
      pointer: this.state.pointer === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return <div onClick={this.toggler} className="toggler">{`${this.state.pointer}`}</div>;
  }
}

export default Toggler;
