import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setOnline] = useState(true);

  const toggleOnline = () => {
    setOnline(!isOnline);
  };

  useEffect(() => {
    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOnline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOnline);
    };
  });

  return isOnline ? (
    <div className="status">Online</div>
  ) : (
    <div className="status status_offline">Offline</div>
  );
};

export default ConnectionStatus;
