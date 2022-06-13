import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Profile_desktop from '../../components/desktop/Profile/Profile_desktop';
import Profile_mobile from '../../components/mobile/Profile/Profile_mobile';

const Index: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <Profile_desktop /> : <Profile_mobile />;

  return <div>{display}</div>;
};

export default Index;
