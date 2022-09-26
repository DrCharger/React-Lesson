import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
    };
  }
  render() {
    return (
      <span
        className="spinner"
        style={{ height: this.state.size + 'px', width: this.state.size + 'px' }}
      ></span>
    );
  }
}
export default Spinner;
