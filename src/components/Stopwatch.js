import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  

  let hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let seconds = ("0" + ((time / 10) % 100)).slice(-2);

  return (
    <div className="time">
      <div className="digits">
        <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </div>

      <div className="button">
        <button className="btn" onClick={() => setRunning(true)}>Start</button>
        <button className="btn" onClick={() => setRunning(false)}>Stop</button>
        <button className="btn" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch
