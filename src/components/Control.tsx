import { Pause, Play, Reset } from "./icons";

interface Props {
  status: boolean;
  startResume: () => void;
  reset: () => void;
}

function Control(props: Props) {
  const { status, startResume, reset } = props;

  return (
    <div className="controls">
      <button
        className="button-rounded"
        onClick={startResume}
        title="Play/Resume timer"
      >
        {status ? (
          <Pause className="icon-button" />
        ) : (
          <Play className="icon-button" />
        )}
      </button>
      <button className="button-rounded" onClick={reset} title="Reset timer">
        <Reset className="icon-button" />
      </button>
    </div>
  );
}

export default Control;
