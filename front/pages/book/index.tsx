import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BookDeskTop from '../../components/desktop/Book/BookDesktop';
import Book_mobile from '../../components/mobile/Book/Book_mobile';

const Index: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <BookDeskTop /> : <Book_mobile />;

  return <div>{display}</div>;
};

export default Index;
