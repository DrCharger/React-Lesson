import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
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
  number: PropTypes.number,
};
Numbers.defaultProps = {
  title: 'Just 17',
  number: 17,
};

export default Numbers;
