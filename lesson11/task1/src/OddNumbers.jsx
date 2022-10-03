import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OddNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps % 2 === 1;
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}
Numbers.PropTypes = {
  title: PropTypes.string,
  numbers: PropTypes.number,
};
Numbers.defaultProps = {
  title: 'Just 17',
  numbers: 17,
};

export default OddNumbers;
