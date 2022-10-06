import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [diment, setDiment] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDiment({
      width: innerWidth,
      height: innerHeight,
    });
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDiment({
        width: innerWidth,
        height: innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <div class="dimensions">{`${diment.width} - ${diment.height}`}</div>;
};

export default Dimensions;
