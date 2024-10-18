// updater function = A function passed as an argument to setState() usually
//                                  ex. setYear(y => y + 1)
//                                 Allow for safe updates based on the previous state
//                                 Used with multiple state updates and asynchronous functions
//                                 Good practice to use updater functions

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="display-count">{count}</p>
      <button className="counterButton" onClick={decrement}>
        Decrement
      </button>
      <button className="counterButton" onClick={increment}>
        Increment
      </button>
      <button className="counterButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
