import React from 'react';
import moment from 'moment';

const formatTime = date => moment(date).format('HH : mm');
const formatDate = date => moment(date).format('DD MMM');
const formatAmount = amount => new Intl.NumberFormat('en-GB').format(amount);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{formatAmount(rate)}</span>
      <span className="transaction__amount">{formatAmount(amount)}</span>
    </li>
  );
};

export default Transaction;
