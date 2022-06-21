import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import QuestMobile from '../../components/mobile/Quest/QuestMobile';

const Index: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <QuestMobile /> : <QuestMobile />;

  return <div>{display}</div>;
};

export default Index;
