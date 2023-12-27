import { Helmet } from 'react-helmet';

import { DEFAULT_TIME } from './Timer/Timer';

interface Props {
  isRunning: boolean;
  currentTime: number;
  min: string;
  sec: string;
}

function Header(props: Props) {
  const { isRunning, currentTime, min, sec } = props;

  return (
    <Helmet defer={false}>
      <meta charSet="utf-8" />
      <title>
        {isRunning
          ? `${min}:${sec} running`
          : currentTime !== DEFAULT_TIME
            ? `${min}:${sec} paused`
            : 'Pomoto'}
      </title>
      <link rel="canonical" href="https://aiibe.github.io/pomoto" />
    </Helmet>
  );
}

export default Header;
