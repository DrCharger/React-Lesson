import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import Status from './Status';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth unreadMessages={[]} />, rootElement);
