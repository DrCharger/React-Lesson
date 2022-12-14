import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: props.offset,
      time: getTimeWithOffset(props.offset),
      location: props.location,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.state.offset),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{`${formatDate(this.state.time)}`}</div>
      </div>
    );
  }
}
export default Clock;
