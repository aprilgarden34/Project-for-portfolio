import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BookDeskTop from '../../components/desktop/Book/BookDesktop';
import BookMobile from '../../components/mobile/Book/BookMobile';

const Index: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <BookDeskTop /> : <BookMobile />;

  return <div>{display}</div>;
};

export default Index;
