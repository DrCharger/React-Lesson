import React, { Component } from 'react';

class Dimentions extends Component {
  state = {
    width: null,
    height: null,
  };
  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimentions(innerWidth, innerHeight);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimentions(innerWidth, innerHeight);
  };

  setDimentions = (width, height) => {
    this.setState({
      width: width,
      height,
    });
  };

  render() {
    document.title = `${this.state.width} x ${this.state.height}`;
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimentions;
