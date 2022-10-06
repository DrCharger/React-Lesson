import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);
  const toggleOnline = () => {
    setStatus(!status);
  };

  useEffect(() => {
    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOnline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOnline);
    };
  });

  return status ? (
    <div className="status ">Online</div>
  ) : (
    <div className="status status_offline">Offline</div>
  );
};

export default ConnectionStatus;
