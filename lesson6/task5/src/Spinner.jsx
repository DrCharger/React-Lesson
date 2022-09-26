import React from 'react';
import Logout from './Logout';

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ok: props.ok,
      spinner: (
        <span
          className="spinner"
          style={{ height: props.size + 'px', width: props.size + 'px' }}
        ></span>
      ),
    };

    setTimeout(() => {
      console.log(this.state.ok);
      this.setState({
        spinner: <Logout next={this.state.ok} />,
      });
    }, 2000);
  }
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    return this.state.spinner;
  }
}

export default Spinner;
