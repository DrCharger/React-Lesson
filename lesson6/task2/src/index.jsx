import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[]} />, rootElement);
