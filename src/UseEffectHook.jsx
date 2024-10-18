// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:  (pick one)

// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //   useEffect(() => {
  //     document.title = `Count: ${count} ${color}`;
  //   }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount(params) {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event is added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event is REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width}X${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    // <>
    //   <p style={{ backgroundColor: color }}>Count: {count}</p>
    //   <button onClick={addCount}>Add</button>
    //   <button onClick={subtractCount}>Subtract</button>
    //   <br />
    //   <button onClick={changeColor}>Change color</button>
    // </>
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default MyComponent;
