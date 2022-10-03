import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  handleChange = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand title="Some title" isOpen={this.state.isOpen} handleChange={this.handleChange}>
          {this.state.isOpen ? (
            <p>
              Hooks are a new addition in React 16.8. They let you use state and other React
              features without writing a class.
            </p>
          ) : null}
        </Expand>
      </div>
    );
  }
}

export default App;
