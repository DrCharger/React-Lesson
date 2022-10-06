import React, { useState, useEffect } from 'react';
import './clock.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [state, setState] = useState({
    time: getTimeWithOffset(offset),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        time: getTimeWithOffset(offset),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(state.time)}</div>
    </div>
  );
};

export default Clock;
