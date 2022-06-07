import type { NextPage } from 'next';
import Header from '../componnents/header/header';
import LandingPart from '../componnents/landing/landingPart';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <LandingPart text="등산메이트" />
      <LandingPart text="사진을 찍어서.." />
      <LandingPart text="나만의 도감" />
    </>
  );
};

export default Home;
