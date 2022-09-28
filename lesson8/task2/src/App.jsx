import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock location="New York" offset={-5} />}</div>
        <div>{this.state.visible && <Clock location="Kyiv" offset={3} />}</div>
        <div>{this.state.visible && <Clock location="London" offset={0} />}</div>
      </>
    );
  }
}

export default App;
