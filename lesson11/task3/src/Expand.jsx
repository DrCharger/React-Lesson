import React, { Component } from 'react';

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleChange = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    let icon;
    let content;
    const { children, title } = this.props;
    if (!this.state.isOpen) {
      icon = <i className="fas fa-chevron-down"></i>;
    } else {
      icon = <i className="fas fa-chevron-up"></i>;
      content = children;
    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.handleChange}>
            {icon}
          </button>
        </div>
        <div className="expand__content">{content}</div>
      </div>
    );
  }
}

export default Expand;
