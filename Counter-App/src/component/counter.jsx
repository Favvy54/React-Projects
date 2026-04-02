import { useState, useEffect, useRef } from 'react';
import '../assets/counter.css'

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleRestart = () => {
    setCount(0);
    setIsRunning(true);
  };
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-card">
        <h2>{count}</h2>
      <div className="button">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
      </div>
      
    </div>
  );
}
