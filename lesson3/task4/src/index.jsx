import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2001-01-01T11:11:11.819Z',
};

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate="2001-01-01T11:11:11.819Z" />,
  rootElem,
);
