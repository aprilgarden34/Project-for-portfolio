import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import UserPosting from '../../../components/mobile/Userposting/UserPosting';
import CommunityUserPosting from '../../../components/desktop/Community/CommunityUserPosting/CommunityUserPosting';

const UserPostingPage: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });
  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <CommunityUserPosting /> : <UserPosting />;
  return <div>{display}</div>;
};

export default UserPostingPage;
