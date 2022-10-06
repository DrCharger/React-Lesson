import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCount] = useState(0);
  return (
    <div class="counter">
      <button class="counter__button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span class="counter__value" onClick={() => setCount(0)}>
        {counter}
      </span>
      <button class="counter__button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
