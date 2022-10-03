import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };
  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  onOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div class="app">
        <button class="btn" onClick={this.onOpen}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.handleClose}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
