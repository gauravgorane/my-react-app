import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const lapsRef = useRef(null);
  const intervalIDRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIDRef.current = setInterval(() => {
        setElapseTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIDRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (lapsRef.current && laps.length > 0) {
      const lastLap = lapsRef.current.lastChild;
      if (lastLap) {
        lastLap.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [laps]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapseTime(0);
    setIsRunning(false);
    setLaps([]);
  }

  function lap() {
    setLaps((l) => [...l, formatTime()]);
  }

  function formatTime() {
    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapseTime / 1000) % 60);
    let miliseconds = Math.floor((elapseTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <div className="stopwatch-body">
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
          <button onClick={lap} className="lap-button" disabled={!isRunning}>
            Lap
          </button>
        </div>
        <div className="laps" ref={lapsRef}>
          {laps.map((lapTime, index) => (
            <div key={index} className="lap">
              Lap {index + 1}: {lapTime}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
