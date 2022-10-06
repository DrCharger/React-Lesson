import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimension, setDimension] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
    const handleResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDimension({
        width: innerWidth,
        height: innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimension;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
