import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [status, setOnline] = useState({ name: 'online', online: true });

  const onOnline = () => {
    setOnline({ name: 'online', online: true });
  };
  const onOffline = () => {
    setOnline({ name: 'offline', online: false });
  };

  useEffect(() => {
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  });
  const { name, online } = status;
  return <div className={classNames('status', { status_offline: !online })}>{name}</div>;
};

export default ConnectionStatus;
