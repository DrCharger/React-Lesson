import React from 'react';
import UserAge from './UserAge';

const Greeting = props => {
  // console.log(props.user);
  const age = UserAge(props.user.birthDate);
  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${props.user.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;
