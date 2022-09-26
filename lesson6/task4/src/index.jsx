import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Status unreadMessages={[]} />, rootElement);
