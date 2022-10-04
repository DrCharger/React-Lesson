import React, { Component } from 'react';
import Spinner from './Spinner';

class InputElement extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };
  render() {
    let btn;
    if (!this.props.updater) {
      btn = <Spinner size={20} />;
    } else {
      btn = (
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
          {' '}
          Create
        </button>
      );
    }

    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {btn}
      </div>
    );
  }
}

export default InputElement;
