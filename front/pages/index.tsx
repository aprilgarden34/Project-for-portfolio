import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import type { NextPage } from 'next';
<<<<<<< HEAD
import Header from '../components/header/header';
// import LandingPage from '../componnents/landing/landingPage';
import LandingPage from '../components/landing/_test/landingPage';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
=======
import HomepageMobile from '../components/mobile/HomePage/HomepageMobile';
import LandingPage from '../components/desktop/Landing/landingPage';

const Home: NextPage = () => {
  const IsdeskTop = useMediaQuery({
    query: '(min-width:500px)',
  });

  const [displayMode, setDisplayMode] = useState(true);
  useEffect(() => setDisplayMode(IsdeskTop));

  const display = displayMode ? <LandingPage /> : <HomepageMobile />;

  return <>{display}</>;
>>>>>>> front
};

export default Home;
