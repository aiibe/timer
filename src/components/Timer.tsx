import { DEFAULT_TIME } from "../App";
import Ring from "./Ring";

interface Props {
  currentTime: number;
  min: string;
  sec: string;
}

function Timer(props: Props) {
  const { currentTime, min, sec } = props;

  return (
    <div className="clock-holder">
      <Ring
        radius={150}
        stroke={10}
        progress={((DEFAULT_TIME - currentTime) * 100) / DEFAULT_TIME}
      />
      <div className="digits">
        <div className="clock">
          <div className="minutes">{min}</div>
          <div className="separator">:</div>
          <div className="seconds">{sec}</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
