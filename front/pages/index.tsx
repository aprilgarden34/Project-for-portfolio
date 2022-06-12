import type { NextPage } from 'next';
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
};

export default Home;
