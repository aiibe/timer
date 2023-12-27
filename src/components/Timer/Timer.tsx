import { Fragment, useEffect, useRef, useState } from 'react';

import Ring from '../Ring';
import Header from '../Header';
import Control from './Control';

import NotificationSound from '../../assets/simple-notification.mp3';

export const DEFAULT_TIME = 25 * 60; // seconds

function Timer() {
  const interval = useRef<NodeJS.Timeout>();

  const duration = useRef(DEFAULT_TIME);
  const [currentTime, setCurrentTime] = useState(duration.current);
  const [isRunning, setIsRunning] = useState(false);
  const alarm = useRef(new Audio(NotificationSound));

  /**
   * Ring when count down ends
   */
  useEffect(() => {
    if (currentTime == 0) {
      clearInterval(interval.current);
      setIsRunning(false);
      setCurrentTime(duration.current);
      alarm.current.play();
    }
  }, [currentTime]);

  // Start/Resume timer
  function startResume() {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setCurrentTime((time) => time - 1);
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(interval.current);
    }
  }

  // Set duration
  function handleSetDuration(minute: number) {
    setCurrentTime(minute);
    duration.current = minute;
  }

  // Reset timer
  function reset() {
    setCurrentTime(duration.current);
  }

  // Display time
  const min = Math.floor(currentTime / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const sec = (currentTime % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const percentProgress =
    ((duration.current - currentTime) * 100) / duration.current;

  return (
    <Fragment>
      <Header
        isRunning={isRunning}
        currentTime={currentTime}
        min={min}
        sec={sec}
      />

      <div className="clock-holder">
        <Ring radius={130} stroke={10} progress={percentProgress} />
        <div className="digits">
          <div className="clock">
            <div className="minutes">{min}</div>
            <div className="separator">:</div>
            <div className="seconds">{sec}</div>
          </div>
        </div>
      </div>

      <Control
        isRunning={isRunning}
        startResume={startResume}
        reset={reset}
        setDuration={handleSetDuration}
        currentTime={currentTime}
        endTime={duration.current}
      />
    </Fragment>
  );
}

export default Timer;
