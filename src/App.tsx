import { useState, useRef, useEffect } from "react";

import Alarm from "./assets/bell.ogg";

import TaskTitle from "./components/TaskTitle";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Control from "./components/Control";

export const DEFAULT_TIME = 25 * 60;

export default function App() {
  const interval = useRef<NodeJS.Timeout>();
  const [currentTime, setCurrentTime] = useState(DEFAULT_TIME);
  const [status, setStatus] = useState(false);
  const alarm = new Audio(Alarm);

  /**
   * Ring when count down ends
   */
  useEffect(() => {
    if (currentTime == 0) {
      clearInterval(interval.current);
      setStatus(false);
      setCurrentTime(DEFAULT_TIME);
      alarm.play();
    }
  }, [currentTime]);

  // Start/Resume timer
  function startResume() {
    if (!status) {
      setStatus(true);
      interval.current = setInterval(() => {
        setCurrentTime((time) => time - 1);
      }, 1000);
    } else {
      setStatus(false);
      clearInterval(interval.current);
    }
  }

  // Reset timer
  function reset() {
    !status && setCurrentTime(DEFAULT_TIME);
  }

  // Display time
  const min = Math.floor(currentTime / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const sec = (currentTime % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div className="frame">
      <Header status={status} currentTime={currentTime} min={min} sec={sec} />

      <TaskTitle />

      <Timer currentTime={currentTime} min={min} sec={sec} />

      <Control status={status} startResume={startResume} reset={reset} />
    </div>
  );
}
