import React from 'react';
import UserAge from './UserAge';

const Greeting = props => {
  const age = UserAge(props.birthDate);
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;
