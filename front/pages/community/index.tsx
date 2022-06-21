import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Community from '../../components/desktop/Community/Community';
import CommunityMobile from '../../components/mobile/Community/CommunityMobile';

const CommunityPage: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });
  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <Community /> : <CommunityMobile />;
  return <div>{display}</div>;
};

export default CommunityPage;
