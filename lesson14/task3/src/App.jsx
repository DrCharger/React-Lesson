import React, { useState } from 'react';
import Dimensions from './Dimensions';

const App = () => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <div className="page">
      <div>
        <button className="btn" onClick={() => setVisibility(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setVisibility(false)}>
          Hide
        </button>
        {isVisible && <Dimensions />}
      </div>
    </div>
  );
};

export default App;
