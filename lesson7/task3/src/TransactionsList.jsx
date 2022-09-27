import React from 'react';
import Transactions from './Transactions';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(trans => (
        <Transactions key={trans.id} {...trans} />
      ))}
    </ul>
  );
};

export default TransactionsList;
