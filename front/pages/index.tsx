import type { NextPage } from 'next';
import Header from '../componnents/header/header';
// import LandingPage from '../componnents/landing/landingPage';
import LandingPage from '../componnents/landing/_test/landingPage';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
};

export default Home;
