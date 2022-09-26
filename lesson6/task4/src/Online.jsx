import React from 'react';

class Online extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     online: props.ok,
  //   };
  // }
  render() {
    return (
      <>
        <span className="status__text">Online</span>
        <button className="status__btn">All good!</button>
      </>
    );
  }
}

export default Online;
