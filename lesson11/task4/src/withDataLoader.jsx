import React from 'react';
import Spinner from './Spinner';

export const withDataLoader = url => Component => {
  return class Container extends React.Component {
    state = {
      data: null,
    };
    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            data,
          }),
        );
    }
    render() {
      if (this.state.data === null) {
        return <Spinner />;
      }
      return <Component data={this.state.data} />;
    }
  };
};
