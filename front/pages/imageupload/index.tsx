import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ImageUpload from '../../components/desktop/ImageUpload/ImageUpload';
import ImageUpload_mobile from '../../components/mobile/ImageUpload/ImageUpload_mobile';

const Index: React.FC = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <ImageUpload /> : <ImageUpload_mobile />;

  return <>{display}</>;
};

export default Index;
