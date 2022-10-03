import React, { Component } from 'react';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';

class App extends Component {
  state = {
    numbers: 0,
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          numbers: this.state.numbers + 1,
        }),
      1000,
    );
  }
  render() {
    return (
      <div>
        <OddNumbers title={'Odd numbers'} numbers={this.state.numbers} />
        <EvenNumbers title={'Even numbers'} numbers={this.state.numbers} />
        <Numbers title={'All numbers'} numbers={this.state.numbers} />
        <Numbers />
      </div>
    );
  }
}

export default App;
