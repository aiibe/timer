import { Pause, Play, Reset } from '../icons';

interface Props {
  isRunning: boolean;
  startResume: () => void;
  reset: () => void;
  setDuration: (minute: number) => void;
  currentTime: number;
  endTime: number;
}

function Control(props: Props) {
  const { isRunning, startResume, reset, setDuration } = props;
  const { currentTime, endTime } = props;

  return (
    <div className="controls">
      <div className="set-duration">
        {[15, 25].map((minute, i) => (
          <button
            key={i}
            className="button"
            disabled={isRunning || currentTime === minute * 60}
            onClick={() => setDuration(minute * 60)}
          >
            {minute} min
          </button>
        ))}
      </div>

      <div className="start-pause">
        <button
          className="button-rounded"
          onClick={startResume}
          title="Play/Resume timer"
        >
          {isRunning ? (
            <Pause className="icon-button" />
          ) : (
            <Play className="icon-button" />
          )}
        </button>
        <button
          className="button-rounded"
          disabled={isRunning || (!isRunning && endTime === currentTime)}
          onClick={reset}
          title="Reset timer"
        >
          <Reset className="icon-button" />
        </button>
      </div>
    </div>
  );
}

export default Control;
