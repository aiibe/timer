import { Helmet } from 'react-helmet';

import { DEFAULT_TIME } from '../App';

interface Props {
  status: boolean;
  currentTime: number;
  min: string;
  sec: string;
}

function Header(props: Props) {
  const { status, currentTime, min, sec } = props;

  return (
    <Helmet defer={false}>
      <meta charSet="utf-8" />
      <title>
        {status
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
